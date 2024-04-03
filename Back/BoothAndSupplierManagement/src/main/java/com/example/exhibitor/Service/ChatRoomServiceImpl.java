package com.example.exhibitor.Service;

import com.example.exhibitor.Repository.ChatRoomRepository;
import com.example.exhibitor.entity.ChatRoom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatRoomServiceImpl implements ChatRoomService{

    @Autowired
    ChatRoomRepository chatRoomRepository ;
    @Override
    public ChatRoom addChatRoom(ChatRoom chatRoom) {
        return chatRoomRepository.save(chatRoom);
    }
}
