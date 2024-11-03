package com.andrew2chan.calculator.service;

import com.andrew2chan.calculator.service.impl.CalculatorServiceImpl;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.CsvSource;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.function.BinaryOperator;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(SpringExtension.class)
public class CalculatorServiceTest {
    private static CalculatorService calculatorService;

    @BeforeAll
    public static void init() {
        calculatorService = new CalculatorServiceImpl();
    }

    @ParameterizedTest(name = "[{index}]: first: {0} second: {1} expected: {2}")
    @CsvSource({
            "1, 0, 1",
            "2, 5, 7",
            "6, 4, 10"
    })
    public void addNumbers_addTwoValidNumbers_returnProperAnswers(Double a, Double b, Double expected) {
        BinaryOperator<Double> bo = (first, second) -> first + second;

        assertEquals(expected, calculatorService.calculate(a, b, bo));
    }

    @ParameterizedTest(name = "[{index}]: first: {0} second: {1} expected: {2}")
    @CsvSource({
            "1, 0, 1",
            "2, 5, -3",
            "6, 4, 2"
    })
    public void subtractNumbers_subtractTwoValidNumbers_returnProperAnswers(Double a, Double b, Double expected) {
        BinaryOperator<Double> bo = (first, second) -> first - second;

        assertEquals(expected, calculatorService.calculate(a, b, bo));
    }
}
