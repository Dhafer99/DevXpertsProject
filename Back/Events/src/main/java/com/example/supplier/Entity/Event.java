package com.example.supplier.Entity;


import jakarta.persistence.*;
import jakarta.ws.rs.DefaultValue;
import lombok.*;

import java.util.Date;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table
@Builder
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id ;

    private EventType Type;
    private String Name;
    // event will be at
    private Date Date;
    // the event created in database
    private Date Created_at;
    // reference USER
    private long Created_by;
    private String Note;
    // a number
    private long ViewsCounter;
    // a number
    private long InterestedCounter;
    // active is before and during the event date ------ will check it
    private boolean Active;

    private Date DisableDate;
    //  a rating table to calculate it
    private double Rating;
    // cant remove this , it is a checkbox that the event creator MUST select or NOT
    @Column(nullable = false, columnDefinition = "boolean default false")
    @DefaultValue("false")
    private boolean Collaboration;
    private Date LastModified_at;
    private long LastModified_by;
    private String DepositNotes;



    /// One to Many    UNIDIRECTIONNEL -----> i dont have accss to the USERs
    @OneToMany(cascade = CascadeType.ALL)
    private Set<InterestedBy> InterestedBys;

    /// One to Many    UNIDIRECTIONNEL   -- ----  association de collaboration
    // les personne qui peut voir les stats du event/admin
    @OneToMany(cascade = CascadeType.ALL)
    private Set<Collaboration> Collaborations;

    /// One to Many    UNIDIRECTIONNEL
    // la liste des commentaire / ratings
    @OneToMany(cascade = CascadeType.ALL)
    private Set<Rating> Ratings;


}
