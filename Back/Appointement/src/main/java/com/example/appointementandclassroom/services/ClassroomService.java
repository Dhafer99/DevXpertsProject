package com.example.appointementandclassroom.services;

import com.example.appointementandclassroom.entities.Classroom;
import com.example.appointementandclassroom.repositories.ClassroomRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class ClassroomService implements  IClassroomService{
    @Autowired
    private ClassroomRepo classroomRepo ;
    @Override
    public List<Classroom> retrieveAllClassroom() {
        return classroomRepo.findAll();
    }

    @Override
    public Classroom addClassroom(Classroom classroom) {
        return classroomRepo.save(classroom);
    }

    @Override
    public Classroom updateClassroom(Classroom classroom) {
        return classroomRepo.save(classroom);
    }

    @Override
    public Classroom retrieveClassroom(int numClassroom) {
        return classroomRepo.findById(numClassroom).orElse(null);
    }
}
