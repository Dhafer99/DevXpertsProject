package com.example.exhibitor.Repository;

import com.example.exhibitor.Entity.ChatMessage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<ChatMessage,Long> {

}
