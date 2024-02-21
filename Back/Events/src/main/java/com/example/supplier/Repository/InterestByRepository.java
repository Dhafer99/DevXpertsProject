package com.example.supplier.Repository;

import com.example.supplier.Entity.Event;
import com.example.supplier.Entity.InterestedBy;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InterestByRepository extends JpaRepository<InterestedBy,Integer> {


    InterestedBy findInterestedByEventIDAndUserID(int event,int userid);

    List<InterestedBy> findInterestedBIESByUserID(int user);
}
