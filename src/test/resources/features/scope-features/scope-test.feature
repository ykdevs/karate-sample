Feature: 変数のスコープテスト

  Background:
    * def paramValues = {"key1": "value1", "key2": "value2", "key3": "value3"}
    * copy orgParamValues = paramValues

  Scenario: BackGroundの変数を参照できること
    * print paramValues
    * match paramValues == orgParamValues

  Scenario: BackGroundの変数を上書きできること
    * def paramValues = {"key1": "value11", "key2": "value12", "key3": "value13"}
    * print paramValues
    * match paramValues != orgParamValues

  Scenario Outline: <num> Senario OutlineでBackGroundの変数を上書きできること
    * print paramValues
    * match paramValues == orgParamValues
    * def paramValues = {"key1": '#(key1)', "key2": '#(key2)', "key3": '#(key3)'}
    * print paramValues
    * match paramValues != orgParamValues
    Examples:
      | num | key1 | key2 | key3 |
      | 1   | v11  | v12  | v13  |
      | 2   | v21  | v22  | v23  |
      | 3   | v31  | v32  | v33  |

  Scenario: includeで変数の上書きをする
    * print outValues = {"result": null}
    * copy orgOutValues = outValues
    * print paramValues
    * call read('classpath:include/scope/scope-include.feature') {"params": '#(paramValues)', "out": '#(outValues)'}
    # call readだと上書きされてしまう
    * print paramValues
    * match paramValues != orgParamValues
    # include先で定義した変数も参照できる
    * match newParamValues == orgParamValues
    # 引数で渡したoutは上書きされない
    * print outValues
    * match outValues == orgOutValues


  Scenario: includeで変数で上書きをしない（これがScope安全で戻り値も取れるのでよい）
    * print outValues = {"result": null}
    * copy orgOutValues = outValues
    * print paramValues
    * def result = call read('classpath:include/scope/scope-include.feature') {"params": '#(paramValues)', "out": '#(outValues)'}
    * print result
    # def call readだと上書きされない
    * print paramValues
    * match paramValues == orgParamValues
    # resultで返却された変数は変わっている
    * match result.paramValues != orgParamValues
    # karate.call先で定義した変数は参照できない
    * match karate.get('newParamValues') == undefined
    # 引数で渡したoutは上書きされない
    * print outValues
    * match outValues == orgOutValues
    * print result.outValues


  Scenario: includeで変数の上書きをしない
    * print outValues = {"result": null}
    * copy orgOutValues = outValues
    * print paramValues
    * karate.call('classpath:include/scope/scope-include.feature', {"params": paramValues, "out": outValues})
    # karate.callだと上書きされない
    * print paramValues
    * match paramValues == orgParamValues
    # karate.call先で定義した変数は参照できない
    * match karate.get('newParamValues') == undefined
    # 引数で渡したoutは上書きされない
    * print outValues
    * match outValues == orgOutValues

  Scenario: includeで変数の上書きをする
    * print paramValues
    * call read('classpath:include/scope/scope-include2.feature') paramValues
    # readだと上書きされてしまう
    * print paramValues
    * match paramValues != orgParamValues
    # include先で定義した変数も参照できる
    * match newParamValues == orgParamValues

  Scenario: ループで呼ぶ
    * def paramValuesList = [{"key1": "value31", "key2": "value32", "key3": "value33"}, '#(paramValues)']
    * call read('classpath:include/scope/scope-include2.feature') paramValuesList
    # readだと上書きされてしまう
    * print paramValues
    * match paramValues != orgParamValues
    # include先で定義した変数も参照できる
    * match newParamValues == orgParamValues

  Scenario: ループで呼ぶ
    * def paramValuesList = [{"key1": "value31", "key2": "value32", "key3": "value33"}, '#(paramValues)']
    * def result = call read('classpath:include/scope/scope-include2.feature') paramValuesList
    # readだと上書きされない
    * print paramValues
    * match paramValues == orgParamValues
    # include先で定義した変数も参照できない
    * match karate.get('newParamValues') == undefined
