package com.quickDesk.config;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.quickDesk.security.CustomUserDetailsService;
import com.quickDesk.security.JwtTokenUtil;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtRequestFilter extends OncePerRequestFilter {
    @Autowired private CustomUserDetailsService userDetailsService;
    @Autowired private JwtTokenUtil jwtUtil;

    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain)
            throws ServletException, IOException {
        // Get JWT from Authorization header, validate, set context
        chain.doFilter(req, res);
    }
}

