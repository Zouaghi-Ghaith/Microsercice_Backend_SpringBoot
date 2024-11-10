package com.example.contract.Services;

import com.example.contract.Entities.Contract;
import com.example.contract.Repository.ContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContractService implements IContractService {

    ContractRepository contractRepository;

    @Autowired
    public ContractService(ContractRepository contractRepository) {
        this.contractRepository = contractRepository;
    }

    @Override
    public List<org.apache.http.annotation.Contract> retriveAllContracts() {
        return null;
    }

    @Override
    public List<Contract> retrieveAllContracts() {
        return contractRepository.findAll();
    }

    @Override
    public Contract addContract(Contract c) {
        return contractRepository.save(c);
    }

    @Override
    public Contract updateContract(Contract c) {
        return contractRepository.save(c);
    }

    @Override
    public Contract retriveContract(Long idContract) {
        return null;
    }

    @Override
    public Contract retrieveContract(Long idContract) {
        return contractRepository.findById(idContract).orElse(null);
    }

    @Override
    public void removeContract(Long contractId) {
        contractRepository.deleteById(contractId);
    }
}

