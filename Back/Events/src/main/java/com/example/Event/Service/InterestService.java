package com.example.Event.Service;

import com.example.Event.Entity.InterestedBy;

import java.util.List;

public interface InterestService {

public void save(int event,int userId);
public void remove(int event,int userId);
    public void remove(InterestedBy interested);
    public List<InterestedBy> findByUserID(int user);
    public List<InterestedBy> findAllInterests();

}
