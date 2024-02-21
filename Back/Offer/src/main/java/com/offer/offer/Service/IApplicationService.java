package com.offer.offer.Service;

import com.offer.offer.Entity.Application;
import com.offer.offer.Entity.Offer;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

public interface IApplicationService {
    List<Application> getAllApplications();
    Application getApplicationById(long id);
    Application addApplication(Application application, int idCandidat, long idOffer, MultipartFile lettreDeMotivation) throws IOException;
    Application updateApplication(Long idApplication, Date applicationDate, int idCandidat, Offer offer,boolean status , MultipartFile lettreDeMotivation) throws IOException;
    void deleteApplication(long id);
    List<Application> getAllApplicationByUser(long idCandidat);
    List<Application> getAllApplicationForOffer(long idOffer);
}
