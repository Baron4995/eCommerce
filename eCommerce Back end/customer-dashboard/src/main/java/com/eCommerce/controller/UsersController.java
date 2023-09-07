package com.eCommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eCommerce.entity.Users;
import com.eCommerce.repository.UsersRepository;
import com.eCommerce.service.UsersService;

@RestController
@RequestMapping("customer")
@CrossOrigin
public class UsersController {
	
	@Autowired
	UsersService usersService;
	
	
	@PostMapping(value = "signUp", consumes = MediaType.APPLICATION_JSON_VALUE)
	public String signUp(@RequestBody Users user) {
//		System.out.println(user);
		return usersService.signUp(user);
	}
	
	@PostMapping(value = "signIn", consumes = MediaType.APPLICATION_JSON_VALUE)
	public String signIn(@RequestBody Users user) {
		return usersService.signIn(user);
	}
	
	@GetMapping(value = "findAllUsers", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Users> findAllUsers(){
		return usersService.findAllUsers();
	}
}
