import { sep } from "node:path";
import { cwd } from "node:process";
import { fileURLToPath } from "node:url";

const filename = fileURLToPath(import.meta.url);
const nodeModulesDir = `${sep}node_modules${sep}`;

export const rootDir = filename.includes(nodeModulesDir)
  ? filename.slice(0, filename.lastIndexOf(nodeModulesDir))
  : cwd();
