package com.mereder.controllers;

import com.mereder.dto.LoginUserDto;
import com.mereder.entities.User;
import com.mereder.errors.BadRequest;
import com.mereder.forms.RegistrationForm;
import com.mereder.services.UserService;
import com.mereder.util.exceptions.SaveErrorException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.logging.Logger;

@RestController
public class RegistrationController {
    Logger logger = Logger.getLogger(String.valueOf(RegistrationController.class));

    @Autowired
    private final UserService userService;

    public RegistrationController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping(value = "/users", produces = "application/json")
    public ResponseEntity<?> registration(@Valid @RequestBody RegistrationForm form, HttpSession session){
        try {
            User user = userService.registration(form);
            return ResponseEntity.ok(
                    LoginUserDto.builder().
                    login(user.getLogin()).
                    sessionId(session.getId()).build());
        } catch (SaveErrorException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new BadRequest(e.getErrors()));
        }
    }
}
