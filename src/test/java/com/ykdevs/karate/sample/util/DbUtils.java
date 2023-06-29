package com.ykdevs.karate.sample.util;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

public class DbUtils {

    private static final Logger logger = LoggerFactory.getLogger(DbUtils.class);

    private final JdbcTemplate jdbcTemplate;

    public DbUtils() throws IOException {
        PropertiesUtils propertiesUtils = new PropertiesUtils();
        String dbUrl = propertiesUtils.getProperty("spring.datasource.url");
        String username = propertiesUtils.getProperty("spring.datasource.username");
        String password = propertiesUtils.getProperty("spring.datasource.password");
        String driverClassName = propertiesUtils.getProperty("spring.datasource.driverClassName");
        logger.info("url             = " + dbUrl);
        logger.info("username        = " + username);
        logger.info("password        = " + password);
        logger.info("driverClassName = " + driverClassName);
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName(driverClassName);
        dataSource.setUrl(dbUrl);
        dataSource.setUsername(username);
        dataSource.setPassword(password);
        jdbcTemplate = new JdbcTemplate(dataSource);
        logger.info("init jdbc template: {}", dbUrl);
    }

    public Object readValue(String query) {
        return jdbcTemplate.queryForObject(query, Object.class);
    }

    public Map<String, Object> readRow(String query) {
        return jdbcTemplate.queryForMap(query);
    }

    public List<Map<String, Object>> readRows(String query) {
        return jdbcTemplate.queryForList(query);
    }
}
