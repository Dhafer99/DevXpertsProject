package com.example.supplier.Service;

import com.example.supplier.Entity.Event;
import com.example.supplier.Entity.InterestedBy;
import com.example.supplier.Entity.Rating;
import com.example.supplier.Repository.EventRepository;
import com.example.supplier.Repository.InterestByRepository;
import com.example.supplier.Repository.RatingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RatingServiceImpl implements RatingService{

    private final RatingRepository ratingRepository;
    private final EventRepository eventRepository;

    @Override
    public void save(Rating rating) {
        Event event1=eventRepository.findById(rating.getEventID()).get();

        event1.getRatings().add(rating);

        eventRepository.save(event1);
        updateRatingForEvent(event1.getId());
    }



    @Override
    public void remove(Rating rating){


        ratingRepository.delete(rating);
        updateRatingForEvent(rating.getEventID());
    }

    @Override
    public List<Rating> findUserRatings(long user) {
        return ratingRepository.findByUserID(user);
    }
    @Override
    public List<Rating> findEventRatings(long event) {
        return ratingRepository.findByEventID(event);
    }

    @Override
    public void remove(long event,long userId){

            Rating rating=ratingRepository.findRatingByEventIDAndUserID(event,userId);
        ratingRepository.delete(rating);
        updateRatingForEvent(rating.getEventID());
    }
    public List<Rating> findAllRatings(){
        return ratingRepository.findAll();
    }

    @Override
    public void updateRating(Rating rating) {
        Rating rating1=ratingRepository.findById(rating.getId()).get();
        rating1.setComment(rating.getComment());
        ratingRepository.save(rating1);
    }

    @Override
    public void updateRatingForEvent(long event) {
        Event event1=eventRepository.findById(event).get();
        int size=event1.getRatings().size();
        double somme=event1.getRatings().stream().mapToDouble(Rating::getRating).sum();
      if (size ==0)
      {
          event1.setRating(0);
      }else
      {
          event1.setRating(somme/ (double) size);
      }

        eventRepository.save(event1);
    }


}
