package com.example.plantura.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.plantura.model.User;
import com.example.plantura.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userrepo;

    @Override
    public User saveUser(User user) {
        return userrepo.save(user);
    }

    @Override
    public List<User> getAllUser() {
        return userrepo.findAll();
    }
    @Override
    public void deleteAllUsers() {
        userrepo.deleteAll(); // Implementation for deleting all users
    }
    @Override
    public boolean validateUser(String email, String password) {
        Optional<User> userOpt = userrepo.findByEmail(email);
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            return user.getPassword().equals(password); 
        }
        return false;
    }
}
