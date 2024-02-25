package com.offer.offer.Controller;

import com.offer.offer.Entity.Application;
import com.offer.offer.Entity.Status;
import com.offer.offer.Service.IApplicationService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/Application")
@AllArgsConstructor
@CrossOrigin
public class ApplicationController {

    private final IApplicationService applicationService;
    /*
    Application updateApplication(Long idApplication, Date applicationDate, int idCandidat, Offer offer,boolean status , MultipartFile lettreDeMotivation) throws IOException;
    List<Application> getAllApplicationByUser(long idCandidat);
     */
    @GetMapping("/allApplications")
    public List<Application> retrieveAllApplications() {
        return applicationService.getAllApplications();
    }

    @GetMapping("/application/{idApplication}")
    public Application retrieveApplicationById(@PathVariable("idApplication") long id) {
        return applicationService.getApplicationById(id);
    }
    @PostMapping("/add")
    public ResponseEntity<?> addOffer(@RequestParam("idCandidat")int idCandidat,
                                      @RequestParam("idOffer") long idOffer,
                                      @RequestParam("file") MultipartFile file) throws IOException {
        Application application = new Application();
        Application savedApplication =  applicationService.addApplication(application,idCandidat,idOffer,file);
        return ResponseEntity.ok(savedApplication);
    }
    @DeleteMapping("/{idApplication}")
    public void deleteApplication(@PathVariable("idApplication") long id){
        applicationService.deleteApplication(id);
    }

    @GetMapping("/allApplicationsByUser/{idUser}")
    public List<Application> retrieveAllApplicationsByUser(@PathVariable("idUser") long id) {
        return applicationService.getAllApplicationByUser(id);
    }

    @GetMapping("/allApplicationsByOffer/{idOffer}")
    public List<Application> retrieveAllApplicationsByOffer(@PathVariable("idOffer") long id) {
        return applicationService.getAllApplicationForOffer(id);
    }
    @PutMapping("/application/status")
    public Application changeStatus(@RequestParam("idApplication") long id,
                                    @RequestParam("status")Status status){
        return applicationService.changeStatus(id,status);
    }
    @GetMapping("nbrCandidature")
    public List<Object[]> nbrCandidatureOnOffer()
    {
        return applicationService.nbrApplicationOnOffer();
    }
    @GetMapping("nbrStatusApplication")
    public List<Object[]> nbrStatusApplication()
    {
        return applicationService.nbrStatusApplication();
    }

    @GetMapping("nbrApplicationsByMonth")
    public List<Object[]> nbrApplicationsByMonth()
    {
        return applicationService.nbrApplicationsByMonth();
    }

}
