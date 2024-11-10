package tn.esprit.cosharemsmouhib.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tn.esprit.cosharemsmouhib.entities.Product;
import tn.esprit.cosharemsmouhib.services.ProductService;

import javax.annotation.security.RolesAllowed;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ProductRestAPI {
    private String title="hello , im user";
    private String admin="hello , im admin";

    @RequestMapping("/hello")
    @PreAuthorize("hasRole('USER')")
    public String sayHello(){
        System.out.println(title);
        return title;
    }
    @RequestMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String sayAdmin(){
        System.out.println(admin);
        return admin;
    }
    @Autowired
    private ProductService productService;

    @RequestMapping(value = "/addProduct", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasRole('USER')")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        return new ResponseEntity<>(productService.addProduct(product), HttpStatus.OK);
    }
    @RequestMapping("/getAll")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @RequestMapping(value = "/modifyProduct/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasRole('USER')")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Product> updateProduct(@PathVariable(value = "id") int id,
                                                   @RequestBody Product product){
        return new ResponseEntity<>(productService.updateProduct(id, product),
                HttpStatus.OK);
    }
    @RequestMapping(value = "/deleteProduct/{id}", method = RequestMethod.DELETE)
    @PreAuthorize("hasRole('USER')")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> deleteProduct(@PathVariable(value = "id") int id){
        return new ResponseEntity<>(productService.deleteProduct(id), HttpStatus.OK);
    }
}
