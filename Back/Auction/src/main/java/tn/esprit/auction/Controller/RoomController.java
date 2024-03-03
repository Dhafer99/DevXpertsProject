package tn.esprit.auction.Controller;

import com.stripe.Stripe;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.auction.Entites.Pack;
import tn.esprit.auction.Entites.Room;
import tn.esprit.auction.Services.RoomInterface;

import java.util.List;
@CrossOrigin(origins = "*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/rooms")
public class RoomController {

    RoomInterface roomInterface ;

    @GetMapping("/calculateTotalAmountFor50pt/{quantity}")
    public  double calculateTotalAmountFor50pt(@PathVariable("quantity") int quantity) {
        return  roomInterface.calculateTotalAmountFor50pt(quantity);
    }

    @GetMapping("/calculateTotalAmountFor100pt/{quantity}")
    public  double calculateTotalAmountFor100pt(@PathVariable("quantity") int quantity) {
        return  roomInterface.calculateTotalAmountFor100pt(quantity);
    }

    @GetMapping("/calculateTotalAmountFor150pt/{quantity}")
    public  double calculateTotalAmountFor150pt(@PathVariable("quantity") int quantity) {
        return  roomInterface.calculateTotalAmountFor150pt(quantity);
    }
    private static void init() {
        Stripe.apiKey = "pk_test_51OpCPlJKKu0bIqcHkJm13XGfPK7iBH0BHkBLr2K7AZG0tlw4RFMeXtVdFMbrgTXF1Pdu6r6hCOFlzmT2I3YlZOTV00FBNKzXAC";
    }
    @PutMapping("/updatePrice/{nbrpoint}/{idroom}")
    public float updatePrice(@PathVariable("nbrpoint") int nbrpoint ,@PathVariable("idroom") long idroom ) {
        return  roomInterface.UpdatePrice(nbrpoint,idroom);
    }
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
