package com.offer.offer.Repository;

import com.offer.offer.Entity.Application;
import com.offer.offer.Entity.Offer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ApplicationRepository extends JpaRepository<Application,Long> {
    List<Application> findApplicationsByIdCandidat(long idCandidat);
    List<Application> findApplicationsByOffer(Offer offer);
    //nbr candidature pour chaque offre
    @Query("SELECT o, COUNT(a) FROM Offer o LEFT JOIN o.applications a GROUP BY o")
    List<Object[]> countApplicationsByOffer();
    // nbr de candidature accepter et refusé et en_cours
    @Query("SELECT a.status, COUNT(a) " +
            "FROM Application a " +
            "GROUP BY a.status")
    List<Object[]> countCandidaturesByStatus();
    //Nombre de candidatures par période
    @Query("SELECT FUNCTION('MONTH', a.applicationDate), FUNCTION('MONTHNAME', a.applicationDate), COUNT(a) FROM Application a GROUP BY FUNCTION('MONTH', a.applicationDate)")
    List<Object[]> countApplicationsByMonth();
}
