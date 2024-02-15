package com.example.supplier.Service;

import com.example.supplier.Entity.Event;
import com.example.supplier.Entity.InterestedBy;
import com.example.supplier.Repository.EventRepository;
import com.example.supplier.Repository.InterestByRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class InterestServiceImpl implements InterestService{

    private final InterestByRepository InterestRepository;

    @Override
    public void save(long event,long user) {
        InterestedBy interested=new InterestedBy(0,event,user,new Date());
        InterestRepository.save(interested);
    }



    @Override
    public void remove(InterestedBy interested){


        InterestRepository.delete(interested);
    }

    @Override
    public List<InterestedBy> findByUserID(long user) {
        return InterestRepository.findByUserID(user);
    }

    @Override
    public void remove(long event,long userId){

            InterestedBy interested=InterestRepository.findByEventIDAndAndUserID(event,userId);
        InterestRepository.delete(interested);
    }
    public List<InterestedBy> findAllInterests(){
        return InterestRepository.findAll();
    }



}
