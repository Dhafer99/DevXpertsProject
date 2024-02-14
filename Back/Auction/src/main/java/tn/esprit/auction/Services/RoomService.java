package tn.esprit.auction.Services;

import lombok.AllArgsConstructor;
import org.bouncycastle.util.Pack;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;
import tn.esprit.auction.Entites.Room;
import tn.esprit.auction.Repository.RoomRepository;
@Service
@AllArgsConstructor
public class RoomService implements RoomInterface{

RoomRepository roomRepository;
    @Override
    public Room addRoom(Room room) {
        return roomRepository.save(room);
    }

    @Override
    public Room findRoom(Long idroom) {
        return roomRepository.findById(idroom).get();
    }
}
