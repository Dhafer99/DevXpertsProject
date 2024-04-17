package com.example.forum.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table
@Builder
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idComment ;
    private int likesComment;
    private int dislikesComment;
    private String textComment;
    @Temporal(TemporalType.DATE)
    private Date dateCreationComment;
    private int userId;


    @JsonIgnore
    @ManyToOne
    Post post;
}
