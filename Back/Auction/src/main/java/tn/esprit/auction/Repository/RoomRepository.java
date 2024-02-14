package tn.esprit.auction.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.auction.Entites.Room;

public interface RoomRepository extends JpaRepository<Room,Long> {
}
