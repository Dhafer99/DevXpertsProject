package com.offer.offer.Controller;

import com.offer.offer.Entity.Offer;
import com.offer.offer.Service.OfferService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Offer")
@AllArgsConstructor
@CrossOrigin
public class OfferController {
    private OfferService offerService;

    @GetMapping("/allOffers")
    public List<Offer> retrieveAllOffers() {
        return offerService.getAllOffers();
    }

    @GetMapping("/offer/{idOffer}")
    public Offer retrieveOfferById(@PathVariable("idOffer") long id) {
        return offerService.getOfferById(id);
    }

    @PostMapping("/add")
    public Offer addOffer(@RequestBody Offer offer) {
        return offerService.addOffer(offer);
    }
    @PutMapping("/update")
    public Offer updateOffer(@RequestBody Offer offer) {
        return offerService.updateOffer(offer);
    }
    @DeleteMapping("/{idOffer}")
    public void deleteOffer(@PathVariable("idOffer") long id){
        offerService.deleteOffer(id);
    }
}