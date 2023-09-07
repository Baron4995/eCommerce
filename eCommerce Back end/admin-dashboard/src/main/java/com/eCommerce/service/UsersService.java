package com.eCommerce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.eCommerce.bean.Users;

@Service
public class UsersService {
	
	@Autowired
	RestTemplate restTemplate;
	
	public List<Users> getAllUsers() {
//		List<Users> listOfUsers = this.restTemplate.getForObject("http://localhost:8282/customer/findAllUsers", List.class);
		List<Users> listOfUsers = this.restTemplate.getForObject("http://CUSTOMER-DASHBOARD/customer/findAllUsers", List.class);
		return listOfUsers;
	}

}
