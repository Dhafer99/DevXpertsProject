package com.offer.offer.Controller;

import com.offer.offer.Entity.Offer;
import com.offer.offer.Service.IOfferService;
import com.offer.offer.Service.OfferService;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;

@RestController
@RequestMapping("/api/Offer")
@AllArgsConstructor
@CrossOrigin
public class OfferController {
    private IOfferService offerService;

    @GetMapping("/allOffers")
    public List<Offer> retrieveAllOffers() {
        return offerService.getAllOffers();
    }

    @GetMapping("/offer/{idOffer}")
    public Offer retrieveOfferById(@PathVariable("idOffer") long id) {
        return offerService.getOfferById(id);
    }

    @PostMapping("/add")
    public  ResponseEntity<?> addOffer(@RequestParam("description")String description,
                          @RequestParam("lastDateApplication") LocalDate lastDateApplication,
                          @RequestParam("nbrCandidature")int nbrCandidature,
                          @RequestParam("exibitorId")long exibitorId,
                          @RequestParam("file") /*@Size(max = 10 * 1024 * 1024)*/ MultipartFile file) throws IOException {
        Offer offer = new Offer();
        Offer savedOffer =  offerService.addOffer(offer,description,lastDateApplication,nbrCandidature,exibitorId,file);
        return ResponseEntity.ok(savedOffer);
    }
    /*@PutMapping("/update/{ifOffer}")
    public ResponseEntity<?> updateOffer(@PathVariable("idOffer") long id,
                             @RequestParam("description")String description,
                             @RequestParam("lastDateApplication") LocalDate lastDateApplication,
                             @RequestParam("nbrCandidature")int nbrCandidature,
                             @RequestParam("exibitorId")long exibitorId,
                             @RequestParam("file") MultipartFile file) throws IOException {
        Offer offer = new Offer();
        Offer savedOffer =  offerService.updateOffer(id,offer,description,lastDateApplication,nbrCandidature,exibitorId,file);
        return ResponseEntity.ok(savedOffer);
    }*/
    @DeleteMapping("/{idOffer}")
    public void deleteOffer(@PathVariable("idOffer") long id){
        offerService.deleteOffer(id);
    }

    @GetMapping("/offerExibitor/{exibitorId}")
    public List<Offer> getOfferByexibitorId(@PathVariable("exibitorId") long id) {
        return offerService.getOfferByexibitorId(id);
    }
    @PutMapping("/update")
    public ResponseEntity<?> updateOffer(@RequestParam("idOffer") long id,
                             @RequestParam("description")String description,
                             @RequestParam("lastDateApplication") LocalDate lastDateApplication,
                             @RequestParam("nbrCandidature")int nbrCandidature,
                             @RequestParam("exibitorId")long exibitorId,
                             @RequestParam("file") MultipartFile file) throws IOException {

        Offer savedOffer =  offerService.updateOffer(id,description,lastDateApplication,nbrCandidature,exibitorId,file);
        return ResponseEntity.ok(savedOffer);
    }
}