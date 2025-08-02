package com.quickDesk.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.quickDesk.model.User;
import com.quickDesk.model.UserDTO;
import com.quickDesk.repository.UserRepository;

@Service
public class UserService {
    @Autowired private UserRepository userRepo;
    @Autowired private PasswordEncoder encoder;

    public User register(UserDTO dto) {
		return null;
        // Validate input, encode password, save new user
    }
}

