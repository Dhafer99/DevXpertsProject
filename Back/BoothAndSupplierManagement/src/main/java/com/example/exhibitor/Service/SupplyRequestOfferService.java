package com.example.exhibitor.Service;

import com.example.exhibitor.Entity.SupplierRequest;
import com.example.exhibitor.Entity.SupplyRequestOffer;

import java.util.List;

public interface SupplyRequestOfferService {

    public SupplyRequestOffer addSupplyOffer(SupplyRequestOffer supplyRequestOffer,Long supplierId,Long supplyRequestId);
    List<SupplyRequestOffer> supplyRequestOffers(Long supplyRequestId);
}
