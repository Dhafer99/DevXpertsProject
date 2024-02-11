package com.example.supplier.Repository;

import com.example.supplier.Entity.Booth;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoothRepository extends JpaRepository<Booth,Long> {
   List<Booth> findAllByExhibitorId(Long id);
}
