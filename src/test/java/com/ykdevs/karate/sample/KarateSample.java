package com.ykdevs.karate.sample;

import com.intuit.karate.junit5.Karate;

import java.util.Arrays;

public class KarateSample {
    @Karate.Test
    Karate testFeatures() throws Exception {
        String[] features = Arrays.stream(System.getProperty("test.features").split(","))
                .map(f -> "classpath:features/" + f)
                .toArray(String[]::new);
        return Karate.run(features);
    }
}
