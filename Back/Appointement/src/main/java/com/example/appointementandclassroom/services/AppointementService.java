package com.example.appointementandclassroom.services;

import com.example.appointementandclassroom.entities.Appointement;
import com.example.appointementandclassroom.repositories.AppointementRepo;
import com.example.appointementandclassroom.repositories.ClassroomRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class AppointementService implements  IAppointementService {
@Autowired
    private AppointementRepo appointementRepo;
    @Autowired
    private ClassroomRepo classroomRepo;
    @Override
    public List<Appointement> retrieveAllAppointement() {
        return appointementRepo.findAll();
    }

    @Override
    public Appointement addappointement(Appointement appointement) {
        appointement.setClassroom(classroomRepo.findById(appointement.getClassroomFK()).orElse(null));
        return appointementRepo.save(appointement);
    }

    @Override
    public Appointement updateappointement(Appointement appointement) {
        appointement.setClassroom(classroomRepo.findById(appointement.getClassroomFK()).orElse(null));
        return appointementRepo.save(appointement);
    }

    @Override
    public Appointement retrieveappointement(int numAppointement) {
        return appointementRepo.findById(numAppointement).orElse(null);
    }
}
