package com.example.forum.Service;

import com.example.forum.Entity.Comment;
import com.example.forum.Entity.Post;
import com.example.forum.Repository.CommentRepository;
import com.example.forum.Repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ForumServiceImp implements ForumService{
    private final PostRepository postRepo;
    private final CommentRepository commentRepo;

    @Override
    public void savePost(Post post){postRepo.save(post);}

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
    public Comment saveComment(Comment comment) {
        return commentRepo.save(comment);
    }
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
