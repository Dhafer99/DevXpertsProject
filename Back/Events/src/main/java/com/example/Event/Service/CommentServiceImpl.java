package com.example.Event.Service;

import com.example.Event.Entity.Comment;
import com.example.Event.Entity.Dislike;
import com.example.Event.Repository.CommentRepository;
import com.example.Event.Repository.LikeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService{

    private final CommentRepository commentRepository;

    private final LikeRepository likeRepository;

    @Override
    public void save(Comment comment) {
        commentRepository.save(comment);
    }

    @Override
    public Comment saveReply(Comment comment) {

        return commentRepository.save(comment);
    }

    @Override
    public List<Comment> findUserComments(int user) {
        return commentRepository.findByUserID(user);
    }

    @Override
    public List<Comment> findEventComments(int event) {
        return commentRepository.findByEventID(event);
    }

    @Override
    public List<Comment> findAllComments() {
        return commentRepository.findAll();
    }

    @Override
    public void addLike(Dislike dislike) {
        likeRepository.save(dislike);
        Comment comment =
        commentRepository.findById(dislike.getCommentID()).get();
        if (dislike.getStatus()=="Like")
        {
            comment.setLikesCount(comment.getLikesCount()+1);
        }
        else{
            comment.setDislikesCount(comment.getDislikesCount()+1);
        }
        Set<Dislike> mylikes=comment.getLikes();
        mylikes.add(dislike);
        comment.setLikes(mylikes);
        commentRepository.save(comment);
    }

    @Override
    public void removeLike(Dislike dislike) {

        Comment comment =
                commentRepository.findById(dislike.getCommentID()).get();
        if (dislike.getStatus()=="Like")
        {
            comment.setLikesCount(comment.getLikesCount()-1);
        }
        else{
            comment.setDislikesCount(comment.getDislikesCount()-1);
        }
        Set<Dislike> mylikes=comment.getLikes();
        mylikes.remove(dislike);
        comment.setLikes(mylikes);
        commentRepository.save(comment);
        likeRepository.delete(dislike);
    }

    @Override
    public void removeLike(int likeId) {
        Dislike dislike =likeRepository.findById(likeId).get();
        Comment comment =
                commentRepository.findById(dislike.getCommentID()).get();
        if (dislike.getStatus()=="Like")
        {
            comment.setLikesCount(comment.getLikesCount()-1);
        }
        else{
            comment.setDislikesCount(comment.getDislikesCount()-1);
        }
        Set<Dislike> mylikes=comment.getLikes();
        mylikes.remove(dislike);
        comment.setLikes(mylikes);
        commentRepository.save(comment);
        likeRepository.delete(dislike);
    }

    @Override
    public void updateComment(Comment comment) {
        commentRepository.save(comment);
    }
}
