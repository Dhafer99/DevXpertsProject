package com.example.exhibitor.Controller;


import com.example.exhibitor.Entity.Exhibitor;
import com.example.exhibitor.Entity.FullExhibitorResponse;
import com.example.exhibitor.Service.ExhibitorService;


import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Exhibitors")
@RequiredArgsConstructor
public class Controller {
    private final ExhibitorService service ;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void save(
            @RequestBody Exhibitor exhibitor
    )
    {
         service.saveBooth(exhibitor);
    }
    @GetMapping
    public ResponseEntity<List<Exhibitor>> findAllExhibitors(){
        return ResponseEntity.ok(service.findAllexhibitors());
    }
    @GetMapping("/{exhibitorId}")
    public ResponseEntity<FullExhibitorResponse> fullexhibitorResponse(@PathVariable("exhibitorId") Long exhibitor_id){
        return ResponseEntity.ok(service.fullExhibitorResponse(exhibitor_id));
    }

}
