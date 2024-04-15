package com.example.exhibitor.Service;

import com.example.exhibitor.Entity.Supplier;
import com.example.exhibitor.Entity.SupplierRequest;
import com.example.exhibitor.Entity.SupplyRequestOffer;
import com.example.exhibitor.Repository.SupplierRepository;
import com.example.exhibitor.Repository.SupplierRequestRepository;
import com.example.exhibitor.Repository.SupplyRequestOfferRepository;
import com.example.exhibitor.dto.SupplierListDTO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class SupplyRequestOfferImpl implements SupplyRequestOfferService {

    SupplyRequestOfferRepository supplyRequestOfferRepository ;
    SupplierRequestRepository supplierRequestRepository ;
    SupplierRepository supplierRepository ;

    @Override
    public SupplyRequestOffer addSupplyOffer(SupplyRequestOffer supplyRequestOffer, Long supplierId, Long supplyRequestId) throws Exception {

       // Supplier supplier = supplierRepository.findById(supplierId).orElseThrow(() -> new Exception("supplier not found"));
       // SupplierRequest supplierRequest = supplierRequestRepository.findById(supplyRequestId).get();

        supplyRequestOffer.setSupplierRequestFK(supplyRequestId);
        supplyRequestOffer.setSupplierFk(supplierId);

         return supplyRequestOfferRepository.save(supplyRequestOffer);
    }

    @Override
    public List<SupplierListDTO> supplyRequestOffers(Long supplyRequestId) {
       // SupplierRequest supplierRequest = supplierRequestRepository.findById(supplyRequestId).get();
       List<SupplyRequestOffer> supplierRequestOffers = supplyRequestOfferRepository.findBySupplierRequestFK(supplyRequestId);

       List<SupplierListDTO> supplierListDTOS = new ArrayList<>();

        for (SupplyRequestOffer supp: supplierRequestOffers
             ) {
            SupplierListDTO supplierOfferInfo = new SupplierListDTO();
            supplierOfferInfo.setId(supp.getId());
            supplierOfferInfo.setPrice(supp.getPrice());
            supplierOfferInfo.setDescription(supp.getDescription());
            supplierOfferInfo.setSupplier( supplierRepository.findSupplierById(supp.getSupplierFk()));
            supplierListDTOS.add(supplierOfferInfo);
        }
       return supplierListDTOS ;
    }
}
