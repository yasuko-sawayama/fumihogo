# fumihogo

[![CircleCI](https://circleci.com/gh/yasuko-sawayama/fumihogo.svg?style=svg)](https://circleci.com/gh/yasuko-sawayama/fumihogo)

## やりたいこと

小説の下書きを一時的に保存しておくところが欲しい

小説をオンラインで書きたい（暇な時間にスマホで編集したい）

下書きをプレビューしてもらってコメント・校正してもらいたい


## いまのところできること
 - Twitter連携
 - MarkDownエディタ

※コメント機能一旦はずし中

## やりたい機能？？

 - スマホ・PC両方で見やすいようにしたい…
 - コメント
 - お気に入り（非公開）
 - バージョン管理
 - API公開（テキストエディタと連携したい）

## とりあえずやらないこと

- SNS的なこと
- イラスト・画像対応

## 起動方法

```
foraman start
```

### 構成
react_on_railsでそれぞれ

 - 新規投稿画面
 - 編集/閲覧画面

をreactで構築

## メモ
- Staticなページ管理にHighVoltage導入、/app/views/statics以下を指定
