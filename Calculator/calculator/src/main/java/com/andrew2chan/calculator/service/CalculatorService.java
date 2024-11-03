package com.andrew2chan.calculator.service;

import java.util.function.BinaryOperator;

public interface CalculatorService {
    public Double calculate(Double first, Double second, BinaryOperator<Double> binaryOperator);
}
