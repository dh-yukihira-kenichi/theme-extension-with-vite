/*
 * ESLint の設定ファイル
 * 参考:
 * - prettier-plugin-organize-imports で import 文を自動フォーマットする
 * https://zenn.dev/wakamsha/articles/prettier-plugin-organize-imports
 *
 * - ESLint を使い倒す（おすすめルール紹介）
 * https://zenn.dev/noshiro_piko/articles/take-full-advantage-of-typescript-eslint
 *
 * - チームで同じような React コンポーネントを書く
 * https://zenn.dev/kazukix/articles/create-similar-react-components
 *
 * - ESLint の設定から逃げない
 * https://zenn.dev/kazukix/articles/eslint-config-react-native
 *
 * - ESLint のススメ
 * https://zenn.dev/yhay81/articles/def73cf8a02864
 *
 * - ESLint + Prettier + React + TypeScript + Vite で開発環境を整える
 * https://qiita.com/Stellarium/items/095ca74299a50016c321
 *
 * - ViteでTypeScript×Reactの開発環境を構築してみた【後編】
 * https://note.com/shift_tech/n/n728b559e5097
 *
 * - 【React】Viteを使って爆速で環境構築を行う: ESLint Prettier
 * https://tech-lab.sios.jp/archives/37726
 *
 * - ESLintでTypeScriptの変数の名付け規則をチェックしよう！
 * https://dev.classmethod.jp/articles/shuntaka9576-check-eslint/
 *
 * - The Best ESLint Rules for React Projects
 * https://timjames.dev/blog/the-best-eslint-rules-for-react-projects-30i8
 *
 * - React.js Vitest Unit Testing (Husky, lint-staged, ESLint, Prettier)
 * https://dev.to/rajaerobinson/reactjs-vitest-unit-testing-husky-lint-staged-eslint-prettier-2e50
 *
 * - Efficient React Project Setup with Vite, ESLint, Prettier, and Husky
 * https://medium.com/@noe.abarai20/efficient-react-project-setup-with-vite-eslint-prettier-and-husky-22b683a01b53
 *
 */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  // ESLintが無視するファイルを指定する
  ignorePatterns: ["assets/**/*", ".eslintrc.cjs", "vite.config.ts"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "react-refresh",
    "react-hooks",
    "import",
    "unused-imports",
    "prefer-arrow-functions",
    "tailwindcss",
  ],
  settings: {
    // eslint-plugin-reactにReactのバージョンを自動検出させる
    react: {
      version: "detect",
    },
  },
  rules: {
    // イテラブルな要素にkey属性を付与する
    "react/jsx-key": [
      "error",
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ],

    // コンポーネントの深さを制限する
    "react/jsx-max-depth": ["error", { max: 5 }],

    // JSXの属性に対して、Spread演算子を禁止する
    "react/jsx-props-no-spreading": "off",

    // イテラブルな要素のkeyにindexを使うのを禁止する
    "react/no-array-index-key": "error",

    // Propsの型定義をread-onlyにする
    "react/prefer-read-only-props": "error",

    // ネストしたコンポーネントの作成を禁止する
    "react/prefer-stateless-function": "error",

    // Reactの危険なプロパティを使うのを禁止する
    "react/no-danger": "error",

    // React hooks を使う際のルール違反をエラーにする
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",

    // Propsなどの分割代入を強制する
    "react/destructuring-assignment": "error",

    // useStateの返り値の命名を [value, setValue] にする
    "react/hook-use-state": "error",

    // boolean型のPropsの渡し方を統一する
    "react/jsx-boolean-value": "error",

    // React Fragmentの書き方を統一する
    "react/jsx-fragments": "error",

    // 不要なReact.Fragmentを削除する
    "react/jsx-no-useless-fragment": "error",

    // Propsとchildrenで不要な中括弧を削除する
    "react/jsx-curly-brace-presence": "error",

    // ChildrenをPropsとして渡さない
    "react/no-children-prop": "error",

    // Propsの並び順をアルファベット順にする
    "react/jsx-sort-props": "warn",

    // 子要素がない場合は自己終了タグを使う
    "react/self-closing-comp": "error",

    // 不本意なリーク値がレンダリングされないようにする
    "react/jsx-no-leaked-render": ["error", { validStrategies: ["ternary"] }],

    // 関数コンポーネントの定義方法を統一する(アロー関数を使う)
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],

    // JSXに直接コールバック関数を書くのを禁止する(useCallbackを使うと解決できる)
    // 最適化するならば有効化するべきルールだが、最適化より簡潔さと可読性を優先するため無効化している
    // "react/jsx-no-bind": "error",

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

    // Viteで作成したReactアプリの初期設定
    "react-refresh/only-export-components": ["error", { allowConstantExport: true }],

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
