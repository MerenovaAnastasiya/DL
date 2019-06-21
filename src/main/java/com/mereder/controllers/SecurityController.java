package com.mereder.controllers;

import com.mereder.forms.RegistrationForm;
import com.mereder.models.User;
import com.mereder.services.UserService;
import com.mereder.util.exceptions.SaveErrorException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SecurityController {
    @Autowired
    private UserService userService;

    @PostMapping("/registration")
    public String registration(@RequestParam(value = "login") String login,
                               @RequestParam(value = "password") String password){
        try {
            //accept already encrypted password
            userService.save(new RegistrationForm(login, password));
        }
        catch (SaveErrorException exception){

        }

    return "";
    }
}
