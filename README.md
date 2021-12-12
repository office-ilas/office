<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  office
</h1>

このサイトは [Gatsby](https://www.gatsbyjs.com/)を利用した[AcademicCentral(以後ACと呼ぶ)](https://academic-central.netlify.app/)のファイルを流用して構築しています．

# 始める前に

- 記事編集するだけでもGithubアカウント必須。大学関係者なら[Github Pro アカウント](https://docs.github.com/ja/education/explore-the-benefits-of-teaching-and-learning-with-github-education/use-github-in-your-classroom-and-research/apply-for-an-educator-or-researcher-discount)の取得がお勧め。
- 記事編集以上のことをするには、PCに開発環境構築が必要。詳細は「開発関係」の章を参照。
- 作者はGithubもGatsbyも初めてのため、色々不備などあると思います、ご容赦願います。

# Github での記事の追加・修正・削除

本サイトの大元のデータはGithubのmain branchで、ここにpushするとスクリプト（Github Actions）によって自動的に「公開ファイル」がNetlifyと学内サーバに転送される。

「公開ファイル」は本Github上に存在するファイルではなく、これらファイルを「ビルド」してできた「html, Javascript、CSS」などのファイル。

通常の記事編集でいじるのは、/src/pages/news以下のMDファイルと、/static/img以下の画像ファイル。

OCWでは万一に備え「データ修正はbranchをきって作業し、データ修正後`gatsby develop`で動作確認の上pull requestし，main branch へマージしている」もよう。しかし事務室では原則上記二フォルダしかいじらない運用になるので、ここまで厳密にしなくてもよいと思われる。

# Netlify CMS での記事の追加・修正・削除

本サイトは、[Netlify CMS](https://actest-for-office1.netlify.app/admin/#/collections/news)でも編集可能。

この方法だと、Wordpressのように直感的に作業可能。但し慣れてしまえば、前述のGithubで直接ファイルを編集する方が圧倒的に早い。

記事の追加・修正・削除は下記画面で（**後日差し替え予定**）。

<img width="988" alt="スクリーンショット 2021-10-19 14 01 34" src="https://user-images.githubusercontent.com/12372151/137847935-cd017206-0e24-435f-8190-b6654d063e3d.png">

画像は、画面上「Media」ボタンを押せば追加・修正・削除可能。

<img width="1122" alt="スクリーンショット 2021-10-19 14 18 22" src="https://user-images.githubusercontent.com/12372151/137848370-4357adef-0663-4cef-bdd6-922976f30c2a.png">




# ディレクトリ構成

ディレクトリ構成は下記の通り。但し事務担当者の記事編集においては/srcと/static以外のフォルダを触ることはない。構築に関わらない限りこの章は読み飛ばして構わない。
```
$tree -L 1
.
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── _headers
├── gatsby-config.js
├── gatsby-node.js
├── lambda
├── memo.md
├── netlify.toml
├── node_modules
├── package.json
├── public
├── renovate.json
├── src
├── static
└── yarn.lock

```
## 各ディレクトリ、ファイルの解説

### /node_modules:　npmでインストールするモジュールの格納場所
  触ってはならない。`npm install`や`yarn`で再構築可能。

### /src:　公開用ファイル
　基本Webサイトのデザイン時はこのディレクトリ内のファイルを修正，追加，削除する。

### /static:　画像ファイルや作成済静的ファイル
　ユーザが直接触ることは少ない。（画像は？）
 
　/static/adminは、netlifyCMSの管理画面を制御するため、開発者は触る必要あり。

### /public:　公開用ディレクトリ
　gatsby build を実行すると，このディレクトリに公開用ファイルが生成される。
　またgatsby clean を実行すると，このディレクトリとキャッシュがクリアされる．

### .gitignore:　Githubリポジトリから除外するファイルを指定。

### gatsby-config.js:　Gatsbyサイトのメタデータやプラグインなどを記載。

### netlify.toml：  netlifyの自動Deploy制御
  本サイトはnetlifyビルド時間制限回避のためnetlifyでなくgithubでビルドしているため、commandをコメントアウト。
  
  *netlifyのGUIでも設定可能だが、本ファイルの設定で上書きされるらしいので注意。*

### gatsby-node.js:　タグページ追加など、ビルド時にのみ実行されるJavaScriptソース

#### 前半:タグ及び個別頁生成
　[参考：公式サイト「 Creating Tags Pages for Blog Posts」](https://www.gatsbyjs.com/docs/adding-tags-and-categories-to-blog-posts/)

　ページ生成はTutorialで紹介されているFile System Route APIは使わず、「全詳細ページを取得するGraphQLクエリを発行してページデータ取得し、foreachでページ数分だけactions.createPageを実行してページ作成」の方式。
 
 またcreatePageの際、templateKeyの情報を基に、src/templatesのテンプレート情報を適用させている。

#### exports.onCreateNode:スラッグ追加
　[参考：公式サイト「Creating Slugs for Pages」](https://www.gatsbyjs.com/docs/creating-slugs-for-pages/)

#### exports.createSchemaCustomization:graphQLの型定義
　[参考：公式サイト「Customizing the GraphQL Schema」](https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/)

　当初ACサイトから流用したソースではfeaturedpostタグがMDファイルに全く入ってないとエラーになった。該当タグは現在不要のようなので、エラー回避のため該当Queryからこのタグ記載を消したが、実はこのcreateSchemaCustomizationでの定義でも回避できたもよう。

### package.json:　インストールしたパッケージの情報
  現状、acサイトの設定をそのまま流用している。

### package-lock.json or yarn.lock：　npm/yarnが自動生成
  依存パッケージも含め、実際にインストールされたパッケージ情報が記載されている。

# 記事の編集（追加，修正，削除）

記事データは，src/pages内のMD(MarkDown)ファイル．構築に関わらない方はMDファイル以外触らないこと。

```
├── src
│   ├── img
│   ├── pages
│   │   ├── 404.js
│   │   ├── awards
│   │   │   └── index.md
│   │   ├── contact
│   │   │   └── index.js
│   │   ├── division
│   │   │   ├── Data-Science.md
│   │   │   ├── Doctoral-Education.md
│   │   │   ├── High-School-University-Articulation.md
│   │   │   ├── Instructional-Design-Team.md
│   │   │   ├── Liberal-Arts.md
│   │   │   ├── Life-Concept.md
│   │   │   ├── Promotion-Planning-Office.md
│   │   │   ├── QTA.md
│   │   │   └── index.js
│   │   ├── index.md
│   │   ├── news
│   │   │   ├── 2021-06-07-トップリーダートーク.md
│   │   │   ├── 2021-06-07-名古屋大学全学教育物理学実験.md
│   │   │   ├── 2021-06-24-化学実験ホームページ.md
│   │   │   ├── 2021-07-13-アカデミック・イングリッシュ支援室（access）.md
│   │   │   └── index.js
│   │   └── tags
│   │       └── index.js
```

## 記事の修正

src/pages のマークダウンファイルを編集する．
同ディレクトリにあるファイルをコピーし，ファイル名を変更して作成するのが楽。
なお、マークダウンファイルに記載のフォーマットは変更しないこと。
特に上段のFrontmatterの項目はGatsbyに必須なため、コロン以降のみ変更すること。


## 記事の削除

src/pages のマークダウンファイルを削除する．

## 記事の追加

src/pages に新しいマークダウンファイルを追加する．

## 記事の編集例

以下，src/news の 2021-06-07-トップリーダートーク.md を例に説明する．

ファイル名がそのまま slug になる．たとえばこの例の場合、

https://ac.thers.ac.jp/news/2021-06-07-トップリーダートーク/

となる．

src/news/2021-06-07-トップリーダートーク.md は下記の通り．

```
templateKey: blog-post
title: トップリーダートーク
date: 2021-05-06T10:05:39.789Z
description: >-
  トップリーダートークでは、各界の指導的立場にある産学官のトップリーダーを招き、レクチャーやディスカッションを通じてトップの役割や使命、リーダーシップのあり方などを直接学ぶ機会を提供しています。

  今回は東海国立大学機構長・名古屋大学総長である松尾清一氏をお招きし、「私の歩んできた道ー安定は動の中に在り」というテーマで講演をしていただきます。
featuredpost: true
featuredimage: /img/coffee.png
tags:
  - トップリーダートーク
  - 博士課程教育推進機構
  - 松尾清一氏（東海国立大学機構長・名古屋大学総長）
---

# 松尾清一氏（東海国立大学機構長・名古屋大学総長）

参加にあたって 2 種類の参加方法があります。
.....

```

ここで，`templateKey: blog-post` は変更してはならない．
この templateKey は src/pages 以下のディレクトリでそれぞれ指定され，指定されたテンプレートを利用して表示用ファイルが生成されます．
News の場合は templateKey を blog-post と指定しています．なお，awards の場合は awards-page と指定します．

`title` はタイトルですので，適宜修正可能．

`description` は概要ですので，適宜修正可能．

`featuredimage` はアイキャッチ画像．ディフォルトで選択できるのは static/img/ にある画像．
アップロードして利用したい場合には static/img/ におき，/img/ファイル名 で指定する．
たとえば，static/img/ac1.jpg を指定する場合は `featuredimage: /img/ac1.jpg` とする．

`date` は掲載日ですので，適宜修正可能．

`tags` はタグになります．タグは上に記載のように「-」で一行にひとつ書くこと．

ここまでが，Frontmatter．
「---」以降は本文。マークダウン形式で記載する．

この例ですと

```
# 松尾清一氏（東海国立大学機構長・名古屋大学総長）

参加にあたって 2 種類の参加方法があります。
．．．
```

が本文になり，マークダウン形式で記載されています．

# 開発関係

ここから先は開発関係者のみ必要な情報。記事編集するだけの方は不要。

## Gatby開発環境構築

ここではGatsby開発環境の構築方法は省略するが、Windowsでの構築は大変なのでUbuntuを強く推奨。また`npm` より`yarn`を推奨。

## ローカル環境へのインストール

まず、適当な作業ディレクトリにてGithubからクローン。

```
% git clone レポジトリ情報
```

クローンしたディレクトに移動して作業開始。

```
% cd officetest
% ls
CODE_OF_CONDUCT.md LICENSE            _headers           gatsby-node.js     netlify.toml       renovate.json      static
CONTRIBUTING.md    README.md          gatsby-config.js   lambda             package.json       src                yarn.lock
```

## 環境構築

`yarn` で環境構築する。

```
% yarn
```

`npm install` でも可能ではあるが、`yarn`の方が早くトラブルも少ない感じ。
なお、`yarn`と`npm`の混在利用は誤動作の恐れがあり厳禁。

## ビルド (build)

ビルドとは、サイト公開用のhtml, JavascriptやCSSファイルを作成すること。
Warningが出ても、ビルドが完了すればとりあえず問題ないらしい。

ビルドの実行コマンドは下記の通り。

```
% gatsby clean && gatsby build
(npm run clean; npm run build でもOK)
```

最初の `gatsby clean` はキャッシュや不要ファイルを削除するコマンド
`npm run clean, npm run build` は `package.json`で定義されている。

## ディベロプ (develop)

ディベロプとは、公開前のチェックのためにhtml, JavascriptやCSSファイルを一時作成すること。

```
% gatsby clean && gatsby develop
(npm run clean; npm run develop でもOK)
```
develop後は、http://localhost:8000/ で確認できる。

## 公開

githubのmain branchにpush すると自動でスクリプト(Github Actions)が走り，公開ファイルがNetlifyと学内サーバに転送される。
このGithub Actionsの設定ファイルは `.github/workflows/netlify-deploy.yml` ．


