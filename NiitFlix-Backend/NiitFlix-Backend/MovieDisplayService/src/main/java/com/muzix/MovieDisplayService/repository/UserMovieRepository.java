package com.muzix.MovieDisplayService.repository;

import com.muzix.MovieDisplayService.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

//@Repository
public interface UserMovieRepository extends MongoRepository<User,String> {
    User findByEmailId(String emailId);

}
