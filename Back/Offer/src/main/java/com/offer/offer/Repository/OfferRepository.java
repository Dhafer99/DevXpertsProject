package com.offer.offer.Repository;

import com.offer.offer.Entity.Offer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OfferRepository extends JpaRepository<Offer,Long> {
    List<Offer> findOffersByExibitorId(long id);
}
