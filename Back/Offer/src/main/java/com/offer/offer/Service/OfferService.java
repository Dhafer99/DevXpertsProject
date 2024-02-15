package com.offer.offer.Service;

import com.offer.offer.Entity.Offer;
import com.offer.offer.Repository.OfferRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class OfferService implements IOfferService{
    private OfferRepository offerRepository;

    @Override
    public List<Offer> getAllOffers() {
        return offerRepository.findAll();
    }

    @Override
    public Offer getOfferById(long id) {
        return offerRepository.findById(id).orElse(null);
    }

    @Override
    public Offer addOffer(Offer offer) {
       return offerRepository.save(offer);
    }

    @Override
    public Offer updateOffer(Offer offer) {
        return offerRepository.save(offer);
    }

    @Override
    public void deleteOffer(long id) {
        offerRepository.deleteById(id);
    }
}
