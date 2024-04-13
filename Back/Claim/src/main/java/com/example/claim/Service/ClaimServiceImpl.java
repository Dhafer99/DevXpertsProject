package com.example.claim.Service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.example.claim.Entity.Claim;
import com.example.claim.Entity.ClaimType;
import com.example.claim.Repository.ClaimRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ClaimServiceImpl implements ClaimService {

    private static final Logger logger = LoggerFactory.getLogger(ClaimServiceImpl.class);

    @Autowired
    private ClaimRepository claimRepo;

    private final JavaMailSender javaMailSender;

    @Autowired
    public ClaimServiceImpl(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    @Override
    public void saveClaim(Claim claim) {
        claimRepo.save(claim);
    }

    @Override
    public Claim addClaim(Claim claim) {
        // Setting the level of disappointment based on the description
        String description = claim.getDescription().toLowerCase();
        if (description.contains("angry") || description.contains("worst") || description.contains("urgent")) {
            claim.setLevel(1);
        } else if (description.contains("disappointed") || description.contains("medium")) {
            claim.setLevel(2);
        } else {
            claim.setLevel(3);
        }
        // Setting the status to "pending" by default
        claim.setStatus("pending");
        // Setting the current date
        claim.setDate(new SimpleDateFormat("dd/MM/yyyy HH:mm:ss").format(new Date()));
        // Save the claim
        return claimRepo.save(claim);
    }

    @Override
    public List<Claim> findAllClaims() {
        return claimRepo.findAll();
    }

    @Override
    public Claim retrieveClaim(Long claimId) {
        return claimRepo.findById(claimId).orElse(null);
    }

    @Override
    public void removeClaim(Long claimId) {
        claimRepo.deleteById(claimId);
    }

    @Override
    public Claim modifyClaim(Claim claim) {
        return claimRepo.save(claim);
    }

    @Override
    public Claim FindClaim(Long id) {
        return claimRepo.findById(id).orElse(null);
    }

    @Override
    public List<Claim> FindBySubject(ClaimType subject) {
        return claimRepo.findBysubject(subject);
    }

    @Override
    public List<Claim> FindByStatus(String status) {
        return claimRepo.findBystatus(status);
    }

    @Override
    public Optional<Claim> FindByDate(String date) {
        return claimRepo.findByDate(date);
    }

    public List<Claim> GetClaimsByLevelorder() {
        return claimRepo.getClaimsByLevelorder();
    }

    public List<Claim> GetClaimsByLevelorder2() {
        return claimRepo.getClaimsByLevelorder2();
    }

    @Override
    public ResponseEntity<HttpStatus> updateClaimDecision(long claimId) {
        // Retrieve the claim from the database based on the claimId
        Claim claim = claimRepo.findById(claimId).orElse(null);
        if (claim == null) {
            return ResponseEntity.notFound().build();
        }
        // Update claim decision and status
        updateClaimDecisionAndStatus(claim);
        // Send email
        try {
            sendEmail(claim.getDecision());
            logger.info("Email sent successfully for claim ID: {}", claimId);
            return ResponseEntity.ok().build();
        } catch (MailException e) {
            logger.error("Failed to send email for claim ID: {}", claimId, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    private void updateClaimDecisionAndStatus(Claim claim) {
        // Your existing code
    }

    public void sendEmail(String text) throws MailException {
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setTo("salma.saidi@esprit.tn");
        simpleMailMessage.setSubject("Claim Response");
        simpleMailMessage.setText(text);
        javaMailSender.send(simpleMailMessage);
    }
}
