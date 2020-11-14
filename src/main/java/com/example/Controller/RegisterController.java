package com.example.Controller;


import com.example.Entity.JwtResponse;
import com.example.Entity.User;
import com.example.Repository.userRepository;
import com.example.Service.JwtUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RegisterController {

    @Autowired
    userRepository repository;

    @Autowired
    JwtUserDetailsService jwtUserDetailsService;


    @CrossOrigin
    @PostMapping("register")
    public ResponseEntity<?> createUser(@RequestBody User u)
    {
        System.out.println("enterd");
        List<User> users=repository.findByUsername(u.getUsername());

        if(users.size()!=0)
        {
            return new ResponseEntity<>("can't register", HttpStatus.BAD_REQUEST);
        }
         repository.save(u);
        String token=jwtUserDetailsService.getJwtToken(u.getUsername());
       return ResponseEntity.ok(new JwtResponse(token));
    }
}
