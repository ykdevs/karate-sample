function fu() {
    let testData;
    if (karate.properties['test.data']) {
        testData = JSON.parse(karate.properties['test.data']);
    }
    return testData;
}