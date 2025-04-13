/**
 * Automatically imports all the modules and exports as a single module object
 */
const files = import.meta.glob("./*.js");

const modules = {};
for (const key in files) {
  // if (key === "./index.js") continue;

  const importModule = files[key]
  const module = await importModule()

  const moduleName = key
    .replace(/(\.\/|\.js)/g, "")
    .replace(/\.module$/, "")
    .replace(/^\w/, (c) => c.toUpperCase());

  modules[moduleName] = module.default
}

export default modules;
