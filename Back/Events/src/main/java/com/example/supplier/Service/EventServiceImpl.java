package com.example.supplier.Service;

import com.example.supplier.Entity.Event;
import com.example.supplier.Repository.EventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class EventServiceImpl implements EventService{

    private final EventRepository eventRepository;

    @Override
    public Event save(Event event) {
        event.setCreated_at(new Date());
        event.setLastModified_at(new Date());
        event.setLastModified_by(event.getCreated_by());
        event.setViewsCounter(0);
        event.setInterestedCounter(0);
        event.setRating(0);
        eventRepository.save(event);
        return event;
    }

    @Override
    public void update(Event event,long UserId) {

        event.setLastModified_at(new Date());
        event.setLastModified_by(UserId);

        eventRepository.save(event);
    }

    public List<Event> findAllEvents(){
        return eventRepository.findAll();
    }



}
