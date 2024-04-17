package com.example.authenticationservice.Controller;

import com.example.authenticationservice.dto.AuthRequest;
import com.example.authenticationservice.entity.UserCredential;
import com.example.authenticationservice.service.AuthService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/auth")
@Slf4j

public class AuthController {
    @Autowired
    private AuthService service;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/register")
    public String addNewUser(@RequestBody UserCredential user) {
        return service.saveUser(user);
    }

    @PostMapping("/token")
    public String getToken(@RequestBody AuthRequest authRequest) {
        log.info("clicked token");
        Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        if (authenticate.isAuthenticated()) {
            return service.generateToken(authRequest.getUsername());
        } else {
            throw new RuntimeException("invalid access");
        }
    }

    @GetMapping("/validate")
    public String validateToken(@RequestParam("token") String token) {
        service.validateToken(token);
        return "Token is valid";
    }
    @PostMapping("/currentUserId/{name}")
    public Integer getUserId(@PathVariable("name") String username) {
       return service.getUserId(username);

    }
    /************************* adds from eya  */

    @PutMapping("/affecterRoomToUser/{idRoom}/{userid}/{newPoints}")
    public void affecterRoomToUser(@PathVariable("idRoom") long idRoom ,
                                   @PathVariable("userid") int userid,
                                   @PathVariable("newPoints") int newPoints) {
         service.AffecterRoomToUser(idRoom,userid,newPoints);

    }
    @GetMapping("/getRoomUser/{userid}")
    public long getRoomUser(@PathVariable("userid") int userid) {
        return service.getRoomUser(userid);
    }


    @GetMapping("/getUserById/{userid}")
    public UserCredential getUserById(@PathVariable("userid") int userid) {
        return service.getUserById(userid);
    }

    @PutMapping("/UpdateUserPoints/{userid}/{points}")
    public UserCredential UpdateUserPoints(
            @PathVariable("userid") int userid,@PathVariable("points") int points) {


        return service.UpdateUserPoints(userid,points);
    }

    @PutMapping("/updateUserPointsWheneEnteringAuction/{userid}/{points}")
    public void updateUserPointsWheneEnteringAuction(
            @PathVariable("userid") int userid,@PathVariable("points") int points) {


         service.updateUserPointsWheneEnteringAuction(userid,points);
    }
    @PutMapping("/RemoveUserRoom/{userid}")
    public void RemoveUserRoom(
            @PathVariable("userid") int userid) {


        service.RemoveUserRoom(userid);
    }


    @PutMapping("/RembourssementPoints/{userid}/{points}")
    public UserCredential RembourssementPoints(@PathVariable("userid") int userid,@PathVariable("points") int points) {


        return service.RembourssementPoints(userid,points);
    }

    @GetMapping("/getUsersByIdRoom/{roomId}")
    public List<UserCredential> getUsersByIdRoom(@PathVariable("roomId") int roomId) {

        return service.getUsersByIdRoom(roomId);
    }


    // @GetMapping("/CurrentUser/{email}")
   // public UserCredential getCurrentUser(@PathVariable("email") String email) {

 //     return service.finduserbyemail(email);
  //  }
}