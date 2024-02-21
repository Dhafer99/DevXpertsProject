package com.example.forum.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table
@Builder
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long IdPost ;
    private boolean featuredSubject;
    private String title;
    private String image;
    private String descriptionSubject;
    private int likesSubject;

    @OneToMany(cascade = CascadeType.ALL, mappedBy="post")
    private Set<Comment> comment;
}
