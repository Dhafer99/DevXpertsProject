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

    public ResponseEntity<Map<String, Object>> saveUser(UserCredential credential, String name , String email, role role , String password ,
                                                        String firstname, String lastname, String phoneNumber, MultipartFile cv) throws IOException {
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

}