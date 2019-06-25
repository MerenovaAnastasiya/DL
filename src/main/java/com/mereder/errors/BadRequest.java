package com.mereder.errors;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Map;

@Data
@AllArgsConstructor
public class BadRequest {
    private Map<String, String> errors;
}
