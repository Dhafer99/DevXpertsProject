package tn.esprit.packmangement.Services;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import tn.esprit.packmangement.Entites.Package;
import tn.esprit.packmangement.Entites.Room;
import tn.esprit.packmangement.Entites.TypePack;
import tn.esprit.packmangement.Repository.PackgeRepository;
import tn.esprit.packmangement.Repository.RoomRepository;
import tn.esprit.packmangement.client.RoomClient;


import java.util.List;

@Service
@AllArgsConstructor
public class PackgeService implements PackageInterface {

    RoomClient roomClient ;
    PackgeRepository packgeRepository ;
    RoomRepository roomRepository ;

    @Override
    public List<Package> getpackBYType(TypePack typePack) {
        return packgeRepository.findByTypePack(typePack);
    }

    @Override
    public Package AffecterPackToRoom(Long roomId, Long packid) {

        Room room = roomClient.findRoom(roomId);
        Package pack = packgeRepository.findById(packid).get();
        roomRepository.save(room);
        pack.setRoom(room);
        System.out.println(roomId);
        packgeRepository.save(pack);
        return pack;
    }

    @Override
    public Package addPackge(Package pack) {
       return packgeRepository.save(pack);
    }

    @Override
    public Package updatePackage(Package pack) {
        return packgeRepository.save(pack);
    }

    @Override
    public Package retrievePackage(Long idpack) {
        return packgeRepository.findById(idpack).get();
    }

    @Override
    public List<Package> findRoomPackages(Long idRoom) {
     Room room = roomRepository.findById(idRoom).get();
        return  room.getPackages();

    }

    @Override
    public void delete(Package idpack) {
packgeRepository.delete(idpack);
    }


}
