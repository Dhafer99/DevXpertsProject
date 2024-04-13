package com.example.exhibitor.Service;

import com.example.exhibitor.Entity.ChatMessage;
import com.example.exhibitor.Entity.Supplier;
import com.example.exhibitor.dto.ChatMessageDTO;

import java.util.List;

public interface MessageService {

    public ChatMessageDTO addMessage(ChatMessage chatMessage, Long senderId, Long receiverId) throws Exception;

    public void sendMessage(String chatMessage,String Mapping);

    public void saveMessage(String chatMessage, Supplier sender, Supplier receiver);

    public List<ChatMessage> allMessages();

    public List<ChatMessage> getChatMessagesBySenderAndReceiver(Long receiverId,Long senderId);

}
