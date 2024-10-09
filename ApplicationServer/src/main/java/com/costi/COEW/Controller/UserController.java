package com.costi.COEW.Controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import com.costi.COEW.Service.UserService;
import com.costi.COEW.Model.User;

import java.security.Principal;

@Controller
@AllArgsConstructor
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;

    private User getCurrentUser(Principal principal){
        if (principal == null) {
            return null;
        }
        String username = principal.getName();
        return userService.loadUserByUsername(username);
    }

    @GetMapping("/current")
    public ResponseEntity<?> getUser(Principal principal) {
        User user = getCurrentUser(principal);
        if(user != null){
            return ResponseEntity.ok(user);
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("not found");
        }
    }
}
