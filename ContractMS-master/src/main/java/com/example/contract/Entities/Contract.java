package com.example.contract.Entities;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Setter
@Getter
@Table(name ="Contract")
public class Contract {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)


    @Column(name= "idContract")
    private Long id;

    @Enumerated(EnumType.STRING)
    private ContractType contractType;

    @Column(name="note")
    private String note;

    @Column(name="attachement")
    private String attachment;

    @Column(name = "datecontract" )
    private Date ContractDate;

    @Enumerated(EnumType.STRING)
    private ContractStatus status;


    public Contract(String one_way_contract, String good, String pdf, String s, String not_validated) {

    }
}

