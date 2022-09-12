const fs = require('fs-extra');
const handlebars = require('handlebars');
const { resolve } = require('path');

const listFilePath = '../../package/components.json';
const listFile = fs.readFileSync(resolve(__dirname, listFilePath), 'utf-8');
var listFileContent = JSON.parse(listFile);

listFileContent = Object.keys(listFileContent);

// console.log('listFileContent', listFileContent);

function genGtDoc() {
  const tpl = fs.readFileSync(
    resolve(__dirname, './.template/gtDoc.js.tpl'),
    'utf-8'
  );
  // console.log('listFileContent',listFileContent)
  const docList = listFileContent
    .map((compName) => {
      let demoFilePath = `../../package/gt-components/${compName}/docs/demo.vue`;
      let demoFile = fs.readFileSync(resolve(__dirname, demoFilePath), 'utf-8');
      demoFile = demoFile.replace(/\`/g,"'").replace(/\$\{/g,'');
      // console.log(demoFile);
      return `'${compName}': \` \\\`\\\`\\\` html 
${demoFile}  \\\`\\\`\\\`  \`,`;
    })
    .join('\n    ');
  // console.log('docList', docList);

  const contentCompiled = handlebars.compile(tpl, {
    noEscape: true,
  })({ docList });

  fs.outputFile(
    resolve(__dirname, '../../src/gtDoc.js'),
    contentCompiled,
    (err) => {
      if (err) console.log(err);
    }
  );

  //doctable
  const tplTable = fs.readFileSync(
    resolve(__dirname, './.template/gtDocTable.js.tpl'),
    'utf-8'
  );

  const docTableList = listFileContent
    .map((compName) => {
      let jsObjFilePath = `../../package/gt-components/${compName}/docs/index.js`;
      let obj = fs.existsSync(resolve(__dirname, jsObjFilePath))
        ? require(jsObjFilePath)
        : {};
      return `'${compName}': ${JSON.stringify(obj)}, `;
    })
    .join('\n    ');

  const docJsContentCompiled = handlebars.compile(tplTable, {
    noEscape: true,
  })({ docTableList });

  fs.outputFile(
    resolve(__dirname, '../../src/gtDocTable.js'),
    docJsContentCompiled,
    (err) => {
      if (err) console.log(err);
    }
  );
}

function genVGtComponent() {
  const tpl = fs.readFileSync(
    resolve(__dirname, './.template/VGtComponent.vue.tpl'),
    'utf-8'
  );

  const allDemos = listFileContent
    .map((compName) => {
      let demoFilePath = `../../package/gt-components/${compName}/docs/demo.vue`;
      return `import ${compName
        .replace(/\-/g,'')
        .toUpperCase()} from '${demoFilePath}';`;
    })
    .join('\n');
  const mapObj = listFileContent
    .map((compName) => {
      return `'${compName}' : ${compName.replace(/\-/g, '').toUpperCase()} ,`;
    })
    .join('\n    ');

  const contentCompiled = handlebars.compile(tpl, {
    noEscape: true,
  })({ allDemos, mapObj });

  fs.outputFile(
    resolve(__dirname, '../../src/views/VGtComponent.vue'),
    contentCompiled,
    (err) => {
      if (err) console.log(err);
    }
  );
}

async function run() {
  genGtDoc();
  genVGtComponent();
}
run();
