package com.example.authenticationservice.service;

import com.example.authenticationservice.Client.UserClient;
import com.example.authenticationservice.dto.ExhibitorDTO;
import com.example.authenticationservice.entity.Supplier;
import com.example.authenticationservice.entity.UserCredential;
import com.example.authenticationservice.repository.UserCredentialRepository;
import lombok.AllArgsConstructor;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.example.authenticationservice.entity.role;

import java.io.IOException;
import java.time.LocalDate;

import java.util.List;

import java.util.HashMap;
import java.util.Map;


@Service
@Slf4j
@AllArgsConstructor
public class AuthService {



    private final UserClient userClient;


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



    private Supplier mapToSupplier(UserCredential user, int userId) {
        Supplier supplier = new Supplier();
        supplier.setId(userId); // Set the same user ID in Microservice B
        supplier.setNom(user.getFirstname() + " " + user.getLastname());
        supplier.setNumeroTelephone(user.getPhoneNumber());
        // Set other attributes as needed
        return supplier;
    }
    private ExhibitorDTO mapToExhibitor(UserCredential user, int userId) {
        ExhibitorDTO exhibitorDTO = new ExhibitorDTO();
        exhibitorDTO.setId(userId); // Set the same user ID in Microservice B
        exhibitorDTO.setExhibitorName(user.getName());

        // Set other attributes as needed
        return exhibitorDTO;
    }

    public List<UserCredential> getAdmins() {
        return repository.findByRole(role.admin);
    }
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
            UserCredential savedUser = repository.save(credential);
            if(credential.getRole() == com.example.authenticationservice.entity.role.supplier) {
                Supplier supplier = mapToSupplier(credential, savedUser.getId());
                userClient.functionInMicroserviceB(supplier);
            }
            if(credential.getRole() == com.example.authenticationservice.entity.role.exhibitor) {
                ExhibitorDTO exhibitorDTO = mapToExhibitor(credential, savedUser.getId());
                userClient.AddingExhibitorFromAuthenticationService(exhibitorDTO);
            }

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