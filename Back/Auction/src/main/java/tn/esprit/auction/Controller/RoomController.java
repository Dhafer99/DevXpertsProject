package tn.esprit.auction.Controller;

import lombok.AllArgsConstructor;
import org.springframework.context.event.EventListener;
import org.springframework.web.bind.annotation.*;
import tn.esprit.auction.Entites.Package;
import tn.esprit.auction.Entites.Room;
import tn.esprit.auction.Services.RoomInterface;

@RestController
@AllArgsConstructor
@RequestMapping("/api/rooms")
public class RoomController {
    RoomInterface roomInterface ;
    @PostMapping("/addRoom")
    public Room addRoom(@RequestBody Room room) {

        return roomInterface.addRoom(room);
    }
    @GetMapping("/{idRoom}")
    public Room findRoom(@PathVariable("idRoom") long idRoom ) {
        return  roomInterface.findRoom(idRoom);
    }


}
