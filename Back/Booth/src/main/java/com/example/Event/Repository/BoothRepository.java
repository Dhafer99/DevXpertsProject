package com.example.Event.Repository;

import com.example.Event.Entity.Booth;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoothRepository extends JpaRepository<Booth,Long> {
   List<Booth> findAllByExhibitorId(Long id);
}
