package tn.esprit.auction.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tn.esprit.auction.Entites.Enchere;

import java.util.List;

public interface EnchereRepository extends JpaRepository<Enchere,Long> {
    Enchere findByIdcompanyAndRoomIdRoom(Long companyId, Long roomid);



    @Query("SELECT e FROM Enchere e WHERE e.room.idRoom = :roomId AND e.status = true ORDER BY e.pricing DESC")
    List<Enchere> findTopEncheresByRoomId(Long roomId);
}
