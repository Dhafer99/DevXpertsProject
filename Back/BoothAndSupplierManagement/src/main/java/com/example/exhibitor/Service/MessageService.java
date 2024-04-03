package com.example.exhibitor.Service;

import com.example.exhibitor.Entity.ChatMessage;

public interface MessageService {

    public ChatMessage addMessage(ChatMessage chatMessage,Long ChatRoomId,Long senderId,Long ReceiverId) throws Exception;

}
