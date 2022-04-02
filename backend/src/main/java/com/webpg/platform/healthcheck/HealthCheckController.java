package com.webpg.platform.healthcheck;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/healthcheck")
public class HealthCheckController {

    @GetMapping(value = "/", produces = MediaType.TEXT_PLAIN_VALUE)
    public String getStatus() {
        return "The service is up";
    }
}
