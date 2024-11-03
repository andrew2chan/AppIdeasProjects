package com.andrew2chan.calculator.controller;

import com.andrew2chan.calculator.domain.Operation;
import com.andrew2chan.calculator.service.CalculatorService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.text.DecimalFormat;

@RestController
public class CalculatorController {
    private CalculatorService  calculatorService;

    public CalculatorController(CalculatorService calculatorService) {
        this.calculatorService = calculatorService;
    }

    @PostMapping("/calculate")
    public ResponseEntity<String> calculate(@RequestBody Operation operation) {
        Double first = Double.valueOf(operation.getFirstNumber());
        Double second = Double.valueOf(operation.getSecondNumber());
        String operator = operation.getOperator();
        Double calculatedValue = 0.0;

        switch(operator) {
            case "+":
                calculatedValue = calculatorService.calculate(first, second, (a, b) -> a + b);
                break;
            case "-":
                calculatedValue = calculatorService.calculate(first, second, (a, b) -> a - b);
                break;
            case "*":
                calculatedValue = calculatorService.calculate(first, second, (a, b) -> a * b);
                break;
            case "/":
                calculatedValue = calculatorService.calculate(first, second, (a, b) -> a / b);
                break;
            default:
                return new ResponseEntity<>("Invalid operator", HttpStatus.BAD_REQUEST);
        }

        String stringifiedDouble = new DecimalFormat("#.###").format(calculatedValue.doubleValue());

        if(stringifiedDouble.length() > 8) return new ResponseEntity<>("ERR", HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(stringifiedDouble, HttpStatus.OK);
    }
}
