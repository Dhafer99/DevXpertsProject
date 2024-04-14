package tn.esprit.auction.Services;

import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import tn.esprit.auction.Entites.*;
import tn.esprit.auction.Repository.CompanyRepository;
import tn.esprit.auction.Repository.PackgeRepository;
import tn.esprit.auction.Repository.PaymentRepository;
import tn.esprit.auction.Repository.RoomRepository;


import java.time.Year;
import java.util.*;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PackgeService implements PackageInterface {
    PackgeRepository packgeRepository ;
    RoomRepository roomRepository ;
    CompanyRepository companyRepository ;
    PaymentRepository paymentRepository ;
 //  private final SimpMessagingTemplate messagingTemplate;

    @Override
    public List<Pack> getpackBYType(TypePack typePack) {
        return packgeRepository.findByTypePack(typePack);
    }

    @Override
    public List<Pack> getAllPacks() {
        return packgeRepository.findAll();
    }

    @Override
    public Pack AffecterPackToRoom(Long roomId, Long packid) {


        Pack pack = packgeRepository.findById(packid).get();
        Room  room = roomRepository.findById(roomId).orElse(null);
        pack.setStatus(false);
        pack.setRoom(room);
        System.out.println(roomId);
        packgeRepository.save(pack);
        return pack;
    }

    @Override
    public Pack addPackge(Pack pack) {
        Date dateAujourdhui = new Date();
        pack.setCreationDate(dateAujourdhui);
Room room = roomRepository.findByTypePack(pack.getTypePack());
if(room!=null && pack.isStatus())
{
    room.setMaxWinners(room.getPackages().size()+1);
    roomRepository.save(room);
   pack.setRoom(room);
}

        return packgeRepository.save(pack);
    }

    @Override
    public Pack updatePackage(Pack pack) {

        return packgeRepository.save(pack);
    }

    @Override
    public Pack retrievePackage(Long idpack) {
        return packgeRepository.findById(idpack).get();
    }

    @Override
    public List<Pack> findRoomPackages(Long idRoom) {
      Room room = roomRepository.findById(idRoom).get();
        return  room.getPackages();

    }

    @Override
    public List<Pack> findReservedPacks() {
        List<Pack> packs = packgeRepository.findAll();
        List<Pack> packsReserved = new ArrayList<>();
        for (Pack p : packs){
            if (p.isReserved()){

                packsReserved.add(p);
            }

        }
        return packsReserved;
    }

    @Override
    public List<Pack> finfNonReservedPacks() {
        List<Pack> packs = packgeRepository.findAll();
        List<Pack> packsNonReserved = new ArrayList<>();
        for (Pack p : packs){
            if (!p.isReserved()){

                packsNonReserved.add(p);
            }

        }
        return packsNonReserved;
    }

    @Override
    public List<Pack> findMyPacks() {
        return null;
    }

    @Override
    public List<Pack> findPacksByIdRoom(Long idroom) {
        return packgeRepository.findByRoomIdRoom(idroom);
    }

    @Override
    public void delete(Long idpack) {

        Pack p = packgeRepository.findById(idpack).get();
     //   Room room = roomRepository.findByTypePack(p.getTypePack());
       // if(room!=null && p.isStatus())
       // {
        //    room.setMaxWinners(room.getPackages().size()-1);
     //       roomRepository.save(room);
           // p.setRoom(room);
         //   packgeRepository.delete(p);
      //  }
     //
            packgeRepository.delete(p);

    }
    @Override
    public List<Pack> getPacksByStatus(Boolean status) {
        return packgeRepository.findByStatus(status);
    }
    @Override
    public Map<Integer, Map<Long, Long>> getPackStatisticsByYear() {
        List<Pack> packs = packgeRepository.findAll();
        Map<Integer, Map<Long, Long>> statisticsByYearAndStatus = packs.stream()
                .collect(Collectors.groupingBy(
                        pack -> pack.getCreationDate().getYear() + 1900, // +1900 car getYear() renvoie l'année depuis 1900
                        Collectors.groupingBy(
                                pack -> pack.isStatus() ? 1L : 0L, // Utilisation de 1L et 0L pour représenter les valeurs longues
                                Collectors.counting()
                        )
                ));

        // Tri des années de la plus ancienne à la plus récente
        Map<Integer, Map<Long, Long>> sortedStatisticsByYearAndStatus = new HashMap<>();
        statisticsByYearAndStatus.entrySet().stream()
                .sorted(Map.Entry.comparingByKey())
                .forEach(entry -> sortedStatisticsByYearAndStatus.put(entry.getKey(), entry.getValue()));

        return sortedStatisticsByYearAndStatus;
    }

    @Override
    public double RevenuePeTypePack(TypePack typePack) {
        int currentYear = Year.now().getValue();
        List<Pack> packs = packgeRepository.findByTypePack(typePack);
        double totalRevenue = packs.stream()
                .filter(pack -> pack.isReserved() && isCreationYear(pack, currentYear))
                .mapToDouble(pack -> pack.getPrice())
                .sum();

        return totalRevenue;
    }


    public double getReservationPercentages(TypePack typePack) {

            List<Pack> allPacks = packgeRepository.findByTypePack(typePack);
            long totalPacks = allPacks.size();

            if (totalPacks == 0) {
                return 0.0; // Éviter une division par zéro
            }

            long reservedPacks = allPacks.stream()
                    .filter(Pack::isReserved)
                    .count();

        double percentage = ((double) reservedPacks / totalPacks) * 100.0;
        return Math.round(percentage * 100.0) / 100.0;

    }
    @Override
    public List<Double> calculateReservationPercentageByType() {
        List<Double> percentages = new ArrayList<>();

        // Ajouter les pourcentages pour chaque type de pack
        percentages.add(this.getReservationPercentages(TypePack.diamond));
        percentages.add(this.getReservationPercentages(TypePack.silver));
        percentages.add(this.getReservationPercentages(TypePack.standard));

        return percentages ;
    }

    @Override
    public List<Company> findTopLoyalCustomers(int topCount) {
        List<Pack> reservedPacks = packgeRepository.findByReserved(Boolean.TRUE);
        Map<Long, Integer> reservationsByCompany = new HashMap<>();

        for (Pack pack : reservedPacks) {
            if(pack.getCompany()!=null) {
                Long companyId = pack.getCompany();
                reservationsByCompany.put(companyId, reservationsByCompany.getOrDefault(companyId, 0) + 1);
            }  }

        List<Long> loyalCustomerIds = reservationsByCompany.entrySet().stream()
                .sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))
                .limit(topCount)
                .map(Map.Entry::getKey)
                .collect(Collectors.toList());
        List<Company> topLoyalCustomers = new ArrayList<>();
        if(loyalCustomerIds!=null){
          topLoyalCustomers = loyalCustomerIds.stream()
                .map(companyId -> companyRepository.findById(companyId).get())
                .collect(Collectors.toList());}


        return topLoyalCustomers;
    }

    @Override
    public void sendCoderoom(String emailCompany,String codeRoom) {

        Room room = roomRepository.findByCodeRoom(codeRoom);
        int nbr = room.getMaxParticipants();
        if(room.getConfirmedParticipant()<nbr)
        {
            int nbrEntrant = room.getConfirmedParticipant()+1 ;
        room.setConfirmedParticipant(nbrEntrant);
            roomRepository.save(room);
        }





    }

    @Override
    public int QuantitePeTypePack(TypePack typePack) {
        int currentYear = Year.now().getValue();
        List<Pack> packs = packgeRepository.findByTypePack(typePack);
        int quantite = 0;

        for (Pack pack : packs) {
            if (pack.getTypePack() == typePack && isCreationYear(pack,currentYear)) {
                quantite++;
            }
        }

        return quantite;
    }

    @Override
    public float revenueTotal() {
        int currentYear = Year.now().getValue();
        List<Pack> packs = packgeRepository.findAll();
        float revenuTotal = 0;
        for (Pack pack : packs) {
            if ( isCreationYear(pack,currentYear)&&pack.isReserved()) {
                revenuTotal += pack.getPrice();
            }
        }


        return revenuTotal;
    }

    @Override
    public List<CheckoutPayment> getPayments() {
        return this.paymentRepository.findAll();
    }

    private boolean isCreationYear(Pack pack, int currentYear) {
        Calendar cal = Calendar.getInstance();
        cal.setTime(pack.getCreationDate());
        int creationYear = cal.get(Calendar.YEAR);
        return creationYear == currentYear;
    }



}
