package com.example.forum.Controller;

import com.example.forum.Entity.Post;
import com.example.forum.Service.ForumService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Posts")
@RequiredArgsConstructor
public class PostController {

    private final ForumService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody Post post)
    {
        service.savePost(post);
    }

    @GetMapping
    public ResponseEntity<List<Post>> findAllPosts(){
        return ResponseEntity.ok(service.findAllPosts());
    }

    @PutMapping
    public Post updatePost(@RequestBody Post post){
        return  service.modifyPost( post);
    }

    @DeleteMapping("/remove-post/{post-id}")
    public void removePost(@PathVariable("post-id") Long postId) {
        service.removePost(postId);
    }

    @GetMapping("/retrieve-post/{post-id}")
    public Post retrievePost(@PathVariable("post-id") Long postId) {
        return service.retrievePost(postId);
    }
}
