package com.example.exhibitor.Controller;


import com.example.exhibitor.Entity.SupplierRequest;
import com.example.exhibitor.Entity.SupplyRequestOffer;
import com.example.exhibitor.Service.SupplyRequestOfferService;
import jakarta.ws.rs.Path;
import jdk.jfr.Description;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/api/SupplyOffer")

public class SupplyRequestOfferController {

    @Autowired
    SupplyRequestOfferService supplyRequestOfferService ;

    @Description("This IS responsible for adding a suggestion from the supplier to the admin")
    @PostMapping("/addSupplyRequestOffer/{SupplierId}/{SupplyRequestId}")
    public SupplyRequestOffer addSupplierRequest(
            @RequestBody SupplyRequestOffer supplierRequest,
             @PathVariable("SupplierId") Long supplierId,
            @PathVariable("SupplyRequestId") Long supplyRequestId
    ) throws Exception {
        return supplyRequestOfferService.addSupplyOffer(supplierRequest,supplierId,supplyRequestId);
    }
    @GetMapping("/getSupplierOfferById/{SupplyRequestId}")
    public List<SupplyRequestOffer> getSupplierOfferById(
            @PathVariable("SupplyRequestId") Long supplyRequestId
    ){
        return supplyRequestOfferService.supplyRequestOffers(supplyRequestId);
    }

}
