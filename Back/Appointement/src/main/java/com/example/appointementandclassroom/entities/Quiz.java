package com.example.appointementandclassroom.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Quiz {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private  int id ;
    private  String title ;
    @ManyToMany
    private List<Question> questions;


}
