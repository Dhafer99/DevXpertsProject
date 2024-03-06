package tn.esprit.auction.Entites;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Pack {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idPack")
    private Long idPack;
    @Enumerated(EnumType.STRING)
    private TypePack typePack ;
    private int quantity ;
    private String description ;
    private boolean status ;
    private boolean reserved ;
    private Date creationDate ;

    private Long company;
    // supplier
    // company
    private float price ;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIgnore
    private Room room;


    public Pack(TypePack typePack, int i, double v) {
    }
}