package com.example.forum.Repository;

import com.example.forum.Entity.Comment;
import com.example.forum.Entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment,Long> {
}
