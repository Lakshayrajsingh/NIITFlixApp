package com.muzix.MovieDisplayService.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.OK,reason = "User Not Found ")
public class UserNotFoundException extends  Exception{
}
