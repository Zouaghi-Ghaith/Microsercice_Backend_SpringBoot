package tn.esprit.cosharemshoussem.Controllers;

import org.keycloak.KeycloakPrincipal;
import org.keycloak.KeycloakSecurityContext;
import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tn.esprit.cosharemshoussem.Entities.Offer;
import tn.esprit.cosharemshoussem.Repositories.OfferRepository;
import tn.esprit.cosharemshoussem.Services.OfferService;

import javax.annotation.security.RolesAllowed;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class OfferController {
    private String admin="hello ,i'm admin";
    private String user="hello ,i'm user"; 

    @Autowired
    private OfferService offerService;

    @RequestMapping("/hello")
    public String sayHello(){
        System.out.println(user);
        return user;
    }
    @RequestMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String sayAdmin(){
        System.out.println(admin);
        return admin;
    }


    @RequestMapping(value = "/create",method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasRole('USER')")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Offer> addOffer(@RequestBody Offer offer) {
        return new ResponseEntity<>(offerService.addOffer(offer), HttpStatus.OK);
    }

    @PutMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<Offer> updateoffre(@PathVariable(value = "id") int id,
                                                   @RequestBody Offer offer){
        return new ResponseEntity<>(offerService.updateCandidat(id, offer), HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<String> deleteOffer(@PathVariable(value = "id") int id){

            return new ResponseEntity<>(offerService.deleteOffer(id), HttpStatus.OK);

    }
    @RequestMapping("/getAll")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<Offer>> getAllProducts() {
        List<Offer> products = offerService.getalloffres();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

}
