package com.mereder.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class SecurityController {

    @PostMapping("/registration")
    public String registration(@RequestParam(value = "login") String login,
                               @RequestParam(value = "password") String password){

    return "";
    }
}
