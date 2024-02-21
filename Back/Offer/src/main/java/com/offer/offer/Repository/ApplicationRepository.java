package com.offer.offer.Repository;

import com.offer.offer.Entity.Application;
import com.offer.offer.Entity.Offer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ApplicationRepository extends JpaRepository<Application,Long> {
    List<Application> findApplicationsByIdCandidat(long idCandidat);
    List<Application> findApplicationsByOffer(Offer offer);
}
