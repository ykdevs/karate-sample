Feature: テスト用インクルード

  Scenario: テスト用インクルード
    * print __arg
    * print __loop
    * print value
    * set globalCounter.counter = globalCounter.counter + subList.length
    * set globalCounter.subCounter = subList.length
    * def result = call read('classpath:include/loop/loop2.feature') subList
    * print globalCounter
