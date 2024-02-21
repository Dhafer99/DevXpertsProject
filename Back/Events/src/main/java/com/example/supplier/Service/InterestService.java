package com.example.supplier.Service;

import com.example.supplier.Entity.Event;
import com.example.supplier.Entity.InterestedBy;

import java.util.List;

public interface InterestService {

public void save(int event,int userId);
public void remove(int event,int userId);
    public void remove(InterestedBy interested);
    public List<InterestedBy> findByUserID(int user);
    public List<InterestedBy> findAllInterests();

}
