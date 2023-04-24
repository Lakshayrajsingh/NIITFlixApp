package com.muzix.MovieDisplayService.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.OK,reason = "Movie Already Exists")
public class MovieAlreadyExistsException extends Exception {
}
