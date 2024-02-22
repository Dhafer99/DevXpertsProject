package com.example.appointementandclassroom.controllers;

import com.example.appointementandclassroom.entities.Appointement;
import com.example.appointementandclassroom.entities.Classroom;
import com.example.appointementandclassroom.services.AppointementService;
import com.example.appointementandclassroom.services.ClassroomService;
import com.example.appointementandclassroom.services.IAppointementService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/AppointementAndClassrooms/")
@RequiredArgsConstructor
@CrossOrigin
public class AppointementManagement {
    @Autowired
    private  final AppointementService appointementService ;
    @Autowired
    private  final ClassroomService classroomService ;
    //----------------------Swager -------------------------------
    //  http://localhost:8095/swagger-ui/index.html#/
    //-----------------------------------------------------------

//------------------------------------------------------------------
    //-------------------------Appointement CRUD ------------------------
//--------------------------------------------------------------------
   // @Operation(description = "Add appointement")
    @PostMapping("/add_Appointement")
    public Appointement addappointement(@RequestBody Appointement appointement){
        return  appointementService.addappointement(appointement);
    }



    @Operation(description = "Retrieve all Appointement")
    @GetMapping("/all_Appointement")
    public List<Appointement> getAllAppointement(){
        return appointementService.retrieveAllAppointement();
    }

    @Operation(description = "Update Appointement ")
    @PutMapping("/update_Appointement")
    public Appointement updateAppointement(@RequestBody Appointement appointement){
        return  appointementService.updateappointement(appointement);
    }

    @Operation(description = "Retrieve Appointement by Id")
    @GetMapping("/getAppointement/{id-Appointement}")
    public Appointement getById(@PathVariable("id-Appointement") int numappointement){
        return appointementService.retrieveappointement(numappointement);
    }

    @Operation(description = "Retrieve all Appointement for youser")
    @GetMapping("/all_Appointement_foryouser/{id}")
    public List<Appointement> getAllAppointementforUser(@PathVariable("id") int id)
    {
        return appointementService.retrieveappointement(id,id);

    }




    //--------------------------------------------------------------
//--------------------- Classeroom CRUD ------------------------
//----------------------------------------------------------
    @PostMapping("/add_Classroom")
    public Classroom addClassroom(@RequestBody Classroom classroom){
        return  classroomService.addClassroom(classroom);
    }


    @Operation(description = "Retrieve all Classroom")
    @GetMapping("/all_Classroom")
    public List<Classroom> getAllClassroom(){
        return classroomService.retrieveAllClassroom();
    }

    @Operation(description = "Update Classroom ")
    @PutMapping("/update_Classroom")
    public Classroom updateClassroom(@RequestBody Classroom classroom){
        return  classroomService.updateClassroom(classroom);





    }

    @Operation(description = "Retrieve Classroom by Id")
    @GetMapping("/getClassroom/{id-Classroom}")
    public Classroom getClassroomById(@PathVariable("id-Classroom") int numClassroom){
        return classroomService.retrieveClassroom(numClassroom);
    }



    @DeleteMapping("/deleteClassroom/{idClassroom}")
    public void deleteClassroom(@PathVariable("idClassroom") int id){
        classroomService.deleteClassroom(id);
    }







//----------------------------------------------------------
}
