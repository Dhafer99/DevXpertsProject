package com.example.forum.Controller;

import com.example.forum.Entity.Comment;
import com.example.forum.Service.ForumService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Comments")
@RequiredArgsConstructor
@CrossOrigin(origins = { "*" })
public class CommentController {
    private final ForumService service;


    @PostMapping("/add-comment")
    public Comment addComment(@RequestBody Comment comment) {
        return service.saveComment(comment);
    }

    @GetMapping("retrieve-all-comments")
    public ResponseEntity<List<Comment>> findAllComments(){
        return ResponseEntity.ok(service.findAllComments());
    }

    @PutMapping("/update-comment")
    public Comment updateComment(@RequestBody Comment comment){
        return  service.modifyComment( comment);
    }

    @DeleteMapping("/remove-comment/{comment-id}")
    public void removeComment(@PathVariable("comment-id") Long commentId) {
        service.removeComment(commentId);
    }

    @GetMapping("/retrieve-comment/{comment-id}")
    public Comment retrieveComment(@PathVariable("comment-id") Long commentId) {
        return service.retrieveComment(commentId);
    }

}
