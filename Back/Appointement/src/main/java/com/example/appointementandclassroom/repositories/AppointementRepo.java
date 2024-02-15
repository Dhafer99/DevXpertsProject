package com.example.appointementandclassroom.repositories;

import com.example.appointementandclassroom.entities.Appointement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointementRepo extends JpaRepository<Appointement, Integer> {
}
