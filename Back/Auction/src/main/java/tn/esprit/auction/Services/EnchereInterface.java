package tn.esprit.auction.Services;

import tn.esprit.auction.Entites.Enchere;

import java.util.List;

public interface EnchereInterface {

    Enchere addEncherForUser(Long companyId,  Long roomId);

    void updatePricing(Long companyId , Long RoomId , int Points );

    Boolean getUserEnchere(Long companyId , Long RoomId );
    List<Enchere> getTopEncheresByRoomId(Long roomId);

}
