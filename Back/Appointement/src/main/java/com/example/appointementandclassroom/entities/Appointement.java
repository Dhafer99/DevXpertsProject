package com.example.appointementandclassroom.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Appointement {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int idAppointement;
    private Date startDate ;
    private Date endDate ;
    private String subject ;

    private int classroomFK;
    @JsonIgnore
    @ManyToOne
    Classroom classroom;


}
