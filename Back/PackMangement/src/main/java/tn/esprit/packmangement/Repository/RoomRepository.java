package tn.esprit.packmangement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.packmangement.Entites.Room;

public interface RoomRepository  extends JpaRepository<Room,Long> {
}
