package com.example.Repository;

import com.example.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;


@Repository
public interface userRepository extends JpaRepository<User,Integer> {

    @Query("select u from User u where u.username=:username and u.password=:password")
    List<User>findByUsernameAndPassword(@Param("username")String username, @Param("password") String password);

    @Query("select u from User u where u.username=:username")
    List<User>findByUsername(@Param("username")String username);

}
