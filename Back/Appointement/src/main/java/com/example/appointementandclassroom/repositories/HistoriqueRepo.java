package com.example.appointementandclassroom.repositories;


import com.example.appointementandclassroom.entities.Historique;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HistoriqueRepo extends JpaRepository<Historique, Long> {
}
