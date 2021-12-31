import path from "path";
import { chromium } from "playwright-chromium";
import fs from "fs/promises";
import Mustache from "mustache";

const width = 1200;
const height = 630;
const blogTitle = "blog.mt_coff";
const imgSrc = await fs
  .readFile(path.join(process.cwd(), "/public/image/mt_coff.jpeg"), {
    encoding: "base64",
  })
  .then((buf) => buf);
const htmlTemplate = await fs
  .readFile(path.join(process.cwd(), "/src/scripts/template/template.html"))
  .then((buf) => buf.toString());

export const generateOGP = async (posts) => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: {
      height,
      width,
    },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();
  const genScreenshot = async (html, filename) => {
    await page.setContent(html);
    await page.screenshot({
      omitBackground: false,
      path: path.join(process.cwd(), `./public/image/${filename}.png`),
    });
  };

  for (const post of posts) {
    const html = genHTMLFromPost(post);
    await genScreenshot(html, post.filename);
  }

  browser.close();
};

const genHTMLFromPost = (post) => {
  const { title } = post;
  return Mustache.render(htmlTemplate, {
    title,
    blogTitle,
    imgSrc: `data:image/png;base64,${imgSrc}`,
  });
};
