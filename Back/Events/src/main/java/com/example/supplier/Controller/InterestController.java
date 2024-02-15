package com.example.supplier.Controller;


import com.example.supplier.Entity.Event;
import com.example.supplier.Entity.InterestedBy;
import com.example.supplier.Service.EventService;
import com.example.supplier.Service.InterestService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Event/Interest")
@RequiredArgsConstructor
public class InterestController {
    private final InterestService service ;

    @PostMapping("/addInterest/{user}/{event}")
    @ResponseStatus(HttpStatus.CREATED)
    public void addInterest(@PathVariable("user") long user,@PathVariable("event") long event )
    {
        service.save(event,user);
    }
    @GetMapping("/AllInterest")
    public ResponseEntity<List<InterestedBy>> findAllInterests(){
        return ResponseEntity.ok(service.findAllInterests());
    }
    @GetMapping("/UserInterest/{user}")
    public ResponseEntity<List<InterestedBy>> findUserIntereset(@PathVariable("user") long user){
        return ResponseEntity.ok(service.findByUserID(user));
    }

    @DeleteMapping("/removeInterest/event")
    @ResponseStatus(HttpStatus.OK)
    public void remove(@RequestBody InterestedBy interestedBy)
    {
        service.remove(interestedBy);
    }
    @DeleteMapping("/removeInterest/{user}/{event}")
    @ResponseStatus(HttpStatus.OK)
    public void remove(@PathVariable("user") long event,@PathVariable("user") long userId )
    {
        service.remove(event,userId);
    }
}
