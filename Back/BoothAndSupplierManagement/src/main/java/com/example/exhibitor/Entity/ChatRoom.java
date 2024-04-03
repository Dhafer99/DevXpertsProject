package com.example.exhibitor.entity;

import com.example.exhibitor.Entity.ChatMessage;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table
@Builder
public class ChatRoom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
/*
    @OneToMany(mappedBy = "chatRoom")
    private List<ChatMessage> messages;*/
}
