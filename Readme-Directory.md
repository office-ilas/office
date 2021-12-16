# 各ディレクトリ、ファイルの解説

## /node_modules:　npmでインストールするモジュールの格納場所
  触ってはならない。`npm install`や`yarn`で再構築可能。

## /src:　開発用フォルダ
　基本的にWebサイトのデザインはこのディレクトリ内のファイルを修正，追加，削除する。

### /src/pages/index.md：トップ画面の記事ファイル。
- 画面上部の文章以外は、実際にはindex-page.jsテンプレートがインポートしている各コンポーネントが担っている。

### /src/pages/news：　お知らせ記事フォルダ
- .mdファイル：各お知らせ記事の本体。
- index.jsファイル：~/news で表示される画面の概要を定義している。

### /src/pages/category：　カテゴリーフォルダ（固定ページ）
- 「固定ページ」にてカテゴリーごとのトップ画面を作ろうとしていたが、結局未使用（固定ページは面倒なのであまり使いたくない）。

### /src/pages/tags：　タグ画面

### /src/pages/contact：　連絡先画面

## /static:　画像や作成済静的ファイルのフォルダ
ユーザが直接触ることは少ない。（画像は？）
 
　/static/adminは、netlifyCMSの管理画面を制御するため、開発者は触る必要あり。

## /public:　公開用フォルダ
　gatsby build を実行すると，このディレクトリに公開用ファイルが生成される。
　またgatsby clean を実行すると，このディレクトリとキャッシュがクリアされる．

## .gitignore:　Githubリポジトリから除外するファイルを指定。

## gatsby-config.js:　Gatsbyサイトのメタデータやプラグインなどを記載。

## netlify.toml：  netlifyの自動Deploy制御
  本サイトはnetlifyビルド時間制限回避のためnetlifyでなくgithubでビルドしているため、commandをコメントアウト。
  
  *netlifyのGUIでも設定可能だが、本ファイルの設定で上書きされるらしいので注意。*

## gatsby-node.js:　タグページ追加など、ビルド時にのみ実行されるJavaScriptソース

### 前半:タグ及び個別頁生成
　[参考：公式サイト「 Creating Tags Pages for Blog Posts」](https://www.gatsbyjs.com/docs/adding-tags-and-categories-to-blog-posts/)

　ページ生成はTutorialで紹介されているFile System Route APIは使わず、「全詳細ページを取得するGraphQLクエリを発行してページデータ取得し、foreachでページ数分だけactions.createPageを実行してページ作成」の方式。
 
 またcreatePageの際、templateKeyの情報を基に、src/templatesのテンプレート情報を適用させている。

### exports.onCreateNode:スラッグ追加
　[参考：公式サイト「Creating Slugs for Pages」](https://www.gatsbyjs.com/docs/creating-slugs-for-pages/)

### exports.createSchemaCustomization:graphQLの型定義
　[参考：公式サイト「Customizing the GraphQL Schema」](https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/)

　当初ACサイトから流用したソースではfeaturedpostタグがMDファイルに全く入ってないとエラーになった。該当タグは現在不要のようなので、エラー回避のため該当Queryからこのタグ記載を消したが、実はこのcreateSchemaCustomizationでの定義でも回避できたもよう。

## package.json:　インストールしたパッケージの情報
  現状、acサイトの設定をそのまま流用している。

## package-lock.json or yarn.lock：　依存パッケージも含め、実際にインストールされたパッケージ情報（バージョン含む）
