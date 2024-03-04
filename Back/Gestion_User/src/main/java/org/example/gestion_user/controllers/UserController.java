package org.example.gestion_user.controllers;


import org.example.gestion_user.models.User;
import org.example.gestion_user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RequiredArgsConstructor
@RestController
@RequestMapping("/auth")
public class UserController {

    private final UserService userService;

    //-----------------------------------*GET---METHODE*-----------------------------------\\

    @GetMapping(value = "/user")
    public ResponseEntity<List<User>> getAllUser() {
        return new ResponseEntity<>(userService.getAllUser(), HttpStatus.OK);
    }

    @GetMapping(value = "/user/{id}")

    public ResponseEntity<User> getUserById(@PathVariable("id") Long id) {
        return new ResponseEntity<>(userService.getUserById(id), HttpStatus.OK);
    }

    //-----------------------------------*POST---METHODE*-----------------------------------\\
    @PostMapping(value = "/user")

    public ResponseEntity<User> addUser(@RequestBody User user) {

        return new ResponseEntity<>(userService.addUser(user), HttpStatus.CREATED);
    }
    //-----------------------------------*PUT---METHODE*-----------------------------------\\
    @PutMapping(value = "/user")

    public ResponseEntity<User> updateUser(@RequestBody User user){

        return new ResponseEntity<>( userService.editUser(user),HttpStatus.OK);
    }
    //-----------------------------------*DELETE---METHODE*-----------------------------------\\
    @DeleteMapping(value = "/user/{id}")

    public ResponseEntity<Void> deleteUser(@PathVariable("id") Long id){
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


//2fa
@PutMapping(value = "/2fa")

public void active(Long id){

     userService.active(id);
}







}
