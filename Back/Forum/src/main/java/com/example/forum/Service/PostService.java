package com.example.forum.Service;

import com.example.forum.Entity.Post;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface PostService {

    void savePost(String title,String descriptionSubject, MultipartFile file);
    List<Post> findAllPosts();
    Post retrievePost(Long postId);
    void removePost(Long postId);
    Post modifyPost(Post post);
}

