package com.offer.offer.Service;

import com.offer.offer.Entity.Offer;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

public interface IOfferService {
    List<Offer> getAllOffers();
    Offer getOfferById(long id);
    Offer addOffer(Offer offer, String description, LocalDate lastDateApplication, int nbrCandidature, long exibitorId, MultipartFile file) throws IOException;
    Offer updateOffer(Long idOffer,String description, LocalDate lastDateApplication, int nbrCandidature, long exibitorId, MultipartFile file) throws IOException;
    void deleteOffer(long id);
    List<Offer> getOfferByexibitorId(long id);
    List<Offer> getOfferByDomaineEntreprise(long idExibitor);
}
