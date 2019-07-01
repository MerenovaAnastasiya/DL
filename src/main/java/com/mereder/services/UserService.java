package com.mereder.services;

import com.mereder.entities.User;
import com.mereder.forms.RegistrationForm;
import com.mereder.util.exceptions.FormErrorException;


public interface UserService {
    User registration(RegistrationForm form) throws FormErrorException;
//    User login(LoginForm form) throws FormErrorException;


}

