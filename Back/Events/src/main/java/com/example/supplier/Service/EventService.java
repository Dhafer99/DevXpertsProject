package com.example.supplier.Service;

import com.example.supplier.Entity.Event;

import java.util.List;

public interface EventService {

public void save(Event event);
    public List<Event> findAllEvents();


}
