YouTube の動画をローカルにダウンロードすることができる Web アプリです。

## 環境

|                    |                     |
| ------------------ | ------------------- |
| 言語               | TypeScript          |
| Web フレームワーク | React.js<br>Next.js |
| バックエンド       | microCMS            |
| CSS フレームワーク | Chakra UI           |

## セットアップ

```
$ cp .env.development.local{.sample,}
$ yarn install
$ yarn dev
```

## ビルド

```
$ yarn build
```

## 使い方

### 1. ブラウザから

localhost:3000/にアクセスして URL を入力して実行すると「ダウンロード」というボタンが現れるのでインストールしてください

### 2. API を呼び出す

```
$ curl localhost:3000/api/{videoId}
```
