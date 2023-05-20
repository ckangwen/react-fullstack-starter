import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ["index.ts", "client.ts"],
  format: ["esm"],
  dts: true,
  minify: true,
  clean: true,
}));
