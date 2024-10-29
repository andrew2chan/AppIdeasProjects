package com.andrew2chan.bintodec.controllers;

import com.andrew2chan.bintodec.services.BinToDecimalService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(BinToDecimalController.class)
public class BinToDecimalControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private BinToDecimalService binToDecimalService;

    @Test
    public void checkConvertCalled() throws Exception {
        when(binToDecimalService.convertToInteger("0001")).thenReturn(1);

        mockMvc.perform(get("/convert/0001"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(content().json("1"));

        verify(binToDecimalService, times(1)).convertToInteger("0001");
    }
}
