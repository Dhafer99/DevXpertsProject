package com.offer.offer.Repository;

import com.offer.offer.Entity.Offer;
import com.offer.offer.Entity.TypeOffer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OfferRepository extends JpaRepository<Offer,Long> {
    List<Offer> findOffersByExibitorId(long id);
    List<Offer> findOffersByOfferAndExibitorId(TypeOffer typeOffer,long id);
    //Nombre d'offres par catégorie
    @Query("SELECT o.offer, COUNT(o) FROM Offer o GROUP BY o.offer")
    List<Object[]> countOffersByType();
    //Recommandation
    /*@Query("SELECT o FROM Offer o " +
            "WHERE o.titre LIKE (SELECT DISTINCT a.offer.titre FROM Application a WHERE a.idCandidat = :userId) " +
            "AND o.offer IN (SELECT DISTINCT a.offer.offer FROM Application a WHERE a.idCandidat = :userId)"+
            "AND o.Id NOT IN (SELECT DISTINCT a.offer.Id FROM Application a WHERE a.idCandidat = :userId)")
    List<Offer> findRecommendedOffersForUser(@Param("userId") long userId);*/
    @Query("SELECT o FROM Offer o " +
            "WHERE EXISTS (SELECT 1 FROM Application a WHERE a.idCandidat = :userId AND o.titre LIKE CONCAT('%', a.offer.titre, '%')) " +
            "AND o.offer IN (SELECT DISTINCT a.offer.offer FROM Application a WHERE a.idCandidat = :userId) " +
            "AND o.Id NOT IN (SELECT DISTINCT a.offer.Id FROM Application a WHERE a.idCandidat = :userId)")
    List<Offer> findRecommendedOffersForUser(@Param("userId") long userId);

    @Query("SELECT CASE WHEN COUNT(a) > 0 THEN true ELSE false END " +
            "FROM Application a " +
            "WHERE a.offer.Id = :idOffer " +
            "AND a.idCandidat = :idCandidat")
    boolean hasApplied(@Param("idOffer") long idOffer, @Param("idCandidat") long idCandidat);

}
