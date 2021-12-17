import { generateJSON } from "./generate-json.mjs";
import { generateOGP } from "./generate-ogp.mjs";

const main = () => {
  generateJSON("categories");
  generateJSON("tags");
  if (process.env === "production") {
    generateOGP();
  }
};

main();
