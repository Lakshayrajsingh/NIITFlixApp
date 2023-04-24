package com.stackroute.auth.authapp.service;

//import com.muzix.emailservice.model.EmailData;

//import com.muzix.userservice.model.User;

import com.stackroute.auth.authapp.model.SignupData;
import com.stackroute.auth.authapp.model.User;

public interface EmailService {
    public abstract  String sendEmail(SignupData signupData);

}
