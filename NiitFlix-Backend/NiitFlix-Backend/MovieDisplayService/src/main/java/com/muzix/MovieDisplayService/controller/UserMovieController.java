package com.muzix.MovieDisplayService.controller;

import com.muzix.MovieDisplayService.exception.MovieAlreadyExistsException;
import com.muzix.MovieDisplayService.exception.UserAlreadyExistException;
import com.muzix.MovieDisplayService.exception.UserNotFoundException;
import com.muzix.MovieDisplayService.model.MovieFields;
import com.muzix.MovieDisplayService.model.User;
import com.muzix.MovieDisplayService.services.UserMovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;

@CrossOrigin
@RestController
@RequestMapping("/movie-display")
public class UserMovieController {
    private ResponseEntity responseEntity;
    @Autowired
    UserMovieService userMovieService;
    @PostMapping("/add-user")
    public ResponseEntity<?> addUser(@RequestBody User user) throws UserAlreadyExistException {
        try {
            user.setMovieField(new ArrayList<MovieFields>());
            responseEntity= new ResponseEntity<>(userMovieService.addUser(user), HttpStatus.OK);
        }catch (UserAlreadyExistException e){
            throw new UserAlreadyExistException();
        }
        catch (Exception e){
            System.out.println(e.getMessage());
        }
        return responseEntity;
    }
    @PostMapping("/add-favourite-movie")
    public  ResponseEntity<?>  addFavouriteMovie(@RequestBody MovieFields movieFields, HttpServletRequest httpServletRequest) throws MovieAlreadyExistsException {
        try {
            String email = (String) httpServletRequest.getAttribute("current_user_emailId");
            System.out.println(movieFields);
            responseEntity = new ResponseEntity<>(userMovieService.addToFavourites(movieFields, email), HttpStatus.OK);
        }catch (UserNotFoundException e) {
            e.printStackTrace();
        } catch (MovieAlreadyExistsException e){
            System.out.println("Throwing MovieAlreadyExistsException");
            responseEntity=new ResponseEntity<>(e.getMessage(),HttpStatus.ALREADY_REPORTED) ;
            throw new MovieAlreadyExistsException() ;
        }
        catch (Exception e){
            System.out.println(e.getMessage());
        }
        System.out.println("Ending controller method $$$$$$$$$$$$$$$$$$$$$$$$$");
        return responseEntity;
    }

    @GetMapping("/fav-movies/{emailId}")
    public ResponseEntity<?> getAllFavMovies(@PathVariable String emailId) throws UserNotFoundException {
        try {
            responseEntity = new ResponseEntity<>(userMovieService.getAllUserMovie(emailId), HttpStatus.OK);
        }catch (UserNotFoundException e) {
            throw new UserNotFoundException();
        }
        catch (Exception e){
            System.out.println(e.getMessage());
        }
        return responseEntity;
    }

    @DeleteMapping("/delete/{emailId}/{id}")
    public ResponseEntity<?> deleteMovieFromFavouriteList(@PathVariable String emailId,@PathVariable int id) throws UserNotFoundException {
        userMovieService.deleteMovie(emailId,id) ;
        return new ResponseEntity<>(HttpStatus.OK) ;
    }
}
