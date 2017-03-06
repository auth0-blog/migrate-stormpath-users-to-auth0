package com.auth0.migration;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@EnableAutoConfiguration
public class Endpoints {

    @RequestMapping("/public")
    @ResponseBody Message getPublicEndpoint() {
        return new Message("Publicly available to the world!");
    }

    @RequestMapping("/secure")
    @ResponseBody
    Message getSecureEndpoint() {
        return new Message("Available to logged in users only!");
    }
}
