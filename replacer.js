const replace = require("replace-in-file");

const basePath = "/political-official";

const options = {
  //you may need to modify the file address to suite your project
  files: "./out/**",
  from: [/\/design_assets/g, /\\\/political-official\/design_assets/g],
  to: [`${basePath}/design_assets`, `\\\/political-official\\\/design_assets`]
};
(async function () {
  try {
    const results = await replace(options);
    console.log("Replacement results:", results);
  } catch (error) {
    console.error("Error occurred:", error);
  }
})();
