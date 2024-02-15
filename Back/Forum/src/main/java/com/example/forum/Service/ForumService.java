package com.example.forum.Service;

import com.example.forum.Entity.Comment;
import com.example.forum.Entity.Post;

import java.util.List;

public interface ForumService {
    public void savePost(Post post);
    public List<Post> findAllPosts();
    public Post retrievePost(Long postId);
    public void removePost(Long postId);
    public Post modifyPost(Post post);


    public Comment saveComment(Comment comment);
    public List<Comment> findAllComments();
    public Comment retrieveComment(Long commentId);
    public void removeComment(Long commentId);
    public Comment modifyComment(Comment comment);
}
