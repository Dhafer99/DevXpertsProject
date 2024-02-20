package tn.esprit.auction.Services;

import tn.esprit.auction.Entites.Company;
import tn.esprit.auction.Entites.Room;

import java.util.List;

public interface RoomInterface {
    void addRoom(Room room);
    Room findRoom(Long idroom);
    List<Room> findAllRooms();

    Room updateRoom( Room room);

    void deleteRoom(Room room);

    void ParticipateToRoom(Long idroom,Long idCompany);

    List<Company> getCapaniesParticipants( Long roomId);



}
