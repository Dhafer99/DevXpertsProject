package tn.esprit.auction.Services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.auction.Entites.Pack;
import tn.esprit.auction.Entites.Room;
import tn.esprit.auction.Entites.TypePack;
import tn.esprit.auction.Repository.PackgeRepository;
import tn.esprit.auction.Repository.RoomRepository;


import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class PackgeService implements PackageInterface {


    PackgeRepository packgeRepository ;
    RoomRepository roomRepository ;

    @Override
    public List<Pack> getpackBYType(TypePack typePack) {
        return packgeRepository.findByTypePack(typePack);
    }

    @Override
    public List<Pack> getAllPacks() {
        return packgeRepository.findAll();
    }

    @Override
    public Pack AffecterPackToRoom(Long roomId, Long packid) {


        Pack pack = packgeRepository.findById(packid).get();

        pack.setStatus(false);
        //pack.setReserved(false);
        System.out.println(roomId);
        packgeRepository.save(pack);
        return pack;
    }

    @Override
    public Pack addPackge(Pack pack) {
       return packgeRepository.save(pack);
    }

    @Override
    public Pack updatePackage(Pack pack) {


        return packgeRepository.save(pack);
    }

    @Override
    public Pack retrievePackage(Long idpack) {
        return packgeRepository.findById(idpack).get();
    }

    @Override
    public List<Pack> findRoomPackages(Long idRoom) {
      Room room = roomRepository.findById(idRoom).get();
        return  room.getPackages();

    }

    @Override
    public List<Pack> findReservedPacks() {
        List<Pack> packs = packgeRepository.findAll();
        List<Pack> packsReserved = new ArrayList<>();
        for (Pack p : packs){
            if (p.isReserved()){

                packsReserved.add(p);
            }

        }
        return packsReserved;
    }

    @Override
    public List<Pack> finfNonReservedPacks() {
        List<Pack> packs = packgeRepository.findAll();
        List<Pack> packsNonReserved = new ArrayList<>();
        for (Pack p : packs){
            if (!p.isReserved()){

                packsNonReserved.add(p);
            }

        }
        return packsNonReserved;
    }

    @Override
    public List<Pack> findMyPacks() {
        return null;
    }

    @Override
    public List<Pack> findPacksByIdRoom(Long idroom) {
        return packgeRepository.findByRoomIdRoom(idroom);
    }

    @Override
    public void delete(Pack idpack) {
packgeRepository.delete(idpack);
    }


}
