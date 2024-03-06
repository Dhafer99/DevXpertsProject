package tn.esprit.auction.Controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stripe.Stripe;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import tn.esprit.auction.Entites.CheckoutPayment;
import tn.esprit.auction.Repository.PaymentRepository;

@RestController
@RequestMapping(value = "/api/stripe")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class StripeController {
    // create a Gson object
    private static Gson gson = new Gson();
PaymentRepository paymentRepository;
    @PostMapping("/payment")
    /**
     * Payment with Stripe checkout page
     *
     * @throws StripeException
     */
    public String paymentWithCheckoutPage(@RequestBody CheckoutPayment payment) throws StripeException {
        // We initilize stripe object with the api key
        init();
        // We create a  stripe session parameters
        SessionCreateParams params = SessionCreateParams.builder()
                // We will use the credit card payment method
                .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
                .setMode(SessionCreateParams.Mode.PAYMENT).setSuccessUrl(payment.getSuccessUrl())
                .setCancelUrl(
                        payment.getCancelUrl())
                .addLineItem(
                        SessionCreateParams.LineItem.builder().setQuantity(payment.getQuantity())
                                .setPriceData(
                                        SessionCreateParams.LineItem.PriceData.builder()
                                                .setCurrency(payment.getCurrency()).setUnitAmount(payment.getAmount())
                                                .setProductData(SessionCreateParams.LineItem.PriceData.ProductData
                                                        .builder().setName(payment.getName()).build())
                                                .build())

                                .build())
                .setSuccessUrl("http://localhost:4201/payments")

                .build();
        // create a stripe session
        Session session = Session.create(params);
        Map<String, String> responseData = new HashMap<>();
        // We get the sessionId and we putted inside the response data you can get more info from the session object
        responseData.put("id", session.getId());
        payment.setPaymentDay(new Date());
        paymentRepository.save(payment);
        // We can return only the sessionId as a String
        return gson.toJson(responseData);
    }
    @PostMapping("/sucess")

    private void sucess(){
        System.out.println("Payment SUcess");
    }
    private static void init() {
        Stripe.apiKey = "sk_test_51OpCPlJKKu0bIqcHRUzKgwqTjNoU66HHgjlKmJ0EQKHjNiQ8RqjqnXMLkMJNTidHRzOBeUFKQw4aA2cpxxltiYdt00Jssqzgyq";
    }
}