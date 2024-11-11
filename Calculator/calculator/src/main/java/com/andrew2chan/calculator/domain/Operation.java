package com.andrew2chan.calculator.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Operation {
    @JsonProperty(value = "firstNum")
    private String firstNumber;

    @JsonProperty(value = "secondNum")
    private String secondNumber;

    private String operator;
}
