package tn.esprit.auction.Controller;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import tn.esprit.auction.Entites.Pack;
import tn.esprit.auction.Entites.TypePack;
import tn.esprit.auction.Services.PackageInterface;


import java.util.List;

@CrossOrigin(origins = {"http://localhost:4203", "http://localhost:4201"})
@Slf4j
@RestController
@AllArgsConstructor
@RequestMapping("/api/packs")
public class PackageController {
    PackageInterface packageInterface;
    // Afficher les packs d'un room
    @GetMapping("/getRoomPackages")
    public List<Pack> getRoomPackages(@RequestParam Long idRomm) {
        return  packageInterface.findRoomPackages(idRomm);
    }
    @GetMapping("/getAllPacks")
    public List<Pack> getAllPacks() {
        return  packageInterface.getAllPacks();
    }

    // Afficher les packs d'un type spécifiques
    @GetMapping("/getpackBYType/{typePack}")
    public List<Pack> getpackBYType(@PathVariable("typePack") TypePack typePack) {
        return  packageInterface.getpackBYType(typePack);
    }

    //Associer pack To room
    @PutMapping("/AffecterPackToRoom")
    public Pack AffecterPackToRoom(@RequestParam Long p, @RequestParam Long idRoom) {
        return  packageInterface.AffecterPackToRoom(idRoom,p);
    }

    //ADD new package
    @PostMapping("/addPackge")
    public Pack addPackge(@RequestBody Pack pack) {

        return packageInterface.addPackge(pack);
    }

    //Update Package
    @PutMapping("/updatePackage")
    public Pack updatePackage(@RequestBody Pack p) {
        log.info("hhh"+p);
        return packageInterface.updatePackage(p);
    }

    // Afficher les details d'un packs
    @GetMapping("/retrievePackage/{idpack}")
    public Pack retrievePackage(@PathVariable("idpack") Long idpack) {
        return  packageInterface.retrievePackage(idpack);
    }

    @GetMapping("/findPacksByIdRoom/{idroom}")
    public List<Pack> findPacksByIdRoom(@PathVariable("idroom") Long idroom) {
        return  packageInterface.findPacksByIdRoom(idroom);
    }


}
