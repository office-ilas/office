<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  officeサイトについて
</h1>

このサイトは [Gatsby](https://www.gatsbyjs.com/)を利用した[AcademicCentral(以後ACと呼ぶ)](https://academic-central.netlify.app/)のファイルを流用して構築した．

# 始めに

- 記事編集だけでもGitHubアカウント必須。大学関係者なら[GitHub Pro アカウント](https://docs.github.com/ja/education/explore-the-benefits-of-teaching-and-learning-with-github-education/use-github-in-your-classroom-and-research/apply-for-an-educator-or-researcher-discount)の取得がお勧め。
- 記事編集以上の作業には、まず開発環境構築が必要。詳細は「開発関係」の章を参照。

# ディレクトリ構成

ディレクトリ構成の概要は下記の通り。通常の記事編集において/srcと/static以外のフォルダを触ることはない。
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
各ディレクトリ、ファイルの詳細は[こちらを](./Readme-Directory.md)参照(記事編集するだけなら不要）。

# 記事編集の概要

記事編集には、下記の通りGitHubを使う方法とNetlifyCMSを使う方法がある。

## GitHubでの記事編集（概要）

本サイトの大元のデータは、このGitHub（main branch）のデータ。

通常記事編集でいじるのは、/src/pages以下の「MDファイル」、及び/static/img以下の「画像ファイル」。

また最終的にURLを持つページとして公開されるのは/src/pages以下のみで、それ以外のファイルは直接公開されるわけではない。これは大きな特色といえる。

ファイルを編集（正確にはGitHubのmain branchにpush）すると公開用ファイル(※)が生成され、数分後にがNetlifyと学内サーバに転送される。

**注※**：公開ファイルは、本GitHubのファイルをビルドしてできた「html、Javascript、CSS」などのファイル（GitHub上では確認不可）。

*OCWでは万一に備え「データ修正はbranchをきって作業し、データ修正後`gatsby develop`で動作確認の上pull requestし，main branch へマージしている」もよう。しかし事務室では原則上記二フォルダしかいじらない運用なので、ここまで厳密にしない。*

## Netlify CMSでの記事編集（概要）

本サイトは、[Netlify CMS](https://actest-for-office1.netlify.app/admin/#/collections/news)でも編集可能。

この方法だとWordpressのように直感的に作業可能。但し慣れれば前述GitHubで編集する方法の方が早い。また新規記事を作成する際のファイル名指定はGitHubでしかできない。

## 記事の種類

記事にはWordPress同様、ブログのように時系列表示される「投稿ページ」と、単体で完結する「固定ページ」があり、下記の通り格納場所が異なる。

- 投稿ページ：/src/pages/news
  - MDファイルの内容が自動的に「お知らせ」欄に時系列表示される。
- 固定ページ:/src/pages/pages
  - 「お知らせ」欄には表示されず、設定ファイル弄って画面上部「重要事項」欄などに固定表示(※)する。OFFICEサイトでは通年参照する重要情報は固定ページを使うこととした。

注※　固定ページの「重要事項」欄への追加/削除は設定ファイル弄る必要あるため、固定ページの追加/削除は開発者に相談する。

## 記事のURL

公開サイトでは、MDファイルのファイル名がそのままスラッグ（URL末尾の文字列）になる．

たとえば`src/pages/news/2021-09-06-教養教育院からの「お知らせ」方法の変更について.md`の記事は、下記URLとなる。

https://サイトURL/news/2021-09-06-教養教育院からの「お知らせ」方法の変更について/

但しこのような日本語を含むURLは、実際にはエンコードされ見苦しい文字列になるため、ファイル名は極力英数字が望ましい。

特に「固定ページ」は重要記事であり他サイトからリンクされることもあるため、「ファイル名はすべて英数字のみ」としている。

Netlify CMSでは自動的にタイトルなどからファイル名が生成されるため、**ファイル名を指定したい場合はGitHubで編集する**こと。

# GitHubでの記事編集（詳細）
本来GitHubのデータは、まずローカルレポジトリで編集し、`PUSH`して更新する。

しかしこの概念はわかりにくいため、OFFICEサイトの通常の記事編集は、直接GitHubのWEB画面で編集することとする。

通常弄るのは、src/pages内のMD(MarkDown)ファイル。投稿ページはnews以下、固定ページはpages以下に格納されている。

```
src/pages
├── index.md
├── news
│   ├── 2021-09-06-2021年度秋学期履修手続きに関する注意事項.md
│   ├── 2021-09-06-教養教育院からの「お知らせ」方法の変更について.md
│   ├── 2021-09-06Zoomによる問合せ窓口.md
│   ├── 2021-11-22-course-registration-for-g30-international-program-students.md
│   ├── 2021-11-22-【重要】2021年度秋学期　全学教育科目授業時間割表・行事等について.md
│   ├── 2021-11-22-教養教育院アクセスポイント-ilas-remote-learning-spaces.md
│   ├── 2021-11-23-全学教育棟講義室貸出について.md
│   ├── 2021-11-24-in-the-case-of-failing-“course-registration”.md
│   ├── index.js
│   └── 責任者変更届.docx
├── pages
│   ├── CourseRegistration-G30.md
│   ├── LAandSC-Policy.md
│   ├── access-ILAS-LectureRoom.md
│   ├── access-point.md
│   ├── classroom_rental_application.md
│   ├── course-timetable.md
│   ├── implementation.md
│   ├── it-help.md
│   ├── note-course-registration.md
│   └── students-guide.md
└── tags
    └── index.js
```
## 記事の修正

src/pages以下のMDファイルを編集する。該当ファイルの場所は下記の通り、

- 投稿ページ（お知らせ欄に表示する記事)：src/pages/news以下

- 固定ページ（重要事項欄に表示する記事）：src/pages/pages以下

なお「記事の編集例」で詳しく述べるが、**MDファイル上段「title:　~、date: ~」などの部分はGatsby動作に必須**なので削除厳禁。

## 記事の削除

- 投稿ページの削除：src/pages/news以下のMDファイルを削除する。
- 固定ページの削除：開発者に相談する。

## 記事の追加

- 投稿ページの追加：src/pages/news にMDファイルを追加する．既存ファイルをコピーし，ファイル名変更して作るのがお勧め。
- 固定ページの追加：開発者に相談する。

## 記事の編集例

`src/pages/news/2021-09-06-教養教育院からの「お知らせ」方法の変更について.md` を例に説明する．

ファイルの中身は下記の通り．

```
templateKey: blog-post
title: 教養教育院からの「お知らせ」方法の変更について
date: 2021-11-19T04:57:59.969Z
description: 今後、学生向けの案内は、名大ポータルの教養教育院ページをメインに掲載します。
#featuredimage: /img/cat-others.png
tags:
 - その他
---
教養教育院からの学生向け各種案内は、～
---

```
### Frontmatter(先頭部分）の編集
ファイル先頭の`title:　~、date: ~`などの部分を`Frontmatter`と呼ぶ。下記の通りコロン以降のみ変更可。

各項目の詳細は下記の通り。

- `templateKey`：表示に利用するテンプレート。投稿ページの場合「blog-post」、固定ページの場合は「pages」。この項目は原則変更禁止。
- `title` ：タイトル
- `description`:概要
- `featuredimage`:アイキャッチ画像。OFFICEサイトではアイキャッチ未使用のためこの項目は不要（コメントアウト）だが、もしアイキャッチを使用する場合はstatic/img/ 内に画像を置き、/img以降のパスを表記する。例えば`/static/img/ac1.jpg`の画像を指定する場合、`featuredimage: /img/ac1.jpg` 。
- `date`:掲載日
- `tags`:タグ．上記例の通り「- 」に続けて書く。複数ある場合は、複数行に分けて記載する．

### 本文の編集
「---」以降が本文。ここはMarkDown形式で記載する．

### ファイルの配布
WordやPDFなどの配布は、下記いずれかの方法を利用する。

- 【GitHubで】配布ファイルをMGoogleDocsやOffice365など（※）に置いて、`[タイトル](URL)`の記法でリンク。
  - 注※　HLCのWEBサーバにも別途ファイル置き場を設ける予定。
- 【GitHubで】配布ファイルをMDファイルと同フォルダに置いて、`[タイトル](./ファイル名)`の記法でリンク。
- 【NetlifyCMSで】NetlifCMSの「Media」ボタンで配布ファイルをアップロードし、`/img/ファイル名`でリンク。
  - *但しリンクが有効になるのはPUBLISH完了後。完了前にプレビュー画面見てもまだリンク切れなので、分かり難い。*


# NetlifyCMSでの記事編集（詳細）

記事の追加・修正・削除は下記画面で（**後日差し替え予定**）。

<img width="988" alt="スクリーンショット 2021-10-19 14 01 34" src="https://user-images.githubusercontent.com/12372151/137847935-cd017206-0e24-435f-8190-b6654d063e3d.png">

画像は、画面上「Media」ボタンを押せば追加・修正・削除可能。

<img width="1122" alt="スクリーンショット 2021-10-19 14 18 22" src="https://user-images.githubusercontent.com/12372151/137848370-4357adef-0663-4cef-bdd6-922976f30c2a.png">



# 開発関係

ここから先は開発関係者のみ必要な情報。記事編集するだけの方は不要。

## Gatby開発環境構築

Gatsby開発環境の構築方法は省略するが、Windowsでの構築は大変なのでUbuntuを強く推奨。また`npm` より`yarn`を推奨。

## ローカル環境へのインストール

まず、適当な作業ディレクトリにてGitHubからクローン。

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

`yarn` で環境構築。

```
% yarn
```

`npm install` でも可能だが、`yarn`の方が早くトラブルも少ないようなので推奨。
なお、`yarn`と`npm`の混在利用は誤動作の恐れあり厳禁。

## ビルド (build)

ビルドとは、サイト公開用のhtml, JavascriptやCSSファイルを作成すること。
Warningが出ても、ビルドが完了すればとりあえずOKらしい。

ビルドの実行コマンドは下記の通り。

```
% gatsby clean && gatsby build
(npm run clean; npm run build でもOK)
```

最初の `gatsby clean` はキャッシュや不要ファイルを削除するコマンド
`npm run clean, npm run build` は `package.json`で定義されている。

## ディベロプ (develop)

ディベロプとは、公開前チェックのためにhtml, JavascriptやCSSファイルを一時作成すること。

```
% gatsby clean && gatsby develop
(npm run clean; npm run develop でもOK)
```
develop後は、http://localhost:8000/ で確認できる。

## 公開

githubのmain branchにpush すると自動でスクリプト(GitHub Actions)が走り，公開ファイルがNetlifyと学内サーバに転送される。
このGitHub Actionsの設定ファイルは `.github/workflows/netlify-deploy.yml` ．


