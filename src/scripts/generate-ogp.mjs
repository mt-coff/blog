import { getAllPost } from "./getAllPost.mjs";
import path from "path";
import fs from "fs/promises";
import canvas from "canvas";

const W = 1200;
const H = 630;
const LineHeight = 48;

export const generateOGP = async () => {
  const posts = await getAllPost();
  let noTitleCnt = 0;
  for (const post of posts) {
    if (!post.title) {
      noTitleCnt++;
      continue;
    }
    const img = await generateImg(post.title);
    const targetPath = path.join(
      process.cwd(),
      `./public/image/${post.filename}.png`
    );
    fs.writeFile(targetPath, img);
  }

  if (noTitleCnt) {
    console.log(`${noTitleCnt} article titles are not set`);
  }
};

const generateImg = async (text) => {
  const c = canvas.createCanvas(W, H);
  const ctx = c.getContext("2d");
  const img = new canvas.Image();

  ctx.fillStyle = "#c0ffee";
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = "white";
  ctx.fillRect(20, 20, W - 40, H - 40);
  img.onload = () => {
    ctx.drawImage(
      img,
      W - img.naturalWidth / 5 - 30,
      H - img.naturalHeight / 5 - 30,
      img.naturalWidth / 5,
      img.naturalHeight / 5
    );
  };
  img.src = path.join(process.cwd(), "./public/image/mt_coff.jpeg");

  ctx.font = `normal ${LineHeight}px Impact`;
  ctx.fillStyle = "black";
  // ctx.fillText(text, img.naturalWidth / 4 + 100, H / 2);
  renderMultiLineText(ctx, text, (W / 5) * 3, H / 2);
  const m = ctx.measureText("blog.mt_coff");
  ctx.fillText("blog.mt_coff", (W - m.width) / 2, H - 50);

  return c.toBuffer();
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
