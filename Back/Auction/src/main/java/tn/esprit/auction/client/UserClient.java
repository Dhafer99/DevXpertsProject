package tn.esprit.auction.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;


@FeignClient(name="AuthenticationService", url = "${application.config.AuthenticationService-url}")

public interface UserClient {

    @PutMapping("/affecterRoomToUser/{idRoom}/{userid}")
    public void affecterRoomToUser(@PathVariable("idRoom") long idRoom ,
                                   @PathVariable("userid") int userid) ;



}
