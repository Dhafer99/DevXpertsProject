package com.example.forum.Repository;

import com.example.forum.Entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PostRepository extends JpaRepository<Post,Long> {
    @Modifying
    @Query(value="UPDATE post p SET p.likesSubject=:nb WHERE p.idPost=:id",nativeQuery= true)
    int addLike(@Param("nb") int nb , @Param("id") long id);
}
