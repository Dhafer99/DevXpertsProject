package com.example.forum.Service;

import com.example.forum.Entity.Comment;
import com.example.forum.Entity.Post;
import com.example.forum.Repository.CommentRepository;
import com.example.forum.Repository.PostRepository;
import lombok.RequiredArgsConstructor;


import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.*;
import java.util.function.Consumer;
import java.util.regex.Pattern;

@Slf4j
@Service
@RequiredArgsConstructor
public class CommentServiceImp implements CommentService {

    private final PostRepository postRepo;

    private final CommentRepository commentRepo;


//    @Value("${image.upload.dir}")
//    private String uploadDir;


    private List<String> fetchBadWords() {
        List<String> badWords = new ArrayList<>();
        try {
            URL url = new URL("https://docs.google.com/spreadsheets/d/1hIEi2YG3ydav1E06Bzf2mQbGZ12kh2fe4ISgLg_UBuM/export?format=csv");
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");
            InputStream inputStream = connection.getInputStream();
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
            String line;
            while ((line = bufferedReader.readLine()) != null) {
                String[] values = line.split(",");
                if (values.length > 0) {
                    badWords.add(values[0]);
                }
            }
            bufferedReader.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return badWords;
    }

    public String convertEmoticonsToEmoji(String text) {
        Map<String, String> emoticonMap = new HashMap<>();
        emoticonMap.put(":)", "\uD83D\uDE42");
        emoticonMap.put(":(", "\uD83D\uDE41");
        emoticonMap.put(":D", "\uD83D\uDE00");
        emoticonMap.put(":P", "\uD83D\uDE1B");
        emoticonMap.put("<3", "\uD83D\uDC97");

        for (Map.Entry<String, String> entry : emoticonMap.entrySet()) {
            String pattern = Pattern.quote(entry.getKey()); // escape any special characters
            text = text.replaceAll(pattern, entry.getValue());
        }

        return text;
    }




    @Override
    public Comment addComment(Comment comment , long id) {
        Post post = postRepo.findById(id).orElse(null);
        System.out.println("this my idpost " + id);

        if (post != null && comment.getTextComment() != null) {
            String commentTextWithEmoji = convertEmoticonsToEmoji(comment.getTextComment());
            comment.setTextComment(commentTextWithEmoji);
            List<String> badWords = fetchBadWords();

            for (String badWord : badWords) {
                if (comment.getTextComment().toLowerCase().contains(badWord.toLowerCase())) {
                    String asterisks = String.join("", Collections.nCopies(badWord.length(), "*"));
                    comment.setTextComment(comment.getTextComment().toLowerCase().replace(badWord.toLowerCase(), asterisks));
                }
            }


            comment.setPost(post);
            comment.setDateCreationComment(new Date());
            System.out.println("this my comment " + comment);
        }
        return commentRepo.save(comment);
    }

//    @Override
//    public void addComment(Comment comment , long id) {
//        comment.setLikesComment(0);
//        comment.setMostPertinentComment(false);
//            Post post = retrievePost (id);
//            comment.setPost(post);
//            commentRepo.save(comment);
//    }

//   @Override
//    public Comment saveComment(Comment comment) {
//        return commentRepo.save(comment);
//    }
    @Override
    public List<Comment> findAllComments() {
        return commentRepo.findAll();
    }

    @Override
    public Comment retrieveComment(Long commentId) {
        return commentRepo.findById(commentId).get();
    }

    @Override
    public void removeComment(Long commentId) {
        commentRepo.deleteById(commentId);
    }
    @Override
    public Comment modifyComment(Comment comment) {
        return commentRepo.save(comment);
    }
}
