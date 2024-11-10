package com.example.contract;

import com.example.contract.Entities.Contract;
import com.example.contract.Repository.ContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableEurekaClient
public class ContractApplication {

    public static void main(String[] args) {
        SpringApplication.run(ContractApplication.class, args);
    }
    @Autowired
    private ContractRepository contractRepository;
    @Bean
    ApplicationRunner init(){
        return (args) -> {
            contractRepository.save(new Contract("ONE_WAY_CONTRACT","Good","pdf","01/01/2024","NOT_VALIDATED"));
            contractRepository.save(new Contract("ONE_WAY_CONTRACT","Good","pdf","01/01/2024","NOT_VALIDATED"));
            contractRepository.save(new Contract("ONE_WAY_CONTRACT","Good","pdf","01/01/2024","NOT_VALIDATED"));
            contractRepository.findAll().forEach(System.out::println);
        };
    }
}


