import readline from "readline";
import fs from "fs/promises";
import path from "path";

const dirname = path.dirname(new URL(import.meta.url).pathname);

const buildPostTemplate = (title, tags, created) => {
  return `---
title: "${title}"
created: "${created}"
tags: ${JSON.stringify(tags)}
---
`;
};

const main = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const question = (str) => new Promise((resolve) => rl.question(str, resolve));

  let filename = await question("ファイル名を入力(md or mdx):");
  if (!/\.mdx?$/.test(filename)) {
    filename += ".md";
  }
  const title = await question("タイトルを入力:");
  const tagsStr = await question("タグを空白区切りで入力:");
  const created = new Date()
    .toLocaleString("ja-JP", {
      timeZone: "Asia/Tokyo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, "-");
  const template = buildPostTemplate(title, tagsStr.split(" "), created);
  const fileFullPath = path.join(
    dirname,
    "../pages/posts",
    created.replace(/-/g, "/").replace(/[^\/]*$/, ""),
    filename
  );
  try {
    await fs.stat(fileFullPath);
    console.log("すでに存在します");
  } catch (e) {
    await fs.mkdir(fileFullPath.replace(/\/[^\/]*\.mdx?$/, ""), {
      recursive: true,
    });
    await fs.writeFile(fileFullPath, template);
  }

  rl.close();
};

main();
