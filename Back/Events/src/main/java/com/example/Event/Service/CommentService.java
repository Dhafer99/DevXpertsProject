package com.example.Event.Service;

import com.example.Event.Entity.Comment;
import com.example.Event.Entity.Dislike;

import java.util.List;

public interface CommentService {

     void save(Comment comment);
     Comment saveReply(Comment comment);
    public List<Comment> findUserComments(int user);
    public List<Comment> findEventComments(int event);
    public List<Comment> findAllComments();
    public void addLike(Dislike dislike);
    public void removeLike(Dislike dislike);
    public void removeLike(int likeId);
    public void updateComment(Comment comment);
}
