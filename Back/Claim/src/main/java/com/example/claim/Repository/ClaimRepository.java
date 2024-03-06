package com.example.claim.Repository;

import com.example.claim.Entity.Claim;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClaimRepository extends JpaRepository<Claim,Long> {
    List<Claim> findByOrderByLevelAsc();
}