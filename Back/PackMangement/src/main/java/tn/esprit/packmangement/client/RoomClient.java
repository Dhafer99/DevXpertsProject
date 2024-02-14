package tn.esprit.packmangement.client;


import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import tn.esprit.packmangement.Entites.Room;



@FeignClient(name="Auction-service", url = "${application.config.Auction-url}")
public interface RoomClient {
    @GetMapping("/{idRoom}")
    Room findRoom(@PathVariable("idRoom") long idRoom );

}
