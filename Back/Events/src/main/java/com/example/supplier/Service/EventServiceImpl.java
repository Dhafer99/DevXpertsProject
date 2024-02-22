package com.example.supplier.Service;

import com.example.supplier.Entity.Event;
import com.example.supplier.Entity.Image;
import com.example.supplier.Repository.EventRepository;
import com.example.supplier.Repository.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class EventServiceImpl implements EventService{

    private final EventRepository eventRepository;
    private final ImageRepository imageRepository;
    @Override
    public Event save(Event event) {
        event.setCreated_at(new Date());
        event.setLastModified_at(new Date());
        event.setLastModified_by(event.getCreated_by());
        event.setViewsCounter(0);
        event.setInterestedCounter(0);
        event.setRating(0);
        Set<Image> list=event.getImages();
        event.setImages(null);

        eventRepository.save(event);
     //   event.getImages().forEach(a->a.even);
        saveimages(list,event);
        return event;
    }

    public void saveimages(Set<Image> list,Event event){
        Set<Image> list2=new HashSet<>();
        list.forEach(a->{
            a.setEventID(event.getId());
            list2.add(a);
            imageRepository.save(a);
        });
        event.setImages(list2);
        eventRepository.save(event);
    }
    @Override
    public void update(Event event,int UserId) {

        event.setLastModified_at(new Date());
        event.setLastModified_by(UserId);

        eventRepository.save(event);
    }

    public List<Event> findAllEvents(){
        return eventRepository.findAll();
    }



}
