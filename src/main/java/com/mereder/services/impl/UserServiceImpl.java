package com.mereder.services.impl;

import com.mereder.entities.User;
import com.mereder.forms.RegistrationForm;
import com.mereder.repositories.UserRepository;
import com.mereder.services.UserService;
import com.mereder.util.exceptions.SaveErrorException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.logging.Logger;

@Service
public class UserServiceImpl implements UserService {
    Logger logger = Logger.getLogger(String.valueOf(UserService.class));
    private final UserRepository userRepository;
    private final MessageSource messageSource;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, MessageSource messageSource) {
        this.userRepository = userRepository;
        this.messageSource = messageSource;
    }
    @Override
    public User registration(RegistrationForm form) throws SaveErrorException {
        if(userRepository.findOneByLogin(form.getLogin()) != null) {
            Map<String, String> errors = new HashMap<>();
            errors.put("login", messageSource.getMessage("login.inUse", null, Locale.getDefault()));
            throw new SaveErrorException(errors);
        }
        User user = new User();
        user.setLogin(form.getLogin());
        user.setPassword(form.getPassword());
        return userRepository.save(user);
    }
}
