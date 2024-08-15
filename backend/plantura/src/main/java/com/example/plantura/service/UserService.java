package com.example.plantura.service;

import java.util.List;

import com.example.plantura.model.User;

public interface UserService {

    User saveUser(User user);
    List<User> getAllUser();
    void deleteAllUsers();
    boolean validateUser(String email, String password);
}