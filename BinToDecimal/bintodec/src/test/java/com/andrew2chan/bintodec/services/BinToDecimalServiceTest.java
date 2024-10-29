package com.andrew2chan.bintodec.services;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.*;

public class BinToDecimalServiceTest {
    private BinToDecimalService binToDecimalService = new BinToDecimalService();

    @ParameterizedTest(name = "index {index}: expected {0} binary {1}")
    @CsvSource({
            "1, 00001",
            "2, 00010",
            "4, 00100",
            "8, 01000",
            "16, 10000"
    })
    public void validBinary_convertsToBinary_decimalRepresentationOfBinary(Integer expected, String binary) {
        Integer value = binToDecimalService.convertToInteger(binary);

        assertEquals(expected, value);
    }

    @Test
    public void notValidBinary_convertsToNegativeOne_returnsNegativeOne() {
        Integer value = binToDecimalService.convertToInteger("001a");

        assertEquals(-1, value);
    }
}
