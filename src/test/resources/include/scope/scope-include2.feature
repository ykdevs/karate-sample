Feature: 変数のスコープテスト

  Scenario: テスト用インクルード
    * print __arg
    * print __loop
    * def key1 = karate.get('key1', null)
    * def key2 = karate.get('key2', null)
    * def key3 = karate.get('key3', null)
    * def newParamValues = {"key1": '#(key1)', "key2": '#(key2)', "key3": '#(key3)'}
    * print newParamValues
    * def paramValues = {"key1": "value21", "key2": "value22", "key3": "value23"}
    * print paramValues
