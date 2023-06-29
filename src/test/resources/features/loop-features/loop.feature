Feature: テスト

  Background:
    * def dataList =
    """
      [
        {
          "key": "value1",
          "subList": [
            {
              "subKey": "subValue1"
            }
          ]
        },
        {
          "key": "value2",
          "subList": [
            {
              "subKey": "subValue21"
            },
            {
              "subKey": "subValue22"
            },
            {
              "subKey": "subValue23"
            }
          ]
        },
        {
          "key": "value3",
          "subList": []
        }
      ]
    """

  Scenario: テスト
    * def value = "test"
    * print value
    * def globalCounter = {"counter": 0, "subCounter": 0}
    * print globalCounter
    * print dataList
    * call read('classpath:include/loop/loop.feature') dataList