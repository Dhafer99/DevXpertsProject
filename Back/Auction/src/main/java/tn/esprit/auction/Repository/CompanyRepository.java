package tn.esprit.auction.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.auction.Entites.Company;


public interface CompanyRepository  extends JpaRepository<Company,Long> {

}
