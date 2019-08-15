package com.mereder.util.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.Map;

@Data
@AllArgsConstructor
public class ServiceException extends Exception {
    private Map<String, String> errors;
}
