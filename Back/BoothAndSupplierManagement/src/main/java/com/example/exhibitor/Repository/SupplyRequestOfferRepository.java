package com.example.exhibitor.Repository;

import com.example.exhibitor.Entity.SupplierRequest;
import com.example.exhibitor.Entity.SupplyRequestOffer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SupplyRequestOfferRepository extends JpaRepository<SupplyRequestOffer,Long> {

    List<SupplyRequestOffer> findBySupplierRequest(SupplierRequest supplierRequest);
}
