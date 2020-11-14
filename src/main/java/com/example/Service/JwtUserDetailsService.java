package com.example.Service;

import java.util.ArrayList;
import java.util.List;

import com.example.Entity.User;
import com.example.Repository.userRepository;
import com.example.Security.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service("JwtUserDetailsService")
public class JwtUserDetailsService implements UserDetailsService {

	@Autowired
	userRepository repository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtTokenUtil jwtTokenUtil;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		List<User> users=repository.findByUsername(username);
		if(users.size()==0)
			throw new UsernameNotFoundException("User not found with username: " + username);
		String usernameInDB=users.get(0).getUsername();
		String passwordInDB=users.get(0).getPassword();
		if (usernameInDB.equals(username)) {
			return new org.springframework.security.core.userdetails.User(usernameInDB, encoder.encode(passwordInDB),
					new ArrayList<>());
		} else {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
	}


	public String getJwtToken(String username)
	{
		final UserDetails userDetails = this
				.loadUserByUsername(username);

		return jwtTokenUtil.generateToken(userDetails);
	}


	public List<String>getUsernames()
	{
		return repository.findAllUsername();
	}

}