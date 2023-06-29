package com.ykdevs.karate.sample.util;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class PropertiesUtils {

    private Properties properties;

    public PropertiesUtils() throws IOException {
        this.properties = new Properties();
        FileInputStream in = null;
        try {
            String fileName= "src/test/resources/application.properties";
            in = new FileInputStream(fileName);
            this.properties.load(in);
        } finally {
            if (in != null) {
                in.close();
            }
        }
    }

    public String getProperty(String name) {
        return this.properties.getProperty(name);
    }
}
