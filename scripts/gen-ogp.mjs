import fs from "fs/promises";
import path from "path";
import fm from "front-matter";
import canvas from "canvas";

const postsDir = "../pages/posts";
const imgDir = "../public/img/posts";
const dirname = path.dirname(new URL(import.meta.url).pathname);
const W = 1200;
const H = 630;
const LineHeight = 48;

const getPosts = async () => {
  const posts = [];

  for (const y of await fs.readdir(path.join(dirname, postsDir))) {
    if (!y.match(/^[0-9]{4}$/)) continue;
    for (const m of await fs.readdir(path.join(dirname, postsDir, y))) {
      if (!m.match(/^0[1-9]|1[0-2]$/)) continue;
      for (const f of await fs.readdir(path.join(dirname, postsDir, y, m))) {
        const postPath = path.join(dirname, postsDir, y, m, f);
        const post = fm(await fs.readFile(postPath, "utf-8"));

        posts.push({
          ...post.attributes,
          path: postPath,
          imgPath: `${postPath
            .replace(
              `${postsDir.replace("../", "")}`,
              `${imgDir.replace("../", "")}`
            )
            .replace(/\.mdx?$/, ".png")}`,
        });
      }
    }
  }
  return posts;
};

const renderMultiLineText = (ctx, text, maxWidth, startHeight) => {
  let tmp = "";
  let row = 0;
  let m;
  const txtArr = Array.from(text);

  for (const char of txtArr) {
    m = ctx.measureText(tmp);
    if (m.width <= maxWidth) {
      tmp += char;
    } else {
      ctx.fillText(tmp, (W - m.width) / 2, startHeight + row * LineHeight);
      row++;
      tmp = "";
    }
  }
  ctx.fillText(tmp, (W - m.width) / 2, startHeight + row * LineHeight);
};

const generateImg = async (text, targetPath) => {
  const c = canvas.createCanvas(W, H);
  const ctx = c.getContext("2d");
  const img = new canvas.Image();

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, W, H);
  img.onload = () => {
    ctx.drawImage(
      img,
      W - img.naturalWidth / 5 - 30,
      H - img.naturalHeight / 5 - 30,
      img.naturalWidth / 5,
      img.naturalHeight / 5
    );
  };
  img.src = path.join(dirname, "../public/img/mt_coffee.png");

  ctx.font = `normal ${LineHeight}px Impact`;
  ctx.fillStyle = "black";
  // ctx.fillText(text, img.naturalWidth / 4 + 100, H / 2);
  renderMultiLineText(ctx, text, (W / 5) * 3, H / 2);
  const m = ctx.measureText("mt_coff's blog");
  ctx.fillText("mt_coff's blog", (W - m.width) / 2, H - 50);

  const buf = c.toBuffer();

  await fs.writeFile(targetPath, buf);
};

async function main() {
  const posts = await getPosts();
  for (const post of posts) {
    if (!post.title) {
      console.error(
        "[error] タイトルが設定されていない記事があります。\n",
        `対象: ${post.path}`
      );
      process.exit(1);
    }
    try {
      await fs.stat(post.imgPath);
    } catch (error) {
      if (error.code === "ENOENT") {
        await fs.mkdir(post.imgPath.replace(/\/[^\/]*\.png$/, ""), {
          recursive: true,
        });
        await generateImg(post.title, post.imgPath);
      }
    }
  }
}

main();
