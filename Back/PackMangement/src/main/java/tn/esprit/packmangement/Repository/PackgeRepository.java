package tn.esprit.packmangement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.packmangement.Entites.Package;
import tn.esprit.packmangement.Entites.TypePack;

import java.util.List;

public interface PackgeRepository  extends JpaRepository<Package,Long> {
List<Package> findByTypePack(TypePack typePack);
}
