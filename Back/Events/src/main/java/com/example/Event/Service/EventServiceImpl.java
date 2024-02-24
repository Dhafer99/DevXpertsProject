package com.example.Event.Service;

import com.example.Event.Entity.Event;
import com.example.Event.Entity.Image;
import com.example.Event.Repository.EventRepository;
import com.example.Event.Repository.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class EventServiceImpl implements EventService{

    private final EventRepository eventRepository;
    private final ImageRepository imageRepository;
    @Override
    public Event save(Event event) {

       Set<Image> list=event.getImages();
       if (event.getId()<1) {
           event.setImages(null);
       }

        eventRepository.save(event);

     saveimages(list,event);

        return event;
    }

    public void saveimages(Set<Image> list,Event event){
        Set<Image> list2=new HashSet<>();
        list.forEach(a->{
            if (a.getEventID()!=event.getId()){
                a.setEventID(event.getId());
                imageRepository.save(a);
                list2.add(a);
            }else {
                list2.add(a);
            }

        });
        System.out.println(event.getId()+"UPDATING");

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

    @Override
    public List<Event> findAllEventsNoGalery() {

        return eventRepository.findAll();
    }

    @Override
    public Event findbyId(int id) {
        return eventRepository.findById(id).get();
    }
    @Override
    public void removeImageIdFromEvent(int id) {
        Optional<Event> eventOptional = eventRepository.findByImages_Id(id);

        if (eventOptional.isPresent()) {
            Event event = eventOptional.get();

            // Remove the image with the specified id from the images set
            event.getImages().removeIf(image -> image.getId() == id);

            // Save the updated event back to the repository
            eventRepository.save(event);
        }
    }

}
