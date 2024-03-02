package com.example.claim.Service;

import com.example.claim.Entity.Claim;
import com.example.claim.Repository.ClaimRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ClaimServiceImpl implements ClaimService{
    private final ClaimRepository claimRepo;
    @Override
    public void saveClaim(Claim claim){claimRepo.save(claim);}

    @Override
    public Claim addClaim(Claim claim) {

        //Setting the level of disappointement
        String Description = claim.getDescription();
        if (Description.toLowerCase().indexOf("angry",0) > 0 || Description.toLowerCase().indexOf("worst",0) > 0 || Description.toLowerCase().indexOf("urgent",0) > 0)
        { claim.setLevel(1); }
        else if (Description.toLowerCase().indexOf("disappointed",0) > 0 || Description.toLowerCase().indexOf("medium",0) > 0 )
        { claim.setLevel(2); }
        else
        { claim.setLevel(3); }

        // Setting the status to Not Treated by default
        claim.setStatus("pending");



        // setting the date
        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        Date date = new Date();
        claim.setDate(formatter.format(date)) ;


        return claimRepo.save(claim);
    }


    @Override
    public List<Claim> GetClaimsByLevelorder() {
        return claimRepo.findByOrderByLevelAsc() ;
    }
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
