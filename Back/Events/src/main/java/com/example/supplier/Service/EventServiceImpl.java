package com.example.supplier.Service;

import com.example.supplier.Entity.Event;
import com.example.supplier.Repository.EventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EventServiceImpl implements EventService{

    private final EventRepository eventRepository;

    @Override
    public void save(Event booth) {
        eventRepository.save(booth);
    }
    public List<Event> findAllEvents(){
        return eventRepository.findAll();
    }

}
