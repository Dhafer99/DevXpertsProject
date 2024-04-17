package com.example.exhibitor.Service;

import com.example.exhibitor.Entity.ChatMessage;
import com.example.exhibitor.Repository.ChatRoomRepository;
import com.example.exhibitor.Repository.MessageRepository;
import com.example.exhibitor.Repository.SupplierRepository;
import com.example.exhibitor.entity.ChatRoom;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class MessageServiceImpl  implements MessageService{

    MessageRepository messageRepository;

    ChatRoomRepository chatRoomRepository ;

    SupplierRepository supplierRepository ;


    @Override
    public ChatMessage addMessage(ChatMessage chatMessage, Long ChatRoomId) throws Exception {
       ChatRoom chatRoom = chatRoomRepository.findById(ChatRoomId).orElseThrow(()-> new Exception("chat room not found"));
        chatMessage.setChatRoom(chatRoom);
        messageRepository.save(chatMessage);
       if(chatRoom.getMessages()== null){
           List<ChatMessage> messages = new ArrayList<>();

           messages.add(chatMessage);
        chatRoom.setMessages( messages);
           chatRoomRepository.save(chatRoom);

       }
        chatRoomRepository.save(chatRoom);
         return chatMessage;
    }
}
