package com.webpg.platform;

import com.webpg.platform.common.repositories.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.config.EnableMongoAuditing;

@EnableMongoAuditing
@SpringBootApplication
public class WebPgApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebPgApplication.class, args);
	}

}
