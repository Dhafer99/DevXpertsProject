package com.example.authenticationservice.service;

import com.example.authenticationservice.entity.UserCredential;
import com.example.authenticationservice.repository.UserCredentialRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthService {


    private UserCredentialRepository repository;


    private PasswordEncoder passwordEncoder;

    private JwtService jwtService;

    public void AffecterRoomToUser(long roomId,int id,int newPoints) {
      UserCredential user =  repository.findById(id).orElse(null);
      user.setRoomid(roomId);
      int oldpoints = user.getPoints();
      user.setPoints(oldpoints+newPoints);
      repository.save(user);

    }

    public long getRoomUser(int id) {
        UserCredential user =  repository.findById(id).orElse(null);
       return user.getRoomid() ;

    }

    public String saveUser(UserCredential credential) {
        credential.setPassword(passwordEncoder.encode(credential.getPassword()));
        repository.save(credential);
        return "user added to the system";
    }

    public String generateToken(String username) {
        return jwtService.generateToken(username);
    }

    public void validateToken(String token) {
        jwtService.validateToken(token);
    }

    public Integer getUserId(String name){
        return repository.findByName(name).get().getId();
    }

}