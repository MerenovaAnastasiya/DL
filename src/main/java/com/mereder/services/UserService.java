package com.mereder.services;

import com.mereder.entities.User;
import com.mereder.forms.RegistrationForm;
import com.mereder.util.exceptions.SaveErrorException;
import org.springframework.stereotype.Service;


public interface UserService {
    User registration(RegistrationForm form) throws SaveErrorException;

}

