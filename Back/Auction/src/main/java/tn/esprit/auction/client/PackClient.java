package tn.esprit.auction.client;



import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import tn.esprit.auction.Entites.Pack;

import java.util.List;


@FeignClient(name="pack-service", url = "${application.config.packs-url}")
public interface PackClient {

    @GetMapping("/getRoomPackages")
    List<Pack> getRoomPackages(@RequestParam Long idRomm);
}
