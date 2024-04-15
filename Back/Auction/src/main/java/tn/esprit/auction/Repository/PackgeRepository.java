package tn.esprit.auction.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.auction.Entites.Pack;
import tn.esprit.auction.Entites.TypePack;

import java.util.List;

public interface PackgeRepository extends JpaRepository<Pack,Long> {
List<Pack> findByTypePack(TypePack typePack);
    List<Pack> findByTypePackAndStatus(TypePack typePack , Boolean status);
List<Pack> findByRoomIdRoom(Long idroom);
List<Pack> findByReserved(Boolean True);

    List<Pack> findByStatus(Boolean status);



}
