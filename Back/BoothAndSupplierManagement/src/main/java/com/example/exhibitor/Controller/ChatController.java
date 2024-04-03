package com.example.exhibitor.Controller;


import com.example.exhibitor.Entity.ChatMessage;
import com.example.exhibitor.Entity.Exhibitor;
import com.example.exhibitor.Repository.ChatRoomRepository;
import com.example.exhibitor.Service.ChatRoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/Chat")
@RequiredArgsConstructor
public class ChatController {

    private ChatRoomService chatRoomService ;


    @PostMapping("/addChatRoom")
    @ResponseStatus(HttpStatus.CREATED)
    public com.example.exhibitor.entity.ChatRoom addchatroom(
            @RequestBody com.example.exhibitor.entity.ChatRoom chatRoom
    )
    {
        return  chatRoomService.addChatRoom(chatRoom);
    }
    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/public")
    public ChatMessage sendMessage(
            @Payload ChatMessage chatMessage
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