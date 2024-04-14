package tn.esprit.auction.Services;

import tn.esprit.auction.Entites.Enchere;
import tn.esprit.auction.Entites.Room;

import java.util.List;

public interface EnchereInterface {

    Enchere addEncherForUser(Long companyId,  Long roomId);

    void updatePricing(Long companyId , Long RoomId , int Points );

    Boolean getUserEnchere(Long companyId , Long RoomId );
    List<Enchere> getUsersEnterningAuction( Long RoomId );
    List<Enchere> getTopEncheresByRoomId(Long roomId);

    void deleteEnchereSortieUser(Long idCompany, long room);

   Enchere getCurrentUserBiding(Long idCompany, long room);

   Enchere findHighestPricedEnchereByRoomId (long roomId) ;

}
