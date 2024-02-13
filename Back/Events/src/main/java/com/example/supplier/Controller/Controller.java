package com.example.supplier.Controller;


import com.example.supplier.Entity.Event;
import com.example.supplier.Service.EventService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Events")
@RequiredArgsConstructor
public class Controller {
    private final EventService service ;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void save(
            @RequestBody Event event
    )
    {
         service.save(event);
    }
    @GetMapping
    public ResponseEntity<List<Event>> findAllEvents(){
        return ResponseEntity.ok(service.findAllEvents());
    }

}
