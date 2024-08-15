package com.example.plantura.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.plantura.model.User;
import com.example.plantura.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService serv;

    @PostMapping("/add")
    public String add(@RequestBody User user) {
        serv.saveUser(user);
        return "New user Added";
    }

    @GetMapping("/getAll")
    public List<User> getAllUser() {
        return serv.getAllUser();
    }
     @DeleteMapping("/deleteAll")
    public String deleteAllUsers() {
        serv.deleteAllUsers();
        return "All users deleted";
    }
    @PostMapping("/login")
    public String loginUser(@RequestBody User user) {
        boolean isValid = serv.validateUser(user.getEmail(), user.getPassword());
        if (isValid) {
            return "Login successful";
        } else {
            return "Invalid email or password";
        }
    }

}