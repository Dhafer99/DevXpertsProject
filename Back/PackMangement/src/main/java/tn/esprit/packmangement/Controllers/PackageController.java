package tn.esprit.packmangement.Controllers;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.packmangement.Entites.Package;
import tn.esprit.packmangement.Entites.TypePack;
import tn.esprit.packmangement.Services.PackageInterface;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/packs")
public class PackageController {
    PackageInterface packageInterface;
    // Afficher les packs d'un room
    @GetMapping("/getRoomPackages")
    public List<Package> getRoomPackages(@RequestParam Long idRomm) {
        return  packageInterface.findRoomPackages(idRomm);
    }

    // Afficher les packs d'un type spécifiques
    @GetMapping("/getpackBYType")
    public List<Package> getpackBYType(@RequestParam TypePack typePack) {
        return  packageInterface.getpackBYType(typePack);
    }

    //Associer pack To room
    @PutMapping("/AffecterPackToRoom")
    public Package AffecterPackToRoom(@RequestParam Long p, @RequestParam Long idRoom) {
        return  packageInterface.AffecterPackToRoom(idRoom,p);
    }

    //ADD new package
    @PostMapping("/addPackge")
    public Package addPackge(@RequestBody Package pack) {

        return packageInterface.addPackge(pack);
    }

    //Update Package
    @PutMapping("/updatePackage")
    public Package updatePackage(@RequestBody Package p) {

        return packageInterface.updatePackage(p);
    }

    // Afficher les details d'un packs
    @GetMapping("/retrievePackage")
    public Package retrievePackage(@RequestParam Long idpack) {
        return  packageInterface.retrievePackage(idpack);
    }


}
