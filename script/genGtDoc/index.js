const fs = require('fs-extra');
const handlebars = require('handlebars');
const { resolve } = require('path');

function genGtDoc() {
  const tpl = fs.readFileSync(
    resolve(__dirname, './.template/gtDoc.js.tpl'),
    'utf-8'
  );
  const listFilePath = '../../packages/list.json';
  const listFile = fs.readFileSync(resolve(__dirname, listFilePath), 'utf-8');
  const listFileContent = JSON.parse(listFile);

  // console.log('listFileContent',listFileContent)
  const docList = listFileContent
    .map((item) => {
      let { compName } = item;
      let demoFilePath = `../../packages/${compName}/docs/demo.vue`;
      let demoFile = fs.readFileSync(resolve(__dirname, demoFilePath), 'utf-8');
      demoFile = demoFile.replaceAll('`', '\'').replaceAll('${', '');
      // console.log(demoFile);
      return `${compName}: \` \\\`\\\`\\\` html 
${demoFile}  \\\`\\\`\\\`  \`,`;
    })
    .join('\n    ');
  //   console.log('docList', docList);

  const contentCompiled = handlebars.compile(tpl, {
    noEscape: true,
  })({ docList });
  fs.outputFile(
    resolve(__dirname, '../../src/assets/gtDoc.js'),
    contentCompiled,
    (err) => {
      if (err) console.log(err);
    }
  );
}

async function run() {
  genGtDoc();
}
run();
