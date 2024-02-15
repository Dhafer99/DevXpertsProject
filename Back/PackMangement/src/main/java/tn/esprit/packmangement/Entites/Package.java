package tn.esprit.packmangement.Entites;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

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
    private boolean reserved;
    // supplier
    // company
    private float price ;
    @JsonIgnore
    @ManyToOne
    Room room;



}
