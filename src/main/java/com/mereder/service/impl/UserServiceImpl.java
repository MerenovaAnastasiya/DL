package com.mereder.service.impl;

import com.mereder.pojo.User;
import com.mereder.pojo.UserRole;
import com.mereder.repository.RoleRepository;
import com.mereder.repository.UserRepository;
import com.mereder.service.UserService;
import com.mereder.util.exception.ServiceException;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.dao.DataAccessException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.logging.Logger;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class UserServiceImpl implements UserService {

    Logger logger = Logger.getLogger(String.valueOf(UserService.class));

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private MessageSource messageSource;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public User registration(User user) throws ServiceException {
        UserRole userRole = roleRepository.findByName("USER");
        List<UserRole> roles = new ArrayList();
        roles.add(userRole);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRoles(roles);
        logger.info("Registered user: " + user);
        try {
            return userRepository.save(user);
        } catch (DataAccessException exception) {
            logger.info("Register error! User with this name is already exists");
            Map<String, String> errors = new HashMap<>();
            errors.put("login", messageSource.getMessage("login.inUse", null, Locale.getDefault()));
            throw new ServiceException(errors);
        }
    }


//    @Override
//    public User login(LoginForm form) throws ServiceException {
//        if(userRepository.findOneByLogin(form.getLogin()) == null) {
//            Map<String, String> error = new HashMap<>();
//            error.put("login", messageSource.getMessage("login.doesNotExist", null, Locale.getDefault()));
//            throw new ServiceException(error);
//        }
//        if(!userRepository.findOneByLogin(form.getLogin()).getPassword().equals(form.getPassword()))
//    }
}
