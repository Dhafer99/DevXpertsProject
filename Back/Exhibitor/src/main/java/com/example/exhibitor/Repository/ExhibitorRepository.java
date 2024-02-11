package com.example.exhibitor.Repository;

import com.example.exhibitor.Entity.Exhibitor;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ExhibitorRepository extends JpaRepository<Exhibitor,Long> {
}
