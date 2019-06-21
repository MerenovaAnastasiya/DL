package com.mereder.services;

import com.mereder.forms.RegistrationForm;
import com.mereder.models.User;
import com.mereder.repositories.UserRepository;
import com.mereder.util.exceptions.SaveErrorException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private MessageSource messageSource;

    public void save(RegistrationForm form) throws SaveErrorException {
        if(userRepository.findOneByLogin(form.getLogin()) != null) {
            Map<String, String> errors = new HashMap<>();
            errors.put("login", messageSource.getMessage("login.inUse", null, Locale.getDefault()));
            throw new SaveErrorException(errors);
        }
        User user = new User();
        user.setLogin(form.getLogin());
        user.setPassword(form.getPassword());
        userRepository.save(user);
    }
}

