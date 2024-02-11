package com.example.exhibitor.client;


import com.example.exhibitor.Entity.Booth;
import lombok.AllArgsConstructor;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;



@FeignClient(name="booth-service", url = "${application.config.booths-url}")
public interface BoothClient {

    @GetMapping("/boothsByexhb/{exhibitorid}")
    List<Booth> findAllBooths(@PathVariable("exhibitorid") Long exhibitorid);
}
