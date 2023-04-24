package com.muzix.MovieDisplayService.services;

import com.muzix.MovieDisplayService.exception.MovieAlreadyExistsException;
import com.muzix.MovieDisplayService.exception.UserAlreadyExistException;
import com.muzix.MovieDisplayService.exception.UserNotFoundException;
import com.muzix.MovieDisplayService.model.User;
import com.muzix.MovieDisplayService.repository.UserMovieRepository;
import com.muzix.MovieDisplayService.model.MovieFields;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class UserMovieServiceImpl implements UserMovieService {
    @Autowired
    UserMovieRepository userMovieRepository;
    @Override
    public User addUser(User user) throws UserAlreadyExistException {
        if(userMovieRepository.findById(user.getEmailId()).isPresent()){
            throw new UserAlreadyExistException();
        }
        return userMovieRepository.insert(user);
    }

    @Override
    public User addToFavourites(  MovieFields movies,  String emailId) throws UserNotFoundException, MovieAlreadyExistsException {

        if(userMovieRepository.findById(emailId).isEmpty()) {
           throw new UserNotFoundException();
        }
        User usr = userMovieRepository.findById(emailId).get();
        if(usr.getMovieField()==null){
            usr.setMovieField(Arrays.asList(movies));
        }
        else {
            List<MovieFields> movie = usr.getMovieField();
            if (movie.removeIf(x->x.getId()== movies.getId())){
                System.out.println("Having Duplicate Movies***********************");
                throw new MovieAlreadyExistsException() ;
            }
            else {
                movie.add(movies);
                usr.setMovieField(movie);
                System.out.println(usr + "this is inside api movie");
            }
        }
        return userMovieRepository.save(usr);
    }

    @Override
    public List<MovieFields> getAllUserMovie(String emailId) throws UserNotFoundException {
        if(userMovieRepository.findById(emailId).isEmpty()) {
            throw new UserNotFoundException();
        }
        return userMovieRepository.findById(emailId).get().getMovieField();
    }

    List<MovieFields> favMovieList=new ArrayList<>() ;
    @Override
    public void deleteMovie(String emailId, int id) throws UserNotFoundException {
        if (userMovieRepository.findById(emailId).isEmpty()) {
            throw new UserNotFoundException();
        }
        User user = userMovieRepository.findByEmailId(emailId);
        favMovieList = getAllUserMovie(emailId);
        System.out.println("Before removing*************************** ");
        System.out.println(favMovieList);
        favMovieList.removeIf(obj -> obj.getId() == id);
        user.setMovieField(favMovieList);
        userMovieRepository.save(user);
    }
}
