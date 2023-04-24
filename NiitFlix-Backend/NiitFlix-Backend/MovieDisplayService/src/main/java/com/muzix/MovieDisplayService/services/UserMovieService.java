package com.muzix.MovieDisplayService.services;

import com.muzix.MovieDisplayService.exception.MovieAlreadyExistsException;
import com.muzix.MovieDisplayService.exception.UserAlreadyExistException;
import com.muzix.MovieDisplayService.exception.UserNotFoundException;
import com.muzix.MovieDisplayService.model.User;
import com.muzix.MovieDisplayService.model.MovieFields;

import java.util.List;

public interface UserMovieService {
    public abstract User addUser(User user) throws UserAlreadyExistException;
    public abstract  User addToFavourites(  MovieFields movies,  String emailId) throws UserNotFoundException, MovieAlreadyExistsException;
    List<MovieFields> getAllUserMovie(String emaiId) throws UserNotFoundException;
    public void deleteMovie(String email, int movieId) throws UserNotFoundException;

}
