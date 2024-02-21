package com.example.supplier.Service;

import com.example.supplier.Entity.Event;

import java.util.List;

public interface EventService {

public Event save(Event event);
public void update(Event event,int UserId);
    public List<Event> findAllEvents();


}
