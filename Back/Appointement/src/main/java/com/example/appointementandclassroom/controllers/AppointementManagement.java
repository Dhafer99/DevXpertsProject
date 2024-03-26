package com.example.appointementandclassroom.controllers;

import com.example.appointementandclassroom.entities.ApiOpenquizzdb;
import com.example.appointementandclassroom.entities.Appointement;
import com.example.appointementandclassroom.entities.Classroom;
import com.example.appointementandclassroom.entities.QuizApi;
import com.example.appointementandclassroom.services.AppointementService;
import com.example.appointementandclassroom.services.ClassroomService;
import com.example.appointementandclassroom.services.IQuizService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
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

    @Autowired
    private  final IQuizService testService;
    //----------------------Swager -------------------------------
    //  http://localhost:8095/swagger-ui/index.html#/
    //-----------------------------------------------------------

//------------------------------------------------------------------
    //-------------------------Appointement CRUD ------------------------
//--------------------------------------------------------------------
   // @Operation(description = "Add appointement")
    @PostMapping("/add_Appointement")
    public Appointement addappointement(@RequestBody Appointement appointement){
        System.out.println(appointement.toString());
        return  appointementService.addappointement(appointement);
    }

    @Operation(description = "Retrieve all free appointements")
    @GetMapping("/getFreeDatesPerClassroom/{classroomId}")
    public List<Date> getFreeDates(@PathVariable("classroomId") Integer classroomId){
        return classroomService.getFreeAppointementsByClassroom(classroomId);
    }

    @Operation(description = "Retrieve all Appointement")
    @GetMapping("/all_Appointement")
    public List<Appointement> getAllAppointement(){
        return appointementService.retrieveAllAppointement();
    }
    @Operation(description = "Retrieve all Classrooms")
    @GetMapping("/all_classrooms")
    public List<Classroom> getAllclasses(){
        return classroomService.showClassesToAdmin();
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

    @DeleteMapping("/deleteAppointement/{idAppointement}")
   public void deleteAppointement(@PathVariable("idAppointement") int id){
        appointementService.deleteappointement(id);
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
//---------------------------------------------Affectation ClasseRoom to Appointment -----------------------
@Operation(description = "Retrieve freeAppointements by classroomId")
@GetMapping("/getFreeAppointements/{id-Classroom}")
public List<Date> getFreeApointements(@PathVariable("id-Classroom") int numClassroom){
    return classroomService.getFreeAppointementsByClassroom(numClassroom);
}

@GetMapping("/availableTime")
public List<Date> getAvailableDate(){
        return classroomService.getAllFree();
}



   //----------------------------------------------------------
    // -------------- Quiz-------------------------



    @GetMapping("/retrieve-all-quizs")
    public List<QuizApi> retrieveAllTests() {
        return testService.retrieveAllQuizs();
    }

    @GetMapping("/retrieve-quiz/{id}")
    public QuizApi retrieveTest(@PathVariable("id") Long id) {
        return testService.retrieveQuiz(id);
    }

    @PostMapping("/add-quiz")
    public String addTest(@RequestBody QuizApi test) {
        return testService.addTest(test);
    }




    @PostMapping("/add-quiz-api")
    public void addtestwithapi(@RequestBody List<ApiOpenquizzdb> apiOpenquizzdbs) {
        testService.addtestwithapi(apiOpenquizzdbs);
    }


    
}