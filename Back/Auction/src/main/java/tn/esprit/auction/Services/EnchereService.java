package tn.esprit.auction.Services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.auction.Entites.Enchere;
import tn.esprit.auction.Entites.Room;
import tn.esprit.auction.Repository.EnchereRepository;
import tn.esprit.auction.Repository.RoomRepository;
import org.springframework.data.domain.PageRequest;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class EnchereService implements  EnchereInterface{
    EnchereRepository enchereRepository ;
    RoomRepository roomRepository ;
    @Override
    public Enchere addEncherForUser(Long companyId,  Long roomId) {
        Enchere enchere = new Enchere();

        enchere.setIdcompany(companyId);
        enchere.setStatus(true);
        Room room = roomRepository.findById(roomId).get();
        enchere.setPricing(room.getPrice());
        enchere.setRoom(room);
        enchereRepository.save(enchere);
        return enchere;
    }

    @Override
    public void updatePricing(Long companyId , Long RoomId , int Points  ) {
    Enchere enchere = enchereRepository.findByIdcompanyAndRoomIdRoom(companyId,RoomId);

    if(Points == 50 )
        {
         float price =  enchere.getPricing() +30;
            enchere.setPricing(price);
            enchereRepository.save(enchere);

        }

        if(Points == 150 )
        {
            float price =  enchere.getPricing() +100;
            enchere.setPricing(price);
            enchereRepository.save(enchere);

        }
        if(Points == 100 )
        {
            float price =  enchere.getPricing() +150;
            enchere.setPricing(price);
            enchereRepository.save(enchere);

        }


    }

    @Override
    public Boolean getUserEnchere(Long companyId, Long RoomId) {
        Boolean test = false;
        Enchere enchere = enchereRepository.findByIdcompanyAndRoomIdRoom(companyId,RoomId);
        if ( enchere!=null)
            {
                test = true;
            }
            return  test ;
    }

    @Override
    public List<Enchere> getTopEncheresByRoomId(Long roomId) {
        Room room = roomRepository.findById(roomId).orElse(null);
        List<Enchere> topwinners = enchereRepository.findTopEncheresByRoomId(roomId);
        List<Enchere> topwinnersFinal = new ArrayList<>();
        if (room != null) {

            int maxWinners = room.getMaxWinners();
            for (Enchere e : topwinners) {
                if (topwinnersFinal.size() < maxWinners) {
                    topwinnersFinal.add(e);
                } else {
                    break;
                }
            }
return  topwinnersFinal ;
        } else {
            throw new RuntimeException("La salle avec l'id " + roomId + " n'a pas été trouvée.");
        }
    }
}