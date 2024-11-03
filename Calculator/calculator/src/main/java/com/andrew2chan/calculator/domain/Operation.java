package com.andrew2chan.calculator.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Operation {
    private String firstNumber;
    private String secondNumber;
    private String operator;
}
