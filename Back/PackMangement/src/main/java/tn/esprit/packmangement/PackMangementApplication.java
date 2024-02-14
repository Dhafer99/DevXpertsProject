package tn.esprit.packmangement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@SpringBootApplication
public class PackMangementApplication {

    public static void main(String[] args) {
        SpringApplication.run(PackMangementApplication.class, args);
    }

}
