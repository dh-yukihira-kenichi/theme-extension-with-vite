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
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "preact",
    "plugin:import/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  // ESLintが無視するファイルを指定する
  ignorePatterns: ["assets/**/*", ".eslintrc.cjs", "vite.config.ts"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "unused-imports",
    "prefer-arrow-functions",
    "tailwindcss",
  ],
  rules: {
    // ここに必要なルールを追加します
    // eslint-config-preactのバグを回避するため、以下を追加
    // https://github.com/preactjs/eslint-config-preact/issues/19
    "jest/no-deprecated-functions": "off",

    // 数値への型強制(+foo) や文字列への型強制(''+foo) などを禁止する
    "no-implicit-coercion": "error",

    // 文字列同士の +演算子による連結も禁止する
    "prefer-template": "error",

    // アロー関数スタイルに統一する
    "arrow-body-style": ["error", "as-needed"],
    "prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
    "prefer-arrow-functions/prefer-arrow-functions": [
      "error",
      {
        classPropertiesAllowed: false,
        disallowPrototype: false,
        returnStyle: "unchanged",
        singleReturnOnly: false,
      },
    ],

    // 未使用のimportを検出する
    "unused-imports/no-unused-imports": "warn",

    // 循環 importを検出する
    "import/no-cycle": "error",

    // '@'によるエイリアスを用いたimportを許可する
    "import/no-unresolved": "off",

    // import文の後に1行改行する
    // husky => prettier で2行以上の改行を1行に自動で修正する
    //       => eslint --fix で0行の改行を1行に自動で修正する
    "import/newline-after-import": ["warn", { exactCount: true }],

    // import文のパスを簡潔にする
    "import/no-useless-path-segments": ["error", { noUselessIndex: true }],

    // 名前付きexportを強制する
    "import/no-default-export": "error",

    // Type only import/export スタイルを指定する
    "import/consistent-type-specifier-style": ["error", "prefer-inline"],
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
        disallowTypeAnnotations: true,
      },
    ],

    // 暗黙の型強制を禁止し、安全性を高める
    "@typescript-eslint/strict-boolean-expressions": [
      "error",
      { allowString: false, allowNumber: false, allowNullableObject: false },
    ],

    // 異なる型同士の +演算子を禁止する
    "@typescript-eslint/restrict-plus-operands": "error",

    // union型の全ケースを Switch文で網羅できているかどうかをチェックする
    "@typescript-eslint/switch-exhaustiveness-check": "error",

    // Array.prototype.sort()メソッドをより安全にする
    "@typescript-eslint/require-array-sort-compare": "error",

    // テンプレートリテラル内で使用できる型を制限する
    "@typescript-eslint/restrict-template-expressions": "error",

    // 命名規則を統一する
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "variable",
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "import",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "class",
        format: ["PascalCase"],
      },
      {
        selector: "interface",
        format: ["PascalCase"],
      },
      {
        selector: "typeAlias",
        format: ["PascalCase"],
      },
      {
        selector: "typeParameter",
        format: ["PascalCase"],
      },
      {
        selector: "enum",
        format: ["PascalCase"],
      },
      {
        selector: "enumMember",
        format: ["UPPER_CASE"],
      },
    ],
  },
};
