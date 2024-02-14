package tn.esprit.packmangement.Services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.packmangement.Entites.Room;
import tn.esprit.packmangement.Repository.RoomRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class RoomService implements RoomInterface {
    RoomRepository roomRepository ;
    @Override
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    @Override
    public Room addRoom(Room room) {
        return roomRepository.save(room);
    }

    @Override
    public Room updateRoom(Room room) {
        return roomRepository.save(room);
    }

    @Override
    public Room retrieveRoom(Long idroom) {
        return roomRepository.findById(idroom).get();
    }

    @Override
    public void deleteRoom(Room idroom) {
        roomRepository.delete(idroom);
    }

    @Override
    public void DesactivateRoom(Room idroom) {
        idroom.setStatus(false);
        roomRepository.save(idroom);
    }

    @Override
    public void ActivateRoom(Room idroom) {

    }

    @Override
    public Room GetRoomByCode(Long codeRoom) {
        return null;
    }
}
