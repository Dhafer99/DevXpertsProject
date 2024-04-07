package com.example.exhibitor.Service;

import com.example.exhibitor.Entity.ChatMessage;
import com.example.exhibitor.dto.ChatMessageDTO;

public interface MessageService {

    public ChatMessageDTO addMessage(ChatMessage chatMessage, Long senderId, Long receiverId) throws Exception;

}
