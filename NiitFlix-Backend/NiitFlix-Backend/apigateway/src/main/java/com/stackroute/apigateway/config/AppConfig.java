package com.stackroute.apigateway.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;

public class AppConfig {

    @Bean
    public RouteLocator getRoutes(RouteLocatorBuilder builder) {

        return builder.routes()
                .route(p -> p
                        .path("/auth-app-v1/**")
                        .uri("http://localhost:7777/*"))
                .route(p -> p
                        .path("/movie-display/**")
                        .uri("http://localhost:8083/*"))
                .build();


    }
}
