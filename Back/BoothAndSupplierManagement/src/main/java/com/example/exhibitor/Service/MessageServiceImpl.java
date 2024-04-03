package com.example.exhibitor.Service;

import com.example.exhibitor.Entity.ChatMessage;
import com.example.exhibitor.Entity.Supplier;
import com.example.exhibitor.Repository.ChatRoomRepository;
import com.example.exhibitor.Repository.MessageRepository;
import com.example.exhibitor.Repository.SupplierRepository;
import com.example.exhibitor.entity.ChatRoom;
import org.apache.logging.log4j.message.Message;
import org.springframework.stereotype.Service;

@Service
public class MessageServiceImpl  {

    MessageRepository messageRepository;

    ChatRoomRepository chatRoomRepository ;

    SupplierRepository supplierRepository ;


   /* @Override
    public ChatMessage addMessage(ChatMessage chatMessage, Long ChatRoomId, Long senderId, Long ReceiverId) throws Exception {
       ChatRoom chatRoom = chatRoomRepository.findById(ChatRoomId).orElseThrow(()-> new Exception("chat room not found"));
       Supplier sender =supplierRepository.findSupplierById(senderId);
       Supplier receiver = supplierRepository.findSupplierById(ReceiverId);

       if(chatRoom.getMessages()!= null){

       }
    }*/
}
