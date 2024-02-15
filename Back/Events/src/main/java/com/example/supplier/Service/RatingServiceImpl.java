package com.example.supplier.Service;

import com.example.supplier.Entity.InterestedBy;
import com.example.supplier.Entity.Rating;
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

    @Override
    public void save(Rating rating) {

        ratingRepository.save(rating);
    }



    @Override
    public void remove(Rating rating){


        ratingRepository.delete(rating);
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
    }
    public List<InterestedBy> findAllInterests(){
        return InterestRepository.findAll();
    }



}
