# karate-sample

E2Eテスト フレームワークのKarateのSample

## 環境変数

| 環境変数名          | 説明          |
|----------------|-------------|
| KARATE_OPTIONS | karateオプション |
| KARATE_ENV     | 環境名         |
| TEST_FEATURES  | 実行するテスト郡名   |
| TEST_DATA      | テストデータ      |

## 実行するテスト郡の指定

### loop

```shell
export TEST_FEATURES=loop-features
```

## 実行するテスト変数の指定

```json
{
  "baseUrl": "http://localhost:8080"
}
```

```shell
export TEST_DATA=$(cat test-data.json|base64)
```

## 実行

```shell
./gradlew clean test
```

## レポート確認

```shell
open build/karate-reports/karate-summary.html
```