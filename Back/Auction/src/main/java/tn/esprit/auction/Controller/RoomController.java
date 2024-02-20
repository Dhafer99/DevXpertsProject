package tn.esprit.auction.Controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.auction.Entites.Pack;
import tn.esprit.auction.Entites.Room;
import tn.esprit.auction.Services.RoomInterface;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/rooms")
public class RoomController {
    RoomInterface roomInterface ;
    @PostMapping("/addRoom")
    public void addRoom(@RequestBody Room room) {

         roomInterface.addRoom(room);
    }
    @GetMapping("/{idRoom}")
    public Room findRoom(@PathVariable("idRoom") long idRoom ) {
        return  roomInterface.findRoom(idRoom);
    }

    @GetMapping("/getAllRooms")
    public List<Room> getAllRooms() {
        return  roomInterface.findAllRooms();
    }

    @PutMapping("updateRoom")
    public Room updateRoom( @RequestBody  Room room ) {

        return  roomInterface.updateRoom(room);
    }

    @DeleteMapping("/deleteRoom")
    public void deleteRoom( @RequestBody  Room room ) {
          roomInterface.deleteRoom(room);
    }

    @PutMapping("/participateToRoom/{companyId}/{idRoom}")
    public void ParticipateToRoom( @PathVariable("idRoom") long idRoom,@PathVariable("companyId") long companyId ) {
        roomInterface.ParticipateToRoom(idRoom,companyId);
    }

    @GetMapping("/getCapaniesParticipants/{idRoom}")
    public void getCapaniesParticipants( @PathVariable("idRoom") long idRoom) {
        roomInterface.getCapaniesParticipants(idRoom);
    }
}
