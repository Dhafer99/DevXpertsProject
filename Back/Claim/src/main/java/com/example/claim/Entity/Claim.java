package com.example.claim.Entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table
@Builder
public class Claim {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idClaim ;
    private String decision;
    private String date;
    private String status;
    private String subject;
    private String description;
    private int level;

}
