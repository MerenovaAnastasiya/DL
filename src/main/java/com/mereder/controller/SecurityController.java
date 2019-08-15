package com.mereder.controller;

import com.mereder.dto.LoginUserDto;
import com.mereder.form.RegisterForm;
import com.mereder.pojo.User;
import com.mereder.service.UserService;
import com.mereder.util.exception.ServiceException;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;


@RestController
@AllArgsConstructor
public class SecurityController {

    @Autowired
    private final UserService userService;

    @PostMapping(value = "/users")
    public ResponseEntity<?> registration(@Valid @RequestBody RegisterForm form, HttpSession session){
        try {
            User user = new User();
            user.setLogin(form.getLogin());
            user.setPassword(form.getPassword());
            userService.registration(user);
            return ResponseEntity.ok(
                    LoginUserDto.builder().
                    login(user.getLogin()).
                    sessionId(session.getId()).build());
        } catch (ServiceException exception) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(exception);
        }
    }
}
