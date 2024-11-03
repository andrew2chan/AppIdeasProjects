package com.andrew2chan.calculator.controller;

import com.andrew2chan.calculator.service.CalculatorService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.function.BinaryOperator;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyDouble;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(CalculatorController.class)
public class CalculatorControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CalculatorService calculatorService;

    @Test
    public void addNumbers_ShouldReturnProperValue() throws Exception {
        when(calculatorService.calculate(anyDouble(),anyDouble(), any(BinaryOperator.class))).thenReturn(2.0);

        mockMvc.perform(post("/calculate")
                .contentType(MediaType.APPLICATION_JSON)
                .content(createContentString("1.0", "1.0", "+")))
                .andExpect(status().isOk())
                .andExpect(content().contentType("text/plain;charset=UTF-8"))
                .andExpect(content().string("2"));

        verify(calculatorService, times(1)).calculate(anyDouble(), anyDouble(), any(BinaryOperator.class));
    }

    @Test
    public void addNumbers_ShouldReturnErrOver8Digits() throws Exception {
        when(calculatorService.calculate(anyDouble(),anyDouble(), any(BinaryOperator.class))).thenReturn(100000000.0);

        mockMvc.perform(post("/calculate")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(createContentString("99999999", "1", "+")))
                .andExpect(status().isBadRequest())
                .andExpect(content().contentType("text/plain;charset=UTF-8"))
                .andExpect(content().string("ERR"));

        verify(calculatorService, times(1)).calculate(anyDouble(), anyDouble(), any(BinaryOperator.class));
    }

    @Test
    public void addNumbers_ShouldReturnDecimal() throws Exception {
        when(calculatorService.calculate(anyDouble(),anyDouble(), any(BinaryOperator.class))).thenReturn(2.2);

        mockMvc.perform(post("/calculate")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(createContentString("1.1", "1.1", "+")))
                .andExpect(status().isOk())
                .andExpect(content().contentType("text/plain;charset=UTF-8"))
                .andExpect(content().string("2.2"));

        verify(calculatorService, times(1)).calculate(anyDouble(), anyDouble(), any(BinaryOperator.class));
    }

    @Test
    public void addNumbers_ShouldReturnDecimalTruncated() throws Exception {
        when(calculatorService.calculate(anyDouble(),anyDouble(), any(BinaryOperator.class))).thenReturn(2.2461);

        mockMvc.perform(post("/calculate")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(createContentString("1.123", "1.1231", "+")))
                .andExpect(status().isOk())
                .andExpect(content().contentType("text/plain;charset=UTF-8"))
                .andExpect(content().string("2.246"));

        verify(calculatorService, times(1)).calculate(anyDouble(), anyDouble(), any(BinaryOperator.class));
    }

    @Test
    public void subtractNumbers_ShouldSubtract() throws Exception {
        when(calculatorService.calculate(anyDouble(),anyDouble(), any(BinaryOperator.class))).thenReturn(-2.0);

        mockMvc.perform(post("/calculate")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(createContentString("5", "7", "-")))
                .andExpect(status().isOk())
                .andExpect(content().contentType("text/plain;charset=UTF-8"))
                .andExpect(content().string("-2"));

        verify(calculatorService, times(1)).calculate(anyDouble(), anyDouble(), any(BinaryOperator.class));
    }

    @Test
    public void multiplyNumbers_ShouldMultiply() throws Exception {
        when(calculatorService.calculate(anyDouble(),anyDouble(), any(BinaryOperator.class))).thenReturn(6.6);

        mockMvc.perform(post("/calculate")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(createContentString("2.2", "3.3", "*")))
                .andExpect(status().isOk())
                .andExpect(content().contentType("text/plain;charset=UTF-8"))
                .andExpect(content().string("6.6"));

        verify(calculatorService, times(1)).calculate(anyDouble(), anyDouble(), any(BinaryOperator.class));
    }

    @Test
    public void divideNumbers_ShouldDivide() throws Exception {
        when(calculatorService.calculate(anyDouble(),anyDouble(), any(BinaryOperator.class))).thenReturn(1.0);

        mockMvc.perform(post("/calculate")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(createContentString("2.2", "2.2", "/")))
                .andExpect(status().isOk())
                .andExpect(content().contentType("text/plain;charset=UTF-8"))
                .andExpect(content().string("1"));

        verify(calculatorService, times(1)).calculate(anyDouble(), anyDouble(), any(BinaryOperator.class));
    }

    private String createContentString(String firstNumber, String secondNumber, String operator) {
        return "{ \"firstNumber\": \"" + firstNumber + "\", \"secondNumber\": \"" + secondNumber + "\", \"operator\": \"" + operator + "\" }";
    }
}
