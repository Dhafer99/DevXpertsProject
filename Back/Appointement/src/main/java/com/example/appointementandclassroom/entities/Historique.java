package com.example.appointementandclassroom.entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level=AccessLevel.PRIVATE)
public class Historique {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    int score;
    @Temporal(TemporalType.DATE)
    Date date;


    String user;

    @ManyToOne
    QuizApi quizapi;

}
