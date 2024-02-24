package com.example.Event.Controller;


import com.example.Event.Entity.InterestedBy;
import com.example.Event.Service.InterestService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Event/Interest")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")

public class InterestController {
    private final InterestService service ;

    @PostMapping("/addInterest/{user}/{event}")
    @ResponseStatus(HttpStatus.CREATED)
    public void addInterest(@PathVariable("user") int user,@PathVariable("event") int event )
    {
        service.save(event,user);
    }
    @GetMapping("/AllInterest")
    public ResponseEntity<List<InterestedBy>> findAllInterests(){
        return ResponseEntity.ok(service.findAllInterests());
    }
    @GetMapping("/UserInterest/{user}")
    public ResponseEntity<List<InterestedBy>> findUserIntereset(@PathVariable("user") int user){
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
    public void remove(@PathVariable("user") int event,@PathVariable("user") int userId )
    {
        service.remove(event,userId);
    }
}
