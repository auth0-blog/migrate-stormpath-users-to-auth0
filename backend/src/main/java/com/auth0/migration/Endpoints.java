package com.auth0.migration;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@EnableAutoConfiguration
public class Endpoints {

    @RequestMapping("/public")
    String getPublicEndpoint() {
        return "I'm publicly available to anyone in the world!";
    }

    @RequestMapping("/secure")
    String getSecureEndpoint() {
        return "Available to users with JWTs issued by Auth0!";
    }
}
