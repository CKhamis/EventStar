package com.costi.COEW.Repository;

import com.costi.COEW.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findFirstByRole(User.UserRole role);
    Optional<User> findByEmail(String email);
}