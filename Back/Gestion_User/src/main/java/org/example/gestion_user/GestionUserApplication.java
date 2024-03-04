package org.example.gestion_user;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class GestionUserApplication {

	public static void main(String[] args) {
		SpringApplication.run(GestionUserApplication.class, args);
	}

}
