import { generateJSON } from "./generate-json.mjs";

const main = () => {
  generateJSON("categories");
  generateJSON("tags");
};

main();
