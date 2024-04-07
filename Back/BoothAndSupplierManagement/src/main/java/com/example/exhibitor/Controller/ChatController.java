package com.example.exhibitor.Controller;


import com.example.exhibitor.Entity.ChatMessage;
import com.example.exhibitor.Entity.Exhibitor;
import com.example.exhibitor.Repository.ChatRoomRepository;
import com.example.exhibitor.Service.ChatRoomService;
import com.example.exhibitor.Service.MessageService;
import com.example.exhibitor.dto.ChatMessageDTO;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.messaging.core.MessageSendingOperations;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/Chat")
@RequiredArgsConstructor
@AllArgsConstructor
public class ChatController {

    @Autowired
    private ChatRoomService chatRoomService ;

    @Autowired
    private MessageService messageService ;
    @Autowired
    private final MessageSendingOperations<String> messagingTemplate;


    @PostMapping("/addChatRoom/{userId}/{user2Id}")
    @ResponseStatus(HttpStatus.CREATED)
    public com.example.exhibitor.entity.ChatRoom addchatroom(
            @RequestBody com.example.exhibitor.entity.ChatRoom chatRoom,

            @PathVariable("userId") Long user1Id , @PathVariable("user2Id") Long user2Id

    )
    {
        //return  chatRoomService.addChatRoom(chatRoom,user1Id,user2Id);
        return null ;
    }
    @PostMapping("/addChatMessage/{senderId}/{receiverId}")
    @ResponseStatus(HttpStatus.CREATED)
    public ChatMessageDTO addChatMessage(
            @RequestBody ChatMessage chatMessage,
            @PathVariable("senderId") Long senderId,
            @PathVariable("receiverId") Long receiverId


    ) throws Exception {
        return  messageService.addMessage(chatMessage,senderId,receiverId);
    }
    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/public")
    public ChatMessage sendMessage(
            @Payload ChatMessage chatMessage,
            @DestinationVariable String variable1,
            @DestinationVariable String variable2
    ) {

        return chatMessage;
    }

   /* @MessageMapping("/chat.addUser")
    @SendTo("/topic/public")
    public ChatMessage addUser(
            @Payload ChatMessage chatMessage,
            SimpMessageHeaderAccessor headerAccessor
    ) {
        // Add username in web socket session
        headerAccessor.getSessionAttributes().put("username", chatMessage.getSender());
        return chatMessage;
    }*/
}