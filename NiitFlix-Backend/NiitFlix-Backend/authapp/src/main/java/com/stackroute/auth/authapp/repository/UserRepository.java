package com.stackroute.auth.authapp.repository;

import com.stackroute.auth.authapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository <User,String>{
//    findByEmailIdAndPassword(emailId,password);
    public abstract User findByEmailIdAndPassword(String emailId, String password);
}
