package com.andrew2chan.bintodec.controllers;

import com.andrew2chan.bintodec.services.BinToDecimalService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BinToDecimalController {
    private BinToDecimalService binToDecimalService;

    public BinToDecimalController(BinToDecimalService binToDecimalService) {
        this.binToDecimalService = binToDecimalService;
    }

    @GetMapping("/convert/{binary}")
    public ResponseEntity<Integer> getDecimalValue(@PathVariable String binary) {
        return new ResponseEntity<>(binToDecimalService.convertToInteger(binary), HttpStatus.OK);
    }
}
