package com.andrew2chan.calculator.service.impl;

import com.andrew2chan.calculator.service.CalculatorService;
import org.springframework.stereotype.Service;

import java.util.function.BinaryOperator;

@Service
public class CalculatorServiceImpl implements CalculatorService {

    @Override
    public Double calculate(Double first, Double second, BinaryOperator<Double> binaryOperator) {
        return binaryOperator.apply(first, second);
    }
}
