package tn.esprit.auction.Entites;

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
public class Package {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idPack")
    private Long idPack;
    @Enumerated(EnumType.STRING)
    private TypePack typePack ;
    private int quantity ;
    private String description ;
    private boolean status ;
    // supplier
    // company
    private float price ;
    @ManyToOne
    Room room;


}
