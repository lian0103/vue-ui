const fs = require('fs-extra');
const handlebars = require('handlebars');
const { resolve, join } = require('path');

const listFilePath = '../../package/components.json';
const listFileChaetPath = '../../package-chart/components.json';
const listFile = fs.readFileSync(resolve(__dirname, listFilePath), 'utf-8');
const listFileChart = fs.readFileSync(
  resolve(__dirname, listFileChaetPath),
  'utf-8'
);

const componentListObj = JSON.parse(listFile);
const componentListChartObj = JSON.parse(listFileChart);

let componentList = Object.keys(componentListObj);
let componentChartList = Object.keys(componentListChartObj);

const targetMap = {
  package: {
    list: componentList,
    getDemoFilePath: (compName) =>
      `../../package/gt-components/${compName}/docs/demo.vue`,
    getDocIndexPath: (compName) =>
      `../../package/gt-components/${compName}/docs/index.js`,
    demoFileOutputPath: '../../src/gtDoc.js',
    docIndexOutputPath: '../../src/gtDocTable.js',
    outputViewFilePathDev: '../../src/views/VGtComponent.vue',
    outputViewFilePathProd: '../../src/views/VGtComponentProd.vue',
    docSource: `
import gtDocTable from '../gtDocTable';
import gtDoc from '../gtDoc';
    `,
  },
  'package-chart': {
    list: componentChartList,
    getDemoFilePath: (compName) =>
      `../../package-chart/gt-components/${compName}/docs/demo.vue`,
    getDocIndexPath: (compName) =>
      `../../package-chart/gt-components/${compName}/docs/index.js`,
    demoFileOutputPath: '../../src/gtDocChart.js',
    docIndexOutputPath: '../../src/gtDocChartTable.js',
    outputViewFilePathDev: '../../src/views/VGtChart.vue',
    outputViewFilePathProd: '../../src/views/VGtChartProd.vue',
    docSource: `
import gtDocTable from '../gtDocChartTable';
import gtDoc from '../gtDocChart';
    `,
  },
};
function genGtDoc(target) {
  const tpl = fs.readFileSync(
    resolve(__dirname, './.template/gtDoc.js.tpl'),
    'utf-8'
  );
  let list = targetMap[target].list;

  const docList = list
    .map((compName) => {
      let demoFilePath = targetMap[target].getDemoFilePath(compName);
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
    resolve(__dirname, targetMap[target].demoFileOutputPath),
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

  const docTableList = list
    .map((compName) => {
      let jsObjFilePath = targetMap[target].getDocIndexPath(compName);
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
    resolve(__dirname, targetMap[target].docIndexOutputPath),
    docJsContentCompiled,
    (err) => {
      if (err) console.log(err);
    }
  );
}

function genVGtComponent(target, MODE = 'develop') {
  const tpl = fs.readFileSync(
    resolve(__dirname, './.template/VGtComponent.vue.tpl'),
    'utf-8'
  );

  let list = targetMap[target].list;

  const allDemos = list
    .map((compName) => {
      let demoFilePath =
        MODE === 'develop'
          ? targetMap[target].getDemoFilePath(compName)
          : `../../docs/${compName}/demo.vue`;
      return `import ${compName
        .replace(/\-/g, '')
        .toUpperCase()} from '${demoFilePath}';`;
    })
    .join('\n');
  const mapObj = list
    .map((compName) => {
      return `'${compName}' : ${compName.replace(/\-/g, '').toUpperCase()} ,`;
    })
    .join('\n    ');

  const docSource = targetMap[target].docSource;

  const contentCompiled = handlebars.compile(tpl, {
    noEscape: true,
  })({ allDemos, mapObj, docSource });

  let outputPath =
    MODE === 'develop'
      ? resolve(__dirname, targetMap[target].outputViewFilePathDev)
      : resolve(__dirname, targetMap[target].outputViewFilePathProd);

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

function sortChartComponentList() {
  let obj = {};
  componentChartList.sort();

  componentChartList.forEach((key) => {
    obj[key] = componentListChartObj[key];
  });

  fs.writeFileSync(
    join(__dirname, '../../package-chart/components.json'),
    JSON.stringify(obj, null, 2)
  );
}

function cpDoc(target) {
  targetMap[target].list.forEach((compName) => {
    let src = join(__dirname, targetMap[target].getDemoFilePath(compName));
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
  genGtDoc('package');
  genGtDoc('package-chart');

  genVGtComponent('package');
  genVGtComponent('package-chart');

  sortComponentList();
  sortChartComponentList();

  genVGtComponent('package', 'product');
  genVGtComponent('package-chart', 'product');

  cpDoc('package');
  cpDoc('package-chart');
}
run();
