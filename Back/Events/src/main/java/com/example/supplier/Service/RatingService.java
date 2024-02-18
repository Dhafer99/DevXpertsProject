package com.example.supplier.Service;

import com.example.supplier.Entity.InterestedBy;
import com.example.supplier.Entity.Rating;

import java.util.List;

public interface RatingService {

public void save(Rating rating);
public void remove(long event,long userId);
    public void remove(Rating rating);
    public List<Rating> findUserRatings(long user);
    public List<Rating> findEventRatings(long event);
    public List<Rating> findAllRatings();

    public void updateRating(Rating rating);
    public void updateRatingForEvent(long event);
}
