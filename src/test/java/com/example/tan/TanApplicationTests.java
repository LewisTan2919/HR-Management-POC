package com.example.tan;

import com.example.Repository.userRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootTest
class TanApplicationTests {

    @Autowired
    userRepository repository;

    @Autowired
    BCryptPasswordEncoder encoder;
    @Test
    void contextLoads() {
        System.out.println(encoder.encode("password"));

    }

}
