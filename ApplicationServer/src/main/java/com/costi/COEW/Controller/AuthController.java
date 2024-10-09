package com.costi.COEW.Controller;

import com.costi.COEW.DTO.JwtResponse;
import com.costi.COEW.DTO.SignInRequest;
import com.costi.COEW.Model.User;
import com.costi.COEW.Service.UserService;
import com.costi.COEW.util.JwtUtil;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class AuthController {
    private UserService userService;
    private PasswordEncoder passwordEncoder;
    private AuthenticationManager authenticationManager;
    private JwtUtil jwtUtil;

    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestBody SignInRequest signInRequest){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(signInRequest.getUsername(), signInRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtil.generateJwtToken(authentication);
        User currentUser = (User) authentication.getPrincipal();
        JwtResponse res = new JwtResponse();
        res.setToken(jwt);
        res.setId(currentUser.getId());
        res.setUsername(currentUser.getUsername());
        res.setRoles(Collections.singletonList(currentUser.getRole().toString()));
        return ResponseEntity.ok(res);
    }
}
