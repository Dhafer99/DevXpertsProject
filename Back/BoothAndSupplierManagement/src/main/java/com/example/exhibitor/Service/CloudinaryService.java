package com.example.exhibitor.Service;

import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class CloudinaryService {
    Cloudinary cloudinary;
    public CloudinaryService(){
        Map<String,String> valuesMap=new HashMap<>();
        valuesMap.put("cloud_name","dqecul6za");
        valuesMap.put("api_key","643461244345981");
        valuesMap.put("api_secret","024w7xruIanerZQM5MGUWpNg4Rw");
        cloudinary=new Cloudinary(valuesMap);
    }
    public Map upload (MultipartFile multipartFile) throws IOException {
        File file = convert(multipartFile);
        Map result = cloudinary.uploader().upload(file, ObjectUtils.emptyMap());
        if (!Files.deleteIfExists(file.toPath())) {
            throw new IOException ("Failed to delete temporary file: + file.getAbsolutePath()");
        }
        return result;
    }
    public Map delete(String id) throws IOException {
        return cloudinary.uploader().destroy(id, ObjectUtils.emptyMap());
    }
    private File convert(MultipartFile multipartFile) throws IOException {
        File file = new File(Objects.requireNonNull(multipartFile.getOriginalFilename()));
        FileOutputStream fo = new FileOutputStream(file);
        fo.write(multipartFile.getBytes());
        fo.close();
        return file;
    }

}