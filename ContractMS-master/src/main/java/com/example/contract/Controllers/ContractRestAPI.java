package com.example.contract.Controllers;

import com.example.contract.Entities.Contract;
import com.example.contract.Services.IContractService;
import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/contracts")
@CrossOrigin(origins = "*")
public class ContractRestAPI {
    IContractService contractService;


    @RequestMapping("/hello")
    @RolesAllowed("user")
    public String sayHello(){

        return "user";
    }
//this methode can be accessed by user whose role is admin
    @GetMapping("/retrieve-all-contracts")
    @RolesAllowed("admin")
    public List<Contract> getContracts() {
        List <Contract> listContracts = contractService.retrieveAllContracts();
        return listContracts;
    }

    //this methode can be accessed by user whose role is user
    @GetMapping("/retrieve-contract/{contract-id}")
    @RolesAllowed("user")
    public Contract retrieveContract(@PathVariable("contract-id") Long cId) {
        Contract contract = contractService.retriveContract(cId);
        return contract;
    }

    @PostMapping("/add-contract")
    @RolesAllowed("user")
    public Contract addContract(@RequestBody Contract c) {

        Contract contract = contractService.addContract(c);
        return contract;
    }


    @DeleteMapping("/remove-contract/{contract-id}")
    @RolesAllowed("user")
    public void removeContract(@PathVariable("contract-id") Long cId) {
        contractService.removeContract(cId);
    }

    @PutMapping("/modify-contract")
    @RolesAllowed("user")
    public Contract modifyContract(@RequestBody Contract c) {
        Contract contract = contractService.updateContract(c);
        return contract;
    }

}