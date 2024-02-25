package com.offer.offer.Repository;

import com.offer.offer.Entity.Offer;
import com.offer.offer.Entity.TypeOffer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OfferRepository extends JpaRepository<Offer,Long> {
    List<Offer> findOffersByExibitorId(long id);
    List<Offer> findOffersByOfferAndExibitorId(TypeOffer typeOffer,long id);
    //Nombre d'offres par catégorie
    @Query("SELECT o.offer, COUNT(o) FROM Offer o GROUP BY o.offer")
    List<Object[]> countOffersByType();
}
