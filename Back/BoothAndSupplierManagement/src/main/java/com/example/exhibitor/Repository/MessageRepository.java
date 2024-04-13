package com.example.exhibitor.Repository;

import com.example.exhibitor.Entity.ChatMessage;
import com.example.exhibitor.Entity.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MessageRepository extends JpaRepository<ChatMessage,Long> {

    @Query("SELECT m FROM ChatMessage m WHERE (m.sender.id = ?1 AND m.receiver.id = ?2) OR (m.sender.id = ?2 AND m.receiver.id = ?1)")
    List<ChatMessage> findBySenderIdAndReceiverIdOrReceiverIdAndSenderId(Long senderId, Long receiverId);

}
