package tn.esprit.auction.Entites;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idRoom")
    private Long idRoom;
    private Long codeRoom;
    //CompanyList
    private Date dateDebut;
    private Date DateFin ;
    private Float EncherePrice ;
    private Boolean status ;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "room")
    private Set<Package> packages;
}
