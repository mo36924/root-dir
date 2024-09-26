import { cwd } from "node:process";
import { expect, it } from "vitest";
import { rootDir } from "./index";

it("rootDir", () => {
  expect(rootDir).toBe(cwd());
});
