package tn.esprit.auction.Entites;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Enchere {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idenchere")
    private Long idenchere;

    private Long idcompany;

    private float pricing;

    private  Boolean status ;
    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIgnore
    private Room room;


}
