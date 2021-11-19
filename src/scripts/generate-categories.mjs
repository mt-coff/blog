import { promises as fs } from "fs";
import fetch from "node-fetch";
import path from "path";
import { cwd } from "process";
import { directorySetup } from "./directorySetup.mjs";

const API_BASE_URL = process.env.MICROCMS_API_URL;
const MICROCMS_API_KEY = process.env.MICROCMS_API_KEY;

export const generateCategories = async () => {
  const targetDir = path.join(cwd(), "./src/data");
  await directorySetup(targetDir);
  const response = await fetch(`${API_BASE_URL}/categories?limit=100`, {
    headers: {
      "X-MICROCMS-API-KEY": MICROCMS_API_KEY,
    },
  });
  const { contents } = await response.json();

  await fs.writeFile(
    path.join(targetDir, "categories.json"),
    JSON.stringify(contents)
  );
};
