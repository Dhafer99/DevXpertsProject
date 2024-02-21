package com.example.supplier.Service;

import com.example.supplier.Entity.Image;
import com.example.supplier.Repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ImageService {
    @Autowired
    ImageRepository imageRepository;

    public List<Image> list()
    {
        return imageRepository.findAll();
    }
    public List<Image> list(int eventid)
    {
        return imageRepository.findImagesByEventID(eventid);
    }

    public Optional<Image> getOne(int id){return imageRepository.findById(id);}
    public void save(Image image){imageRepository.save(image);}

    public void delete(int id){imageRepository.deleteById(id);}
    public boolean exists(int id){return imageRepository.existsById(id);}
}
