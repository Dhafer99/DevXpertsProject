package com.example.appointementandclassroom.entities;

import lombok.*;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level=AccessLevel.PRIVATE)
public class ApiOpenquizzdb {

    String langue;
    String categorie;
    String theme;
    String difficulte;
    String question;
    String reponse_correcte;
    String[] autres_choix;
    String anecdote;
    String wikipedia;




}
