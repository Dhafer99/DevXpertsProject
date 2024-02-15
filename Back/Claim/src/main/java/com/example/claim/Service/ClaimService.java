package com.example.claim.Service;

import com.example.claim.Entity.Claim;

import java.util.List;

public interface ClaimService {
    public void saveClaim(Claim claim);
    public List<Claim> findAllClaims();
    public Claim retrieveClaim(Long claimId);
    public void removeClaim(Long claimId);
    public Claim modifyClaim(Claim claim);
}
