package com.mereder.controllers;

import com.mereder.dto.LoginUserDto;
import com.mereder.entities.User;
import com.mereder.errors.BadRequest;
import com.mereder.forms.LoginForm;
import com.mereder.forms.RegistrationForm;
import com.mereder.services.UserService;
import com.mereder.util.exceptions.FormErrorException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.logging.Logger;

@RestController
public class SecurityController {
    Logger logger = Logger.getLogger(String.valueOf(SecurityController.class));

    @Autowired
    private final UserService userService;

    public SecurityController(UserService userService) {
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
        } catch (FormErrorException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new BadRequest(e.getErrors()));
        }
    }
}
