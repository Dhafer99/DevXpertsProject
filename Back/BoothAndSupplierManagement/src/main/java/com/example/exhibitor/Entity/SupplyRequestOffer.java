package com.example.exhibitor.Entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table
@Builder
public class SupplyRequestOffer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String description ;

    private Long price ;

    @ManyToOne
    private SupplierRequest supplierRequest ;

    @ManyToOne
    private Supplier supplier ;




}
