package com.example.forum.Service;

import com.example.forum.Entity.Post;
import com.example.forum.Repository.CommentRepository;
import com.example.forum.Repository.PostRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Date;
import java.util.List;
import java.util.function.Consumer;

@Slf4j
@Service
@RequiredArgsConstructor
public class PostServiceImp implements PostService {
    private final PostRepository postRepo;

    private final CommentRepository commentRepo;
    private final List<Consumer<Post>> listeners = new ArrayList<>();
    @Override
    public void savePost(String title,String descriptionSubject,MultipartFile file){

        Post p = new Post();
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        if(fileName.contains(".."))
        {
            log.error("not a valid file");
        }
        try {
            p.setImage(Base64.getEncoder().encodeToString(file.getBytes()));
        } catch (IOException e) {
            e.printStackTrace();
        }
        p.setDescriptionSubject(descriptionSubject);
        p.setTitle(title);
        p.setLikesSubject(0);
        p.setDateCreationPost(new Date());

        postRepo.save(p);
        //  notifyNewPost(p);
    }

//    @Override
//    public Post savePost(Post post, MultipartFile imageFile){
//        String imageUrl = saveImage(imageFile);
//        post.getImage(imageUrl);
//        return postRepo.save(post);
//    }
//    private String saveImage(MultipartFile imageFile) throws FileUploadException {
//        try {
//            String fileName = UUID.randomUUID().toString()+"_"+imageFile.getOriginalFilename();
//            Path filePath = Paths.get(uploadDir + fileName);
//            Files.copy(imageFile.getInputStream(),filePath);
//            return "/uploads"+fileName;
//        }catch (IOException e){
//            e.printStackTrace();
//            throw new FileUploadException("Failed to upload file");
//        }
//    }

//    private void notifyNewPost(Post newPost) {
//        listeners.forEach(listener -> listener.accept(newPost));
//    }
//
//    public void addPostListener(Consumer<Post> listener) {
//        listeners.add(listener);
//    }
//
//    public void removePostListener(Consumer<Post> listener) {
//        listeners.remove(listener);
//    }

    @Override
    public List<Post> findAllPosts() {
        return postRepo.findAll();
    }

    @Override
    public Post retrievePost(Long postId) {
        return postRepo.findById(postId).get();
    }

    @Override
    public void removePost(Long postId) {
        postRepo.deleteById(postId);
    }
    @Override
    public Post modifyPost(Post post) {
        return postRepo.save(post);
    }

    @Override
    public int addLike(long id) {
        Post a = postRepo.findById(id).orElse(new Post());
        int nb = a.getLikesSubject() + 1;
        return postRepo.addLike(nb , id) ; }

    @Override
    public int dislike(long id) {
        Post a = postRepo.findById(id).orElse(new Post());
        int nb = a.getLikesSubject() -1 ;
        return postRepo.addLike(nb , id) ; }

//    public Comment addComment(long postId, String textComment) {
//        Optional<Post> optionalPost = postRepo.findById(postId);
//        if (optionalPost.isPresent()) {
//            Post post = optionalPost.get();
//
//            // Create a new comment
//            Comment comment = new Comment();
//            comment.setTextComment(textComment);
//            comment.setLikesComment(0); // Initialize likes count to 0
//
//            // Associate the comment with the post
//            comment.setPost(post);
//
//            // Save the comment
//            return commentRepo.save(comment);
//        } else {
//            throw new IllegalArgumentException("Post with ID " + postId + " not found");
//        }
//    }
}
