package com.example.authenticationservice.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserCredential {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String password;
    private String email ;
    private String firstname;
    private String lastname;
    private String phoneNumber;
    private LocalDate creationDate;
    @Enumerated(EnumType.STRING)
    private role role;
    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] cv;
}