import { generateJSON } from "./generate-json.mjs";
import { generateOGP } from "./generate-ogp.mjs";

const main = () => {
  generateJSON("category", "categories");
  generateJSON("tags");
  generateOGP();
};

main();
