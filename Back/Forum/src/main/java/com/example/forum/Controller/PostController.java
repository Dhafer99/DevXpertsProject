package com.example.forum.Controller;

import com.example.forum.Entity.Post;
import com.example.forum.Service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.util.List;

@RestController
@RequestMapping("/api/Posts")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class PostController {

    private final PostService service;

    @PostMapping("/add-post")
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestParam ("title") String title,
                     @RequestParam ("descriptionSubject") String descriptionSubject,
                     @RequestParam("file") MultipartFile file)
    {
        service.savePost(title,descriptionSubject,file);
    }

//    @GetMapping("/posts/stream")
//    public ResponseEntity<String> streamPosts() {
//        MediaType mediaType = MediaType.TEXT_EVENT_STREAM;
//        return ResponseEntity.ok().contentType(mediaType)
//                .body(sseEmitter -> {
//                    // Register client connection logic
//                    sseEmitter.onCompletion(() -> System.out.println("Client disconnected"));
//                    sseEmitter.onError(throwable -> System.out.println("Error occurred: " + throwable.getMessage()));
//
//                    // Listen for new posts from the service
//                    Consumer<Post> listener = newPost -> {
//                        try {
//                            sseEmitter.send(convertPostToSseEvent(newPost));
//                        } catch (IOException e) {
//                            // Handle exception
//                        }
//                    };
//                    service.addPostListener(listener);
//
//                    // Unregister listener on disconnect (optional)
//                    sseEmitter.onTimeout(() -> service.removePostListener(listener));
//                });
//    }
//
//    private String convertPostToSseEvent(Post newPost) {
//        // Convert post data to a suitable format for SSE event (e.g., JSON)
//        ObjectMapper mapper = new ObjectMapper();
//        try {
//            String eventData = mapper.writeValueAsString(newPost);
//            return "data: " + eventData + "\n\n"; // Format for SSE event
//        } catch (JsonProcessingException e) {
//            throw new RuntimeException("Error converting post to JSON", e);
//        }
//    }

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
