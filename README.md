# React ＋ Firebase で作成した画像のアップローダー

<br>
## クローン後
環境変数として```.env```ファイルを使います。<br>
```package.json```と同じ階層に```.env```を作成し、以下の変数を保存してください。

```
# firebaseの設定画面から該当するキーやIDをコピーして代入。コピーする項目は『REACT_APP_』を差し引いた項目です
REACT_APP_API_KEY=""
REACT_APP_AUTH_DOMAIN=""
REACT_APP_PROJECT_ID=""
REACT_APP_STORAGE_BUCKET=""
REACT_APP_MESSAGING_SENDER_ID=""
REACT_APP_APP_ID=""
```

<br>
コマンド

```
# クローン後localにnode_modulesをインストール
npm i

# firebaseのインストール
npm install firebase

# localサーバ立ち上げ
npm start
```

<br>
## その他
<br>
firebaseの設定画面サンプル
<br>
<img width="455" alt="firebase" src="https://github.com/takushisato/React-uploader/assets/58543074/3a4a839c-129b-4c0d-924b-89dd68e04330">
