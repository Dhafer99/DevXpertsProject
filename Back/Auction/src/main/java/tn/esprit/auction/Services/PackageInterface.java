package tn.esprit.auction.Services;



import tn.esprit.auction.Entites.Pack;
import tn.esprit.auction.Entites.TypePack;

import java.util.List;

public interface PackageInterface {
    List<Pack> getpackBYType(TypePack typePack);
    List<Pack> getAllPacks();
    Pack AffecterPackToRoom(Long roomId , Long packid);
    Pack addPackge(Pack pack);
    Pack updatePackage (Pack pack);
    Pack retrievePackage (Long idpack);

    List<Pack> findRoomPackages (Long idRoom);
    List<Pack> findReservedPacks ();
    List<Pack> finfNonReservedPacks ();
    List<Pack> findMyPacks ();

    List<Pack> findPacksByIdRoom (Long idroom);
    void
    delete (Pack idpack);
}
