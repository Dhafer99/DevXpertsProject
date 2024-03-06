package com.example.forum.Service;

import com.example.forum.Entity.Comment;

import java.util.List;

public interface CommentService {



    public Comment addComment(Comment comment , long id);
   //  Comment saveComment(Comment comment);
     List<Comment> findAllComments();
     Comment retrieveComment(Long commentId);
     void removeComment(Long commentId);
     Comment modifyComment(Comment comment, long id);

    int addLike(long id);
     int dislike(long id);

}
