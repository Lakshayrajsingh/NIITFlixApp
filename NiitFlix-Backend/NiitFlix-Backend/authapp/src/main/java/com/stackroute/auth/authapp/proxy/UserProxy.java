package com.stackroute.auth.authapp.proxy;

import com.stackroute.auth.authapp.model.UserDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name="movie-display-service",url="localhost:8083")
public interface UserProxy {
    @PostMapping("/movie-display/add-user")
    public abstract ResponseEntity<?> sendUserDtoToMovieDisplayService(@RequestBody UserDTO userDTO);

}
