package tn.esprit.auction.Services;

import lombok.AllArgsConstructor;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;
import tn.esprit.auction.Entites.Company;
import tn.esprit.auction.Entites.Pack;
import tn.esprit.auction.Entites.Room;
import tn.esprit.auction.Repository.CompanyRepository;
import tn.esprit.auction.Repository.PackgeRepository;
import tn.esprit.auction.Repository.RoomRepository;

import java.security.SecureRandom;
import java.util.List;

@Service
@AllArgsConstructor
public class RoomService implements RoomInterface{

RoomRepository roomRepository;
CompanyRepository companyRepository ;
PackgeRepository packgeRepository ;
    @Override
    public void addRoom(Room room) {
        SecureRandom random = new SecureRandom();
        StringBuilder codeBuilder = new StringBuilder();
        String allowedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        int maxLength = 4;
        List<Pack> packs = packgeRepository.findByTypePack(room.getTypePack());

        room.setPackages(packs);
        room.setStatus(false);
        for (int i = 0; i < maxLength; i++) {
            int randomIndex = random.nextInt(allowedChars.length());
            char randomChar = allowedChars.charAt(randomIndex);
            codeBuilder.append(randomChar);
        }
        room.setCodeRoom(codeBuilder.toString());
         roomRepository.save(room);
        for (Pack p : packs)
        {
            p.setRoom(room);
            packgeRepository.save(p);
        }
    }

    @Override
    public Room findRoom(Long idroom) {
        return roomRepository.findById(idroom).get();
    }

    @Override
    public List<Room> findAllRooms() {
        return roomRepository.findAll();
    }

    @Override
    public Room updateRoom( Room room) {
        return  roomRepository.save(room);
    }

    @Override
    public void deleteRoom(Room room) {
        roomRepository.delete(room);
    }

    @Override
    public void ParticipateToRoom(Long idroom , Long idCompany) {
        Company company = companyRepository.findById(idCompany).get();
        Room room = roomRepository.findById(idroom).get();
        company.setRoom(room);
        companyRepository.save(company);

    }

    @Override
    public float UpdatePrice(int nbrpoint,Long idRoom) {
        Room room = roomRepository.findById(idRoom).get() ;
        float somme =0;
        if(nbrpoint==50)
        {
           somme= room.getPriceAuction() + 30;
        }
        if(nbrpoint==100)
        {
            somme= room.getPriceAuction() + 50;
        }
        if(nbrpoint==150)
        {
            somme= room.getPriceAuction() + 100;
        }
        room.setPriceAuction(somme);
        roomRepository.save(room);
            return somme;
    }

    @Override
    public List<Company> getCapaniesParticipants( Long roomId) {
        Room room = roomRepository.findById(roomId).get();

        return room.getCompanies();
    }
}