/*
 * ESLint の設定ファイル
 * 参考:
 * - ViteでPreactのTypescript環境を構築する
 * https://miyauchi.dev/ja/posts/vite-preact-typescript/
 *
 * - Preact + TypeScript + MUI + Vite 環境構築備忘録(2022/01時点)
 * https://zenn.dev/plesio/articles/82ea2e9d043921
 *
 * - eslint-config-preact
 * https://github.com/preactjs/eslint-config-preact
 */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended-type-checked", "preact"],
  // ESLintが無視するファイルを指定する
  ignorePatterns: ["assets/**/*", ".eslintrc.cjs", "vite.config.ts"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint"],
  rules: {
    // ここに必要なルールを追加します
    // eslint-config-preactのバグを回避するため、以下を追加
    // https://github.com/preactjs/eslint-config-preact/issues/19
    "jest/no-deprecated-functions": "off",
  },
};
