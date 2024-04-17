package tn.esprit.auction.Services;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.core.MessageSendingOperations;
import org.springframework.stereotype.Service;
import tn.esprit.auction.DTO.RouletteDTO;

@Service
public class RouletteService implements RouletteInterface {
    @Autowired
    private final MessageSendingOperations<String> messagingTemplate;

    public RouletteService(MessageSendingOperations<String> messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }


    @Override
    public void sendToRoulette(RouletteDTO rouletteDTO) throws JsonProcessingException {


        messagingTemplate.convertAndSend("/topic/rouletteResult", rouletteDTO);


    }

    @Override
    public void startRoulette() throws JsonProcessingException {

        Boolean start = true;
        ObjectMapper objectMapper = new ObjectMapper();
        String startRoulette = objectMapper.writeValueAsString(start);

        messagingTemplate.convertAndSend("/test/startroulette", startRoulette);

    }
}
