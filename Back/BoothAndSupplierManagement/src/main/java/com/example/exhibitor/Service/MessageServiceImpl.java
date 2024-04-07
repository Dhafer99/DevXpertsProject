package com.example.exhibitor.Service;

import com.example.exhibitor.Entity.ChatMessage;
import com.example.exhibitor.Entity.Supplier;
import com.example.exhibitor.Repository.ChatRoomRepository;
import com.example.exhibitor.Repository.MessageRepository;
import com.example.exhibitor.Repository.SupplierRepository;
import com.example.exhibitor.dto.ChatMessageDTO;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.core.MessageSendingOperations;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class MessageServiceImpl  implements MessageService{

    MessageRepository messageRepository;


    private final MessageSendingOperations<String> messagingTemplate;

    SupplierRepository supplierRepository ;


    @Override
    public ChatMessageDTO addMessage(ChatMessage chatMessage,Long senderId,Long receiverId) throws Exception {

        ChatMessageDTO message = new ChatMessageDTO();

        Supplier sender = supplierRepository.findSupplierById(senderId);
        Supplier receiver = supplierRepository.findSupplierById(receiverId);

        messageRepository.save(chatMessage);

       message.setContent(chatMessage.getContent());
       message.setSender(sender);
       message.setReceiver(receiver);
         return message;
    }
}
