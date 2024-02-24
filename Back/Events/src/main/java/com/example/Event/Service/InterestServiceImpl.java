package com.example.Event.Service;

import com.example.Event.Entity.Event;
import com.example.Event.Entity.InterestedBy;
import com.example.Event.Repository.EventRepository;
import com.example.Event.Repository.InterestByRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class InterestServiceImpl implements InterestService{

    private final InterestByRepository InterestRepository;
    private final EventRepository eventRepository;
    @Override
    public void save(int event,int user) {
        InterestedBy interested=new InterestedBy(0,event,user,new Date());
        Event event1=eventRepository.findById(event).get();
        event1.setInterestedCounter(event1.getInterestedCounter()+1);
        event1.getInterestedBys().add(interested);
        eventRepository.save(event1);

    }



    @Override
    public void remove(InterestedBy interested){

        Event event1=eventRepository.findById(interested.getEventID()).get();
        event1.setInterestedCounter(event1.getInterestedCounter()-1);
        event1.getInterestedBys().remove(interested);
        InterestRepository.delete(interested);
        eventRepository.save(event1);

    }

    @Override
    public List<InterestedBy> findByUserID(int user) {
        return InterestRepository.findInterestedBIESByUserID(user);
    }

    @Override
    public void remove(int event,int userId){

            InterestedBy interested=InterestRepository.findInterestedByEventIDAndUserID(event,userId);
        Event event1=eventRepository.findById(interested.getEventID()).get();
        event1.setInterestedCounter(event1.getInterestedCounter()-1);
        event1.getInterestedBys().remove(interested);
        InterestRepository.delete(interested);
        eventRepository.save(event1);
    }
    public List<InterestedBy> findAllInterests(){
        return InterestRepository.findAll();
    }



}
