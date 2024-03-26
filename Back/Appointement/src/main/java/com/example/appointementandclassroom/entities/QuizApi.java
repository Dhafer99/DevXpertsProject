package com.example.appointementandclassroom.entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Set;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level=AccessLevel.PRIVATE)
public class QuizApi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    String title;
    String description;
    String image;
    boolean active;

    @OneToMany(cascade = CascadeType.ALL, mappedBy="quizapi")
    private Set<Historique> historiques;

    @OneToMany(cascade = CascadeType.ALL)
    private Set<Question> questions;

}
