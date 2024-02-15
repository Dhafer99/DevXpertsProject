package com.example.forum.Entity;

import jakarta.persistence.*;
import lombok.*;

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
    private long IdComment ;
    private int likesComment;
    private boolean mostPertinentComment;
    private String textComment;

    @ManyToOne
    Post post;
}
