package tn.esprit.auction.Services;

import lombok.AllArgsConstructor;
import org.bouncycastle.util.Pack;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;
import tn.esprit.auction.Entites.Room;
import tn.esprit.auction.Repository.RoomRepository;

import java.security.SecureRandom;

@Service
@AllArgsConstructor
public class RoomService implements RoomInterface{

RoomRepository roomRepository;
    @Override
    public Room addRoom(Room room) {
        SecureRandom random = new SecureRandom();
        StringBuilder codeBuilder = new StringBuilder();

        // Define the characters allowed in the random code
        String allowedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        int maxLength = 4; // Set the maximum length to 4

        for (int i = 0; i < maxLength; i++) {
            int randomIndex = random.nextInt(allowedChars.length());
            char randomChar = allowedChars.charAt(randomIndex);
            codeBuilder.append(randomChar);
        }
        room.setCodeRoom(codeBuilder.toString());
        return roomRepository.save(room);
    }

    @Override
    public Room findRoom(Long idroom) {
        return roomRepository.findById(idroom).get();
    }
}
