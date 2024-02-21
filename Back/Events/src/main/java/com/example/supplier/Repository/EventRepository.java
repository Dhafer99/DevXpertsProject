package com.example.supplier.Repository;

import com.example.supplier.Entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EventRepository extends JpaRepository<Event,Integer> {



}
