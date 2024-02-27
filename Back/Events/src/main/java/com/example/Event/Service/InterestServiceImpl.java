package com.example.Event.Service;

import com.example.Event.Entity.Event;
import com.example.Event.Entity.Interested;
import com.example.Event.Repository.EventRepository;
import com.example.Event.Repository.InterestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class InterestServiceImpl implements InterestService{

    private final InterestRepository InterestRepository;
    private final EventRepository eventRepository;
    @Override
    public Interested save(int event,int user) {
        Interested interested=new Interested(0,user,event,new Date());
        System.out.println("Called");
        if (InterestRepository.findInterestedByEventIDAndUserID(event,user)==null)
        {
            InterestRepository.save(interested);
            Event event1=eventRepository.findById(event).get();
            event1.setInterestedCounter(event1.getInterestedCounter()+1);
            event1.getInteresteds().add(interested);
            eventRepository.save(event1);
            return interested;
        }

    return null;
    }



    @Override
    public Event remove(int id){
    Interested interested=InterestRepository.findById(id).get();
        Event event1=eventRepository.findById(interested.getEventID()).get();
        event1.setInterestedCounter(event1.getInterestedCounter()-1);
        event1.getInteresteds().remove(interested);
        InterestRepository.delete(interested);
        eventRepository.save(event1);
        return event1;
    }

    @Override
    public List<Interested> findByUserID(int user) {
        return InterestRepository.findInterestedBIESByUserID(user);
    }


    public List<Interested> findAllInterests(){
        return InterestRepository.findAll();
    }



}
