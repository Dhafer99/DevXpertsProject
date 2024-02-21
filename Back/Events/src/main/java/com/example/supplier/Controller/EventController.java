package com.example.supplier.Controller;


import com.example.supplier.Entity.Event;
import com.example.supplier.Service.EventService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/Event/Events")
@RequiredArgsConstructor
public class EventController {
    private final EventService service ;

    @PostMapping("/addEvent")
    @ResponseStatus(HttpStatus.CREATED)
    public Event save(@RequestBody Event event )
    {
         return service.save(event);
    }
    @GetMapping("/Allevents")
    public ResponseEntity<List<Event>> findAllEvents(){
        return ResponseEntity.ok(service.findAllEvents());
    }

    @PutMapping("/{user}")
    @ResponseStatus(HttpStatus.OK)
    public void update(@RequestBody Event event,@PathVariable("user") int userId )
    {
        service.update(event,userId);
    }
}
