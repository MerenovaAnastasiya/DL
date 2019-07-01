package com.mereder.services.impl;

import com.mereder.entities.User;
import com.mereder.forms.LoginForm;
import com.mereder.forms.RegistrationForm;
import com.mereder.repositories.UserRepository;
import com.mereder.services.UserService;
import com.mereder.util.exceptions.FormErrorException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.logging.Logger;

@Service
public class UserServiceImpl implements UserService {
    Logger logger = Logger.getLogger(String.valueOf(UserService.class));
    private UserRepository userRepository;
    private MessageSource messageSource;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, MessageSource messageSource, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.messageSource = messageSource;
        this.passwordEncoder = passwordEncoder;
    }
    @Override
    public User registration(RegistrationForm form) throws FormErrorException {
        if(userRepository.findOneByLogin(form.getLogin()) != null) {
            Map<String, String> errors = new HashMap<>();
            errors.put("login", messageSource.getMessage("login.inUse", null, Locale.getDefault()));
            throw new FormErrorException(errors);
        }
        User user = new User();
        user.setLogin(form.getLogin());
        user.setPassword(passwordEncoder.encode(form.getPassword()));
        return userRepository.save(user);
    }

//    @Override
//    public User login(LoginForm form) throws FormErrorException {
//        if(userRepository.findOneByLogin(form.getLogin()) == null) {
//            Map<String, String> errors = new HashMap<>();
//            errors.put("login", messageSource.getMessage("login.doesNotExist", null, Locale.getDefault()));
//            throw new FormErrorException(errors);
//        }
//        if(!userRepository.findOneByLogin(form.getLogin()).getPassword().equals(form.getPassword()))
//    }
}
