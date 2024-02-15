package com.example.appointementandclassroom.services;

import com.example.appointementandclassroom.entities.Appointement;
import com.example.appointementandclassroom.entities.Classroom;

import java.util.List;

public interface IClassroomService {


    List<Classroom> retrieveAllClassroom();

    Classroom  addClassroom(Classroom  classroom);

    Classroom updateClassroom(Classroom classroom);

    Classroom retrieveClassroom(int numClassroom);
}
