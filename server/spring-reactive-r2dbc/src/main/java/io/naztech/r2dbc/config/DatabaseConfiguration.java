package io.naztech.r2dbc.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.r2dbc.config.AbstractR2dbcConfiguration;
import org.springframework.data.r2dbc.repository.config.EnableR2dbcRepositories;

import io.r2dbc.mssql.MssqlConnectionConfiguration;
import io.r2dbc.mssql.MssqlConnectionFactory;

@Configuration
@EnableR2dbcRepositories("io.naztech.r2dbc.repository")
public class DatabaseConfiguration extends AbstractR2dbcConfiguration {
	private final Logger log = LoggerFactory.getLogger(DatabaseConfiguration.class);

	@Value("${spring.data.mssql.host}")
	private String host;

	@Value("${spring.data.mssql.port}")
	private Integer port;

	@Value("${spring.data.mssql.database}")
	private String database;

	@Value("${spring.data.mssql.username}")
	private String username;

	@Value("${spring.data.mssql.password}")
	private String password;

	@Bean
	public MssqlConnectionFactory connectionFactory() {

		log.info("Connecting to database '{}'...", host);

		return new MssqlConnectionFactory(MssqlConnectionConfiguration.builder()
				.host(host)
				.port(port)
				.database(database)
				.username(username)
				.password(password)
				.build());
	}
}