package tn.esprit.auction.Controller;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;


import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.*;
import tn.esprit.auction.Entites.CheckoutPayment;
import tn.esprit.auction.Entites.Company;

import tn.esprit.auction.Entites.Pack;
import tn.esprit.auction.Entites.TypePack;
import tn.esprit.auction.Services.PackageInterface;


import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*, http://localhost:4203")
@Slf4j
@RestController
@AllArgsConstructor

@RequestMapping("/api/packs")
public class PackageController {

    PackageInterface packageInterface;
    @GetMapping("/getPayments")
    public  List<CheckoutPayment> getPayments() {
        return  packageInterface.getPayments();
    }
    @PutMapping("/SendCodeRoom/{email}/{code}")
    public void SendCodeRoom(@PathVariable("email") String email, @PathVariable("code") String code) {
       packageInterface.sendCoderoom(email,code);
    }


    @GetMapping("/getPackStatisticsByYearAndStatus")
    public  Map<Integer, Map<Long, Long>> getPackStatisticsByYearAndStatus() {
        return  packageInterface.getPackStatisticsByYear();
    }
    @GetMapping("/QuantitePeTypePack/{typePack}")
    public  int QuantitePeTypePack(@PathVariable("typePack") TypePack typePack) {
        return  packageInterface.QuantitePeTypePack(typePack);
    }
    @GetMapping("/revenueTotal")
    public  double revenueTotal() {
        return  packageInterface.revenueTotal();
    }
    @GetMapping("/RevenuePeTypePack/{typePack}")
    public  double RevenuePeTypePack(@PathVariable("typePack") TypePack typePack) {
        return  packageInterface.RevenuePeTypePack(typePack);
    }
    @GetMapping("/calculateReservationPercentageByType")
    public   List<Double> calculateReservationPercentageByType() {
        return  packageInterface.calculateReservationPercentageByType();
    }
    @GetMapping("/toployalcustomers")
    public List<Company> getTopLoyalCustomers() {

        return packageInterface.findTopLoyalCustomers(5);
    }



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


    @GetMapping("/deletePack/{id}")
    public void deletePack(@PathVariable("id") Long id) {
          packageInterface.delete(id);
    }


}
