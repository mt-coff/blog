import { generateJSON } from "./generate-json.mjs";
import { generateOGP } from "./generate-ogp.mjs";
import { getAllPost } from "./getAllPost.mjs";

const main = async () => {
  const posts = await getAllPost();
  generateJSON("category", "categories");
  generateJSON("tags");
  generateOGP(posts);
};

main();
