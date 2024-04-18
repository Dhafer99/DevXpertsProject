package com.example.authenticationservice.service;

import com.example.authenticationservice.entity.UserCredential;
import com.example.authenticationservice.repository.UserCredentialRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.example.authenticationservice.entity.role;

import java.io.IOException;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

import java.util.List;

@Service
@AllArgsConstructor
public class AuthService {


    private UserCredentialRepository repository;


    private PasswordEncoder passwordEncoder;

    private JwtService jwtService;



    /*public String saveUser(UserCredential credential) {
        credential.setPassword(passwordEncoder.encode(credential.getPassword()));
        repository.save(credential);
        return "user added to the system";
        private String firstname;
    private String lastname;
    private String phoneNumber;
    private LocalDate creationDate;
    }*/

    public ResponseEntity<Map<String, Object>>  saveUser(UserCredential credential, String name , String email, role role , String password ,
                                                        String firstname, String lastname, String phoneNumber, MultipartFile cv , String imageUrl,String imageId) throws IOException {
        if(repository.findByEmail(email).isPresent()){
            Map<String, Object> response = new HashMap<>();
            response.put("message", "L'utilisateur existe déjà");
            return ResponseEntity.status(HttpStatus.OK).body(response);
        }
        else{
            credential.setName(name);
            credential.setEmail(email);
            credential.setRole(role);
            credential.setPassword(passwordEncoder.encode(password));
            credential.setFirstname(firstname);
            credential.setLastname(lastname);
            credential.setPhoneNumber(phoneNumber);
            credential.setCreationDate(LocalDate.now());
            credential.setImageUrl(imageUrl);
            credential.setImageId(imageId);
            if (cv != null && !cv.isEmpty()) {
                credential.setCv(cv.getBytes());
            }
            repository.save(credential);
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Opération réussie");
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        }

    }

    public String generateToken(String username) {
        return jwtService.generateToken(username);
    }

    public void validateToken(String token) {
        jwtService.validateToken(token);
    }

    public Integer getUserIdByEmail(String email){
        return repository.findByEmail(email).get().getId();
    }

    public UserCredential getUserById(int id){
        return repository.findById(id).get();
    }
/************************* added by eya /
 *
 */

public void AffecterRoomToUser(long roomId,int id,int newPoints) {
    UserCredential user =  repository.findById(id).orElse(null);
    user.setRoomid(roomId);
  //  int oldpoints = user.getPoints();

    user.setPoints(newPoints);
    repository.save(user);

}

    public long getRoomUser(int id) {
        UserCredential user =  repository.findById(id).orElse(null);
        return user.getRoomid() ;

    }

    public UserCredential getUserById(int id) {
        UserCredential user =  repository.findById(id).orElse(null);
        return user ;

    }

    public UserCredential UpdateUserPoints (int id , int points) {
        UserCredential user =  repository.findById(id).orElse(null);

        if(user.getPoints()>0){
            if(points ==50 )
        {
            user.setPoints(user.getPoints() -points);
            repository.save((user));
        }
            if(points ==150 )
            {
                user.setPoints(user.getPoints() -points);
                repository.save((user));
            }
            if(points ==100 )
            {
                user.setPoints(user.getPoints()  -points);
                repository.save((user));
            }}


        return user ;

    }

public void updateUserPointsWheneEnteringAuction(int id , int points){
    UserCredential user =  repository.findById(id).orElse(null);
    user.setPoints(points);
    repository.save(user);

}

    public void RemoveUserRoom(int id){
        UserCredential user =  repository.findById(id).orElse(null);
        user.setRoomid(0);
        repository.save(user);

    }
    public UserCredential RembourssementPoints ( int iduser , int points)
    {
        UserCredential user = repository.findById(iduser).orElse(null);
        user.setPoints(points);
        repository.save(user);
        return  user;
    }


    public List<UserCredential> getUsersByIdRoom (long roomid )
    {
      return  repository.findAllByRoomid(roomid);
    }
}