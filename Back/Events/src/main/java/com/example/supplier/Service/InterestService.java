package com.example.supplier.Service;

import com.example.supplier.Entity.Event;
import com.example.supplier.Entity.InterestedBy;

import java.util.List;

public interface InterestService {

public void save(long event,long userId);
public void remove(long event,long userId);
    public void remove(InterestedBy interested);
    public List<InterestedBy> findByUserID(long user);
    public List<InterestedBy> findAllInterests();

}
