package com.mereder.util.exceptions;

import lombok.Data;
import java.util.Map;

@Data
public class SaveErrorException extends Exception {
    private Map<String, String> errors;

    public  SaveErrorException(Map<String, String> errors){
        this.errors = errors;
    }
}
