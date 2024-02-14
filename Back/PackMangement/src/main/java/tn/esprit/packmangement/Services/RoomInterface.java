package tn.esprit.packmangement.Services;



import tn.esprit.packmangement.Entites.Room;

import java.util.List;

public interface RoomInterface {
    List<Room> getAllRooms();

    Room addRoom(Room room);
    Room updateRoom (Room room);
    Room retrieveRoom (Long idroom);
    void deleteRoom (Room idroom);
    void DesactivateRoom (Room idroom);
    void ActivateRoom (Room idroom);
    Room GetRoomByCode (Long codeRoom);
}
