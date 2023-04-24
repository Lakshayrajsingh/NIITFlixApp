package com.stackroute.auth.authapp.service;

//import com.muzix.emailservice.model.EmailData;

//import com.muzix.userservice.model.User;
import com.stackroute.auth.authapp.model.SignupData;
import com.stackroute.auth.authapp.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

  @Autowired
  private JavaMailSender javaMailSender;
  @Value("${spring.mail.username}")
  private String sender;
  @Override

    public String sendEmail(SignupData signupData) {
        try{
            SimpleMailMessage mailMessage=new SimpleMailMessage();
            mailMessage.setFrom(sender);
            mailMessage.setTo(signupData.getEmailId());
            mailMessage.setText("Congratulation...!!! You Have SuccessFully Register on NIIT Flix Website !!");
            mailMessage.setSubject("NIIT Flix Website Registered !!");
            javaMailSender.send(mailMessage);
            return "mail Sent to"+ signupData.getEmailId();
        } catch (Exception e) {
            e.printStackTrace();
            return "sending mail failed...";
        }
  }

}
