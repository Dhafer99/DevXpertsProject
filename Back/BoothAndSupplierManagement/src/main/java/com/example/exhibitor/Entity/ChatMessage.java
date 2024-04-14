package com.example.exhibitor.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table
@Builder
public class ChatMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long senderId ;

    private Long receiverId ;

    private String Content ;

    @JsonIgnore
    @ManyToOne
    com.example.exhibitor.entity.ChatRoom chatRoom ;


}