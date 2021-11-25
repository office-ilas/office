## 次回予定
- カテゴリメニュー
- 新着ニュース（ページング）
- 不要画像の削除（「未解決」参照）→一つづつ別フォルダに移動して様子を見る
- GraphQL勉強
- 添付ファイル


## 未解決
- static\imgにロゴを置いて、下記のようにしてトップ画面上部の画像変更を試みたが失敗。根本的にstatic\imgに勝手にファイルを置くこと自体NG？
~~~
backgroundImage: `url('/img/AC-banner_4780_768.png')`,
→ backgroundImage: `url('/img/OfficeLogo.png')`,
~~~

- 記事作成時の画像選択を楽にすべく、static\imgの不要画像を（NetlifyCMSの記事作成画面で）消していったところ、次回ビルド時に下記エラー。とりあえず画像は全て戻した
~~~
error "gatsby-remark-relative-images" threw an error while running the onCreateNode lifecycle:
3:23:19 PM: No matching file found for src "/img/ac4.jpg" in static folder "static". Please check static folder name and that file exists at "static/img/ac4.jpg". This error will probably cause a "GraphQLDocumentError" later in build. All converted field paths MUST resolve to a matching file in the "static" folder.
3:23:19 PM: 
3:23:19 PM: 
3:23:19 PM:   Error: No matching file found for src "/img/ac4.jpg" in static folder "static"  . Please check static folder name and that file exists at "static/img/ac4.jpg"  . This error will probably cause a "GraphQLDocumentError" later in build. All   converted field paths MUST resolve to a matching file in the "static" folder.
3:23:19 PM:   
~~~

- 不要ブログを消していったら、次回ビルド時に下記エラー。消した記事のmdファイルを見ると、確かに`featuredpost: true`の記載あり。**GraphQL では、取得しようとしたフィールドが存在しない時に無視することはせず、前述のようなエラーを返すらしい**。とりあえず作成した記事のうち一つに、同記載を追記した。**本当はテンプレートファイルの該当箇所をコメントアウトする方がよいと思うが、見つからず。**
~~~
3:46:50 PM: error There was an error in your GraphQL query:
3:46:50 PM: Cannot query field "featuredpost" on type "Frontmatter".
3:46:50 PM: If you don't expect "featuredpost" to exist on the type "Frontmatter" it is most likely a typo.
However, if you expect "featuredpost" to exist there are a couple of solutions to common problems:
3:46:50 PM: - If you added a new data source and/or changed something inside gatsby-node.js/gatsby-config.js, please try a restart of your development server
3:46:50 PM: - The field might be accessible in another subfield, please try your query in GraphiQL and use the GraphiQL explorer to see which fields you can query and what shape they have
3:46:50 PM: - You want to optionally use your field "featuredpost" and right now it is not used anywhere. Therefore Gatsby can't infer the type and add it to the GraphQL schema. A quick fix is to add at least one entry with that field ("dummy content")
3:46:50 PM: It is recommended to explicitly type your GraphQL schema if you want to use optional fields. This way you don't have to add the mentioned "dummy content". Visit our docs to learn how you can define the schema for "Frontmatter":
~~~

