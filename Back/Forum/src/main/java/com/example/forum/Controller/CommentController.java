package com.example.forum.Controller;

import com.example.forum.Entity.Comment;
import com.example.forum.Service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Comments")
@RequiredArgsConstructor
@CrossOrigin(origins = { "*" })
public class CommentController {
    private final CommentService service;


    @PostMapping("/add-comment")
    public void addComment(@RequestBody Comment comment,@RequestParam("id") long  id) {
         service.addComment(comment,id);
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
