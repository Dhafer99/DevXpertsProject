package com.example.supplier.Entity;


import jakarta.persistence.*;
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
public class InterestedBy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id ;
    private long UserID;
    private long EventID;
    private Date timestamp;




}
