package tn.esprit.auction.Controller;

import com.stripe.Stripe;
import lombok.AllArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.*;
import tn.esprit.auction.Entites.Enchere;
import tn.esprit.auction.Entites.EnchereUserDTO;
import tn.esprit.auction.Entites.Pack;
import tn.esprit.auction.Entites.Room;
import tn.esprit.auction.Services.EnchereInterface;
import tn.esprit.auction.Services.RoomInterface;

import java.util.List;
//@CrossOrigin(origins = "*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/rooms")
public class RoomController {

    RoomInterface roomInterface ;
    EnchereInterface enchereInterface ;

    /*********************************** Enchere methodes ****/
    @PostMapping("/addEncherForUser/{companyId}/{roomId}")
    public Enchere addEncherForUser(
                                    @PathVariable("companyId") int companyId, @PathVariable("roomId") long roomId) {

       return enchereInterface.addEncherForUser( companyId,roomId);
    }


    @PutMapping("/updatePricing/{companyId}/{roomId}/{points}")
    public void updatePricing(@PathVariable("points") int points,
            @PathVariable("companyId") int companyId, @PathVariable("roomId") long roomId) {

         enchereInterface.updatePricing( companyId,roomId,points);
    }

    @GetMapping("/getUserEnchere/{companyId}/{roomId}")
    public Boolean getUserEnchere(
                              @PathVariable("companyId") int companyId, @PathVariable("roomId") long roomId) {

      return   enchereInterface.getUserEnchere( companyId,roomId);
    }
    @GetMapping("/getUsersEnterningAuction/{roomId}")
    public List<EnchereUserDTO>getUsersEnterningAuction(
        @PathVariable("roomId") long roomId) {

        return  enchereInterface.getUsersEnterningAuction( roomId);
    }

    @GetMapping("/getTopEncheresByRoomId/{roomId}")
    public List<Enchere> getTopEncheresByRoomId(
            @PathVariable("roomId") long roomId) {

        return   enchereInterface.getTopEncheresByRoomId(roomId);
    }


    @GetMapping("/getRoomPackages/{roomId}")
    public List<Pack> getRoomPackages(
            @PathVariable("roomId") long roomId) {

        return   roomInterface.getRoomPacks(roomId);
    }

    /*********************************** Enchere methodes ****/
    @GetMapping("findHighestPricedEnchereByRoomId/{idRoom}")
    public Enchere findHighestPricedEnchereByRoomId(@PathVariable("idRoom") long idRoom )
    {
        return  enchereInterface.findHighestPricedEnchereByRoomId(idRoom);
    }
    @GetMapping("getCurrentUserBiding/{idcompany}/{idRoom}")
    public Enchere getCurrentUserBiding(@PathVariable("idcompany") int idcompany,@PathVariable("idRoom") long idRoom )
    {
        return  enchereInterface.getCurrentUserBiding(idcompany,idRoom);
    }
    @DeleteMapping("/deleteUserFromEnchere/{idcompany}/{idRoom}")
    public void deleteUserFromEnchere(@PathVariable("idcompany") int idcompany,@PathVariable("idRoom") long idRoom )
    {
        enchereInterface.deleteEnchereSortieUser(idcompany,idRoom);
    }

    @PutMapping("/ReservePack/{idPack}/{idRoom}")
    public void ReservePack(@PathVariable("idPack") Long idPack,@PathVariable("idRoom") Long idRoom ) {
          roomInterface.ReservePack(idPack,idRoom);
    }

    @PutMapping("/updateRoomPaticipant/{idRoom}")
    public Room updateRoomPaticipant(@PathVariable("idRoom") Long idRoom ) {
        return  roomInterface.updateRoomParticipant(idRoom);
    }
    @MessageMapping("/payment")
    @SendTo("/topic/payment")
    public String handlePaymentNotification(String message) {
        return message;
    }
    private static void init() {
        Stripe.apiKey = "pk_test_51OpCPlJKKu0bIqcHkJm13XGfPK7iBH0BHkBLr2K7AZG0tlw4RFMeXtVdFMbrgTXF1Pdu6r6hCOFlzmT2I3YlZOTV00FBNKzXAC";
    }
    @PutMapping("/updatePrice/{nbrpoint}/{idroom}")
    public float updatePrice(@PathVariable("nbrpoint") float nbrpoint ,@PathVariable("idroom") long idroom ) {
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
    public void ParticipateToRoom( @PathVariable("idRoom") long idRoom,@PathVariable("companyId") int companyId ) {
        roomInterface.ParticipateToRoom(idRoom,companyId);
    }

   /* @GetMapping("/getCapaniesParticipants/{idRoom}")
    public void getCapaniesParticipants( @PathVariable("idRoom") long idRoom) {
        roomInterface.getCapaniesParticipants(idRoom);
    }*/

    /***************************  ROULETTE WEB SOCKET  */

    @MessageMapping("/startRoulette")
    @SendTo("/topic/rouletteResult")
    public int startRoulette(Long roomId) {

        int result = (int) (Math.random() * 37);
        return result;
    }
}
