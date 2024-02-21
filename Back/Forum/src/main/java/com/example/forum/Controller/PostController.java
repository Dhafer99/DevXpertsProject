package com.example.forum.Controller;

import com.example.forum.Entity.Post;
import com.example.forum.Service.ForumService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Posts")
@RequiredArgsConstructor
@CrossOrigin(origins = { "*" })
public class PostController {

    private final ForumService service;

    @PostMapping("/add-post")
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody Post post)
    {
        service.savePost(post);
    }

    @GetMapping("/retrieve-all-posts")
    public List<Post> getListPosts(){
        return service.findAllPosts();
    }

    @PutMapping("/update-post")
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
