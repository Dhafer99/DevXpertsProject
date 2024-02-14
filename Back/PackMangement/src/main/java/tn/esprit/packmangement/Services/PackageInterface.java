package tn.esprit.packmangement.Services;

import tn.esprit.packmangement.Entites.Package;
import tn.esprit.packmangement.Entites.TypePack;

import java.util.List;

public interface PackageInterface {
    List<Package> getpackBYType(TypePack typePack);
    Package AffecterPackToRoom(Long roomId , Long packid);
    Package addPackge(Package pack);
    Package updatePackage (Package pack);
    Package retrievePackage (Long idpack);

    List<Package> findRoomPackages (Long idRoom);
    void
    delete (Package idpack);
}
