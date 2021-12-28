# 各ディレクトリ、ファイルの解説


- .gitignore:　Githubリポジトリから除外するファイルを指定。

- gatsby-config.js:　Gatsbyサイトのメタデータやプラグインなどを記載。

- netlify.toml：  netlifyの自動Deploy制御
  -  本サイトはnetlifyビルド時間制限回避のためnetlifyでなくgithubでビルドしているため、commandをコメントアウト。
  
  - *netlifyのGUIでも設定可能だが、本ファイルの設定で上書きされるらしいので注意。*

- gatsby-node.js:　タグページ追加など、ビルド時にのみ実行されるJavaScriptソース

  - 前半:タグ及び個別頁生成。 [参考：公式サイト「 Creating Tags Pages for Blog Posts」](https://www.gatsbyjs.com/docs/adding-tags-and-categories-to-blog-posts/)
    - ページ生成はTutorialで紹介されているFile System Route APIは使わず、「全詳細ページを取得するGraphQLクエリを発行してページデータ取得し、foreachでページ数分だけactions.createPageを実行してページ作成」の方式。
    - createPageの際、templateKeyの情報を基に、src/templatesのテンプレート情報を適用させている。
   - exports.onCreateNode:スラッグ追加
   -　[参考：公式サイト「Creating Slugs for Pages」](https://www.gatsbyjs.com/docs/creating-slugs-for-pages/)

   - exports.createSchemaCustomization:graphQLの型定義。[参考：公式サイト「Customizing the GraphQL Schema」](https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/)
      - 当初ACサイトから流用したソースではfeaturedpostタグがMDファイルに全く入ってないとエラーになった。該当タグは現在不要のようなので、エラー回避のため該当Queryからこのタグ記載を消したが、実はこのcreateSchemaCustomizationでの定義でも回避できたもよう。

- package.json:　インストールしたパッケージの情報。acサイトの設定をそのまま流用。

- package-lock.json or yarn.lock：　依存パッケージも含め、実際にインストールされたパッケージ情報（バージョン含む）

---

## /node_modules:　インストールしたモジュール
  触ってはならない。`npm install`や`yarn`で再構築可能。

## /src:　開発用フォルダ
　基本的にWebサイトのデザインはこのディレクトリ内のファイルを修正，追加，削除する。

- /src/pages/index.md：トップ画面の記事ファイル。
  - 画面上部の文章以外は、実際にはindex-page.jsテンプレートがインポートしている各コンポーネントが担っている。

### /src/pages/category：　【未使用】カテゴリー（固定ページ）
- 固定ページでカテゴリーごとのトップ画面を作ろうとしていたが、結局未使用。

### /src/pages/contact：　連絡先ページ

### /src/pages/news：　お知らせ(投稿ページ)
- .mdファイル：各お知らせ記事(投稿ページ)の本体。
- index.jsファイル：~/news で表示される画面の概要を定義している。

### /src/pages/news-for-ilas：　https://www.ilas.nagoya-u.ac.jp/ のお知らせ欄用ページ

### /src/pages/pages：　固定ページ
- .mdファイル：各固定ページの本体。

### /src/pages/tags：　タグ（カテゴリー）一覧ページ

### /src/templates：　テンプレート
- blog-post.js：投稿ページのテンプレート
- index-page.js：トップ画面のテンプレート
- pages.js：固定ページのテンプレート
- tags.js:タグ（カテゴリ）一覧ページのテンプレート

### /src/components：　コンポーネント
- BlogRoll.js：　お知らせ一覧
- BlogRollLimit.js：　お知らせ一覧（件数制限あり。トップ画面用）
- Content.js
- Footer.js：　フッター（実際にはLayout.jsが取り込んでいる）
- Layout.js：　レイアウト基本（Layout.jsとseo.jsはほぼ全てのテンプレートで利用されている）
- Navbar.js：　画面上部のナビゲーションバー（実際にはLayout.jsが取り込んでいる）
- PreviewCompatibleImage.js：　お知らせ一覧の画像表示（OFFICEサイトでは未使用）
- SiteMetadata.js
- all.sass　（実際にはLayout.jsが取り込んでいる）
- bulma.min.css
- ghost-blog.css
- seo.js：　SEO対策（Layout.jsとseo.jsはほぼ全てのテンプレートで利用されている）

## /static:　画像などの静的ファイル

### /static/img：画像
- ここに置いたファイルは公開フォルダのルートに置かれるため、mdファイルからは/img/〜で参照する。

### /static/admin：netlifyCMSの管理画面制御

## /public:　公開用フォルダ
- gatsby build を実行すると，このディレクトリに公開用ファイルが生成される。
- gatsby clean を実行すると，このディレクトリとキャッシュがクリアされる。
