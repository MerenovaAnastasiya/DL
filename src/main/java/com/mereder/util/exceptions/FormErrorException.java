package com.mereder.util.exceptions;

import lombok.Data;
import java.util.Map;

@Data
public class FormErrorException extends Exception {
    private Map<String, String> errors;

    public FormErrorException(Map<String, String> errors){
        this.errors = errors;
    }
}
