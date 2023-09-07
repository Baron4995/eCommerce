package com.eCommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eCommerce.bean.Users;
import com.eCommerce.service.UsersService;

@RestController
@RequestMapping("admin/users")
@CrossOrigin
public class UsersController {

	@Autowired
	UsersService usersService;
	
	@GetMapping(value = "findAllUsers", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Users> findAllUsers(){
		return usersService.getAllUsers();
	}
}
