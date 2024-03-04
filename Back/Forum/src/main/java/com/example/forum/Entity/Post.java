package com.example.forum.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
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
    private long idPost ;
    private boolean featuredSubject;
    private String title;
    @Lob
    @Column(columnDefinition = "MEDIUMBLOB")
    private String image;
    private String descriptionSubject;
    private int likesSubject;
    private int commentsCount;
    @Temporal(TemporalType.DATE)
    private Date dateCreationPost;

    @OneToMany(cascade = CascadeType.ALL, mappedBy="post")
    private Set<Comment> comment;


    public void setImage(String image) {
        this.image = image;
    }
}
