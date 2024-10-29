package com.andrew2chan.bintodec.services;

import org.springframework.stereotype.Service;

@Service
public class BinToDecimalService {

    public Integer convertToInteger(String binary) {
        try {
            return Integer.parseInt(binary, 2);
        }
        catch(NumberFormatException ex) {
            return -1;
        }
    }
}
