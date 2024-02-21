package com.example.forum.Service;

import com.example.forum.Entity.Comment;
import com.example.forum.Entity.Post;

import java.util.List;

public interface ForumService {
     void savePost(Post post);
     List<Post> findAllPosts();
     Post retrievePost(Long postId);
     void removePost(Long postId);
     Post modifyPost(Post post);


     Comment saveComment(Comment comment);
     List<Comment> findAllComments();
     Comment retrieveComment(Long commentId);
     void removeComment(Long commentId);
     Comment modifyComment(Comment comment);
}
