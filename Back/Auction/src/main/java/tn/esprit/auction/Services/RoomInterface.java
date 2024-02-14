package tn.esprit.auction.Services;

import tn.esprit.auction.Entites.Room;

public interface RoomInterface {
    Room addRoom(Room room);
    Room findRoom(Long idroom);
}
