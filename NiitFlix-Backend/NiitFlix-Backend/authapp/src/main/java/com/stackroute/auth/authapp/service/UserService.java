package com.stackroute.auth.authapp.service;

import com.stackroute.auth.authapp.exception.UserAlreadyExistsException;
import com.stackroute.auth.authapp.exception.UserNotFoundException;
import com.stackroute.auth.authapp.model.SignupData;
import com.stackroute.auth.authapp.model.User;

import java.util.List;

public interface UserService {
    public abstract User registerUser1(SignupData signupData) throws UserAlreadyExistsException;

//    public abstract User registerUser(User user);
    public abstract User loginCheck(User user) throws UserNotFoundException;
}
