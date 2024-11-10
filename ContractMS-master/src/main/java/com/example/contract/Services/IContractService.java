package com.example.contract.Services;

import com.example.contract.Entities.Contract;

import java.util.List;

public interface IContractService {
    List<org.apache.http.annotation.Contract> retriveAllContracts();

    List<Contract> retrieveAllContracts();

    Contract addContract(Contract c);

    Contract updateContract (Contract c);

    Contract retriveContract (Long idContract);

    Contract retrieveContract(Long idContract);

    void removeContract(Long cId);
}
