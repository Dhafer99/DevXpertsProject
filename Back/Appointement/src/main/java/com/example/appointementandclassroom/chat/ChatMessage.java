package com.example.appointementandclassroom.chat;

import com.example.appointementandclassroom.chat.MessageType;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ChatMessage {

    private MessageType type;
    private String content;
    private String sender;
}
