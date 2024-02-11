package com.example.exhibitor;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients

@SpringBootApplication
public class ExhibitorApplication {

    public static void main(String[] args) {
        SpringApplication.run(ExhibitorApplication.class, args);
    }

}
