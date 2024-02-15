package com.offer.offer.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table
@Builder
public class Offer implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id ;
    private String description;
    private Date lastDateApplication;
    private int nbrCandidature;
    private String file;
    //@ManyToOne()
    //private Exibitor exibitor;
}
