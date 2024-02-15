package com.example.supplier.Repository;

import com.example.supplier.Entity.InterestedBy;
import com.example.supplier.Entity.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RatingRepository extends JpaRepository<Rating  ,Long> {

    List<Rating> findByUserID(long user);
    Rating findRatingByEventIDAndUserID(long event,long user);


    List<Rating> findByEventID(long event);

}
