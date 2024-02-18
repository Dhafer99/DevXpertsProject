package com.example.supplier.Repository;

import com.example.supplier.Entity.Event;
import com.example.supplier.Entity.InterestedBy;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InterestByRepository extends JpaRepository<InterestedBy,Long> {


    InterestedBy findInterestedByEventIDAndUserID(long event,long userid);

    List<InterestedBy> findInterestedBIESByUserID(long user);
}
