package com.offer.offer.Service;

import com.offer.offer.Entity.Offer;

import java.util.List;

public interface IOfferService {
    List<Offer> getAllOffers();
    Offer getOfferById(long id);
    Offer addOffer(Offer offer);
    Offer updateOffer(Offer offer);
    void deleteOffer(long id);
}
