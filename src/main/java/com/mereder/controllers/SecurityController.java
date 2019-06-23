package com.mereder.controllers;

import com.mereder.forms.RegistrationForm;
import com.mereder.models.User;
import com.mereder.services.UserService;
import com.mereder.util.exceptions.SaveErrorException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.logging.Logger;

@RestController
public class SecurityController {
    Logger logger = Logger.getLogger(String.valueOf(SecurityController.class));
    private final UserService userService;

    public SecurityController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/users")
    public String registration(@RequestBody Map<String, Object> json){
        logger.info(json.get("login") + "  " + json.get("password"));
        try {
            //accept already encrypted password
            userService.save(new RegistrationForm((String) json.get("login"), (String) json.get("password")));
        }
        catch (SaveErrorException exception){

        }

    return "";
    }
}
