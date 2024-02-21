package com.offer.offer.Service;

import com.offer.offer.Entity.Offer;
import com.offer.offer.Repository.OfferRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Date;
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

    /*@Override
    public Offer addOffer(Offer offer,MultipartFile file) throws IOException {

        FileEntity fileEntity = new FileEntity();
        fileEntity.setFilename(file.getOriginalFilename());
        fileEntity.setContentType(file.getContentType());
        fileEntity.setData(file.getBytes());
        fileEntity.setOffer(offer);
        fileRepository.save(fileEntity);
        return offerRepository.save(offer);
    }*/

    @Override
    public Offer addOffer(Offer offer, String description, LocalDate lastDateApplication, int nbrCandidature, long exibitorId, MultipartFile file) throws IOException {

        offer.setDescription(description);
        offer.setLastDateApplication(lastDateApplication);
        offer.setNbrCandidature(nbrCandidature);
        offer.setExibitorId(exibitorId);
        if (file != null && !file.isEmpty()) {
            offer.setFile(file.getBytes());
        }
        return offerRepository.save(offer);
    }

    @Override
    public Offer updateOffer(Long idOffer, String description, LocalDate lastDateApplication, int nbrCandidature, long exibitorId, MultipartFile file) throws IOException {
        Offer offer = offerRepository.findById(idOffer).orElse(null);
        offer.setDescription(description);
        offer.setLastDateApplication(lastDateApplication);
        offer.setNbrCandidature(nbrCandidature);
        offer.setExibitorId(exibitorId);
        if (file != null && !file.isEmpty()) {
            offer.setFile(file.getBytes());
        }
        return offerRepository.save(offer);
    }

    @Override
    public void deleteOffer(long id) {
        offerRepository.deleteById(id);
    }

    @Override
    public List<Offer> getOfferByexibitorId(long id) {
        return offerRepository.findOffersByExibitorId(id);
    }

    @Override
    public List<Offer> getOfferByDomaineEntreprise(long idExibitor) {
        return null;
    }

}
