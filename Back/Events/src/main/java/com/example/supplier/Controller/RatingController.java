package com.example.supplier.Controller;


import com.example.supplier.Entity.InterestedBy;
import com.example.supplier.Entity.Rating;
import com.example.supplier.Service.InterestService;
import com.example.supplier.Service.RatingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Event/Rating")
@RequiredArgsConstructor
public class RatingController {
    private final RatingService service ;

    @PostMapping("/addRating")
    @ResponseStatus(HttpStatus.CREATED)
    public void addRating(@RequestBody Rating rating )
    {
        service.save(rating);
    }
    @GetMapping("/AllRating")
    public ResponseEntity<List<Rating>> findAllRatings(){
        return ResponseEntity.ok(service.findAllRatings());
    }
    @GetMapping("/UserRating/{user}")
    public ResponseEntity<List<Rating>> findUserRatings(@PathVariable("user") long user){
        return ResponseEntity.ok(service.findUserRatings(user));
    }

    @GetMapping("/EventRating/{event}")
    public ResponseEntity<List<Rating>> findEventRatings(@PathVariable("event") long event){
        return ResponseEntity.ok(service.findEventRatings(event));
    }
    @DeleteMapping("/removeRating/rating")
    @ResponseStatus(HttpStatus.OK)
    public void remove(@RequestBody Rating rating)
    {
        service.remove(rating);
    }
    @DeleteMapping("/removeInterest/{event}/{user}")
    @ResponseStatus(HttpStatus.OK)
    public void remove(@PathVariable("user") long event,@PathVariable("user") long userId )
    {
        service.remove(event,userId);
    }
}
