package com.mereder.service;

import com.mereder.pojo.User;
import com.mereder.util.exception.ServiceException;


public interface UserService {
    User registration(User user) throws ServiceException;
}

