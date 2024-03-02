package com.example.forum.Service;

import com.example.forum.Entity.Comment;
import com.example.forum.Entity.Post;
import com.example.forum.Repository.CommentRepository;
import com.example.forum.Repository.PostRepository;
import lombok.RequiredArgsConstructor;


import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.util.http.fileupload.FileUploadException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;
import java.util.function.Consumer;

@Slf4j
@Service
@RequiredArgsConstructor
public class ForumServiceImp implements ForumService{

    private final PostRepository postRepo;

    private final CommentRepository commentRepo;
    private final List<Consumer<Post>> listeners = new ArrayList<>();

//    @Value("${image.upload.dir}")
//    private String uploadDir;



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

    @Override
    public void addComment(Comment comment , long id) {
        comment.setLikesComment(0);
        comment.setMostPertinentComment(false);
            Post post = retrievePost (id);
            comment.setPost(post);
            commentRepo.save(comment);
    }

//   @Override
//    public Comment saveComment(Comment comment) {
//        return commentRepo.save(comment);
//    }
    @Override
    public List<Comment> findAllComments() {
        return commentRepo.findAll();
    }

    @Override
    public Comment retrieveComment(Long commentId) {
        return commentRepo.findById(commentId).get();
    }

    @Override
    public void removeComment(Long commentId) {
        commentRepo.deleteById(commentId);
    }
    @Override
    public Comment modifyComment(Comment comment) {
        return commentRepo.save(comment);
    }
}
