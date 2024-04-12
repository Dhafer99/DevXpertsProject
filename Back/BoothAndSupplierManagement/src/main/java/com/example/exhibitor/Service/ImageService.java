package com.example.exhibitor.Service;

import java.util.List;
import java.util.Optional;

import com.example.exhibitor.Entity.Image;
import com.example.exhibitor.Repository.ImageRepository;
import com.example.exhibitor.Repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@Service
@Transactional
public class ImageService {
    @Autowired
    ImageRepository imageRepository;
    @Autowired
    SupplierRepository supplierRepository;

    public List<Image> list()
    {
        return imageRepository.findAll();
    }


    public Optional<Image> getOne(int id){return imageRepository.findById(id);}
    public void save(Image image){imageRepository.save(image);}

    public void delete(int id){imageRepository.deleteById(id);}
    public boolean exists(int id){return imageRepository.existsById(id);}
}