package com.example.supplier.Repository;

import com.example.supplier.Entity.Event;
import com.example.supplier.Entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface ImageRepository extends JpaRepository<Image,Integer> {

    List<Image> findImagesByEventID(int eventId);

}
