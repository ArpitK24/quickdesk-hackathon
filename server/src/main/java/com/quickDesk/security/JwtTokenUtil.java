package com.quickDesk.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

@Component
public class JwtTokenUtil {

	public String generateToken(UserDetails userDetails) {
		// TODO Auto-generated method stub
		return null;
	}
    // Key methods: generateToken, validateToken, extractUsername, extractRoles
}

