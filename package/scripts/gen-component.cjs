const args = process.argv.slice(2);
if (args[0] === null || args[0] === undefined) {
  console.log("第一個參數為組件名稱");
  return;
}
const uppercamelcase = require("uppercamelcase");
const path = require("path");
const COMPONENT_NAME = args[0];
const PKG_HOME = path.join(__dirname, "../gt-components/");
const SCSS_HOME = path.join(__dirname, "../assets/scss");
const COMPONENT_NAME_LOWER = COMPONENT_NAME.toLowerCase();
const COMPONENT_NAME_UPPER = COMPONENT_NAME.toUpperCase();
const COMPONENT_NAME_UPPER_CAMEL = uppercamelcase(COMPONENT_NAME_LOWER);
const COMPONENT_HOME = path.join(PKG_HOME, COMPONENT_NAME_LOWER);
const GT_COMPONENT_NAME = "G" + COMPONENT_NAME_UPPER_CAMEL;

const fs = require("fs");
if (fs.existsSync(COMPONENT_HOME)) {
  console.log("exist !!");
  return;
}

const render = require("json-templater/string");

const TEMPLATE_VUE = `<script setup>
</script>
<script>
export default {
  name: "{{GT_COMPONENT_NAME}}",
};
</script>
<template>
</template>`;

const TEMPLATE_DOCDEMO_VUE = `<script setup>
</script>
<template>
</template>`;


const TEMPLATE_INDEX = `import {{GT_COMPONENT_NAME}} from "./src/{{COMPONENT_NAME_LOWER}}.vue";

/* istanbul ignore next */
{{GT_COMPONENT_NAME}}.install = function (Vue) {
  Vue.component({{GT_COMPONENT_NAME}}.name, {{GT_COMPONENT_NAME}});
};

export default {{GT_COMPONENT_NAME}};
`;

const templateVue = render(TEMPLATE_VUE, {
  GT_COMPONENT_NAME: GT_COMPONENT_NAME,
});
const templateIndex = render(TEMPLATE_INDEX, {
  GT_COMPONENT_NAME: GT_COMPONENT_NAME,
  COMPONENT_NAME_LOWER: COMPONENT_NAME_LOWER,
});
const templateDocDemoVue = render(TEMPLATE_DOCDEMO_VUE,{})

fs.mkdir(path.join(COMPONENT_HOME), () => {});
fs.mkdir(path.join(COMPONENT_HOME, "src"), () => {});
fs.mkdir(path.join(COMPONENT_HOME, "docs"), () => {});
fs.writeFileSync(path.join(COMPONENT_HOME, "index.js"), templateIndex);

console.log("[build index] DONE:" + path.join(COMPONENT_HOME, "index.js"));

fs.writeFileSync(
  path.join(COMPONENT_HOME, "docs", "demo.vue"),
  templateDocDemoVue
);

fs.writeFileSync(
  path.join(COMPONENT_HOME, "src", COMPONENT_NAME_LOWER + ".vue"),
  templateVue
);
console.log(
  "[build component] DONE:" +
    path.join(COMPONENT_HOME, "src", COMPONENT_NAME_LOWER + ".vue")
);

fs.writeFileSync(path.join(SCSS_HOME, COMPONENT_NAME_LOWER + ".scss"), "");
console.log(
  "[build scss] DONE:" + path.join(SCSS_HOME, COMPONENT_NAME_LOWER + ".scss")
);

var components = require("../components.json");
components[COMPONENT_NAME_LOWER] =
  "./gt-components/" + COMPONENT_NAME_LOWER + "/index.js";
fs.writeFileSync(
  path.join(__dirname, "../components.json"),
  JSON.stringify(components, null, 2)
);
console.log(
  "[modify components.json] DONE:" +
    path.join(__dirname, "../components.json")
);
console.log(__dirname);

const execSync = require("child_process").execSync;
execSync("npm run gen:pkg-index");
execSync("npm run gen:css-index");
