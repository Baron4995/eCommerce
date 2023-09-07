package com.eCommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.eCommerce.service.AccountsService;

@RestController
@RequestMapping("customer/accounts")
@CrossOrigin
public class AccountsController {

	@Autowired
	AccountsService accountsService;
	
	@GetMapping(value = "findBalance", produces = MediaType.APPLICATION_JSON_VALUE)
	public float findBalance(@RequestParam("email") String emailid) {
		return accountsService.findBalance(emailid);
	}
}
