package io.naztech.r2dbc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class SpringR2dbcApplication {
	
	//@Value("${allowed.origins}")
	//private String allowedOrigins;
	
	public static void main(String[] args) {
		SpringApplication.run(SpringR2dbcApplication.class, args);
	}
	/**
	 * @author mahbub.hasan
	 * @since 2020-01-13
	 * */
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/").allowedOrigins("*");
			}
		};
	}
}
