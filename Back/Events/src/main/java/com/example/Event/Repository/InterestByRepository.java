package com.example.Event.Repository;

import com.example.Event.Entity.InterestedBy;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InterestByRepository extends JpaRepository<InterestedBy,Integer> {


    InterestedBy findInterestedByEventIDAndUserID(int event,int userid);

    List<InterestedBy> findInterestedBIESByUserID(int user);
}
