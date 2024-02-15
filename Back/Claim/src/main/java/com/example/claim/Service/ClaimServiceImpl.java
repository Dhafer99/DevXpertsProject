package com.example.claim.Service;

import com.example.claim.Entity.Claim;
import com.example.claim.Repository.ClaimRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ClaimServiceImpl implements ClaimService{
    private final ClaimRepository claimRepo;
    @Override
    public void saveClaim(Claim claim){claimRepo.save(claim);}
   @Override
    public List<Claim> findAllClaims(){return claimRepo.findAll();}

    @Override
    public Claim retrieveClaim(Long claimId) {
        return claimRepo.findById(claimId).get();
    }

    @Override
    public void removeClaim(Long claimId) {
        claimRepo.deleteById(claimId);
    }
    @Override
    public Claim modifyClaim(Claim claim) {
        return claimRepo.save(claim);
    }
}
