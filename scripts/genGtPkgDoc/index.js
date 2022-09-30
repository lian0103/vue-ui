const fs = require('fs-extra');
const handlebars = require('handlebars');
const { resolve, join } = require('path');

const listFilePath = '../../package/components.json';
const listFile = fs.readFileSync(resolve(__dirname, listFilePath), 'utf-8');
const componentListObj = JSON.parse(listFile);

let componentList = Object.keys(componentListObj);

function genGtDoc() {
  const tpl = fs.readFileSync(
    resolve(__dirname, './.template/gtDoc.js.tpl'),
    'utf-8'
  );

  const docList = componentList
    .map((compName) => {
      let demoFilePath = `../../package/gt-components/${compName}/docs/demo.vue`;
      let demoFile = fs.readFileSync(resolve(__dirname, demoFilePath), 'utf-8');
      demoFile = demoFile.replace(/\`/g, "'").replace(/\$\{/g, '');
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

  const docTableList = componentList
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

function genVGtComponent(MODE = 'develop') {
  const tpl = fs.readFileSync(
    resolve(__dirname, './.template/VGtComponent.vue.tpl'),
    'utf-8'
  );

  const allDemos = componentList
    .map((compName) => {
      let demoFilePath =
        MODE === 'develop'
          ? `../../package/gt-components/${compName}/docs/demo.vue`
          : `../../docs/${compName}/demo.vue`;
      return `import ${compName
        .replace(/\-/g, '')
        .toUpperCase()} from '${demoFilePath}';`;
    })
    .join('\n');
  const mapObj = componentList
    .map((compName) => {
      return `'${compName}' : ${compName.replace(/\-/g, '').toUpperCase()} ,`;
    })
    .join('\n    ');

  const contentCompiled = handlebars.compile(tpl, {
    noEscape: true,
  })({ allDemos, mapObj });

  let outputPath =
    MODE === 'develop'
      ? resolve(__dirname, '../../src/views/VGtComponent.vue')
      : resolve(__dirname, '../../src/views/VGtComponentProd.vue');

  fs.outputFile(outputPath, contentCompiled, (err) => {
    if (err) console.log(err);
  });
}

function sortComponentList() {
  let obj = {};
  componentList.sort();

  componentList.forEach((key) => {
    obj[key] = componentListObj[key];
  });

  fs.writeFileSync(
    join(__dirname, '../../package/components.json'),
    JSON.stringify(obj, null, 2)
  );
}

function cpDoc() {
  componentList.forEach((compName) => {
    let src = join(
      __dirname,
      `../../package/gt-components/${compName}/docs/demo.vue`
    );
    let dirDist = join(__dirname, `../../docs/${compName}`);
    let dist = join(__dirname, `../../docs/${compName}/demo.vue`);
    if (fs.existsSync(dirDist)) {
      fs.copyFileSync(src, dist);
    } else {
      fs.mkdirSync(dirDist);
      fs.copyFileSync(src, dist);
    }
  });
}

async function run() {
  genGtDoc();
  genVGtComponent();
  sortComponentList();
  cpDoc();
  genVGtComponent('product');
}
run();
