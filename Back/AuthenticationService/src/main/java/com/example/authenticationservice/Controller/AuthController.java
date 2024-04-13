package com.example.authenticationservice.Controller;

import com.example.authenticationservice.dto.AuthRequest;
import com.example.authenticationservice.entity.UserCredential;
import com.example.authenticationservice.service.AuthService;
import com.example.authenticationservice.entity.role;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;

@RestController
@RequestMapping("/auth")
@Slf4j

public class AuthController {
    @Autowired
    private AuthService service;

    @Autowired
    private AuthenticationManager authenticationManager;

    /*@PostMapping("/register")
    public String addNewUser(@RequestBody UserCredential user) {
        return service.saveUser(user);
    }*/

    @PostMapping("/register")
    public ResponseEntity<?> addNewUser(@RequestParam("name") String name,
                                      @RequestParam("email")String email,
                                      @RequestParam("password") String password,
                                      @RequestParam("role")role role,
                                      @RequestParam("cv") /*@Size(max = 10 * 1024 * 1024)*/ MultipartFile cv,
                                        @RequestParam("firstname") String firstname,
                                        @RequestParam("lastname") String lastname,
                                        @RequestParam("phonenumber") String phoneNumber) throws IOException {
        UserCredential user = new UserCredential();
        UserCredential savedUser =  service.saveUser(user, name , email, role , password , firstname, lastname, phoneNumber, cv);
        return ResponseEntity.ok(savedUser);
    }

    @PostMapping("/token")
    public String getToken(@RequestBody AuthRequest authRequest) {
        log.info("clicked token");
        Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));
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
    @PostMapping("/currentUserId/{email}")
    public Integer getUserByEmail(@PathVariable("email") String email) {
       return service.getUserIdByEmail(email);
    }

    @GetMapping("/currentUser/{id}")
    public UserCredential getUser(@PathVariable("id") int id) {
        return service.getUserById(id);
    }

   // @GetMapping("/CurrentUser/{email}")
   // public UserCredential getCurrentUser(@PathVariable("email") String email) {

 //     return service.finduserbyemail(email);
  //  }
}