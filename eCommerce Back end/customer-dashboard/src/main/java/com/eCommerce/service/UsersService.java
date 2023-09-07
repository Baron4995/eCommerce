package com.eCommerce.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.eCommerce.entity.Accounts;
import com.eCommerce.entity.Users;
import com.eCommerce.repository.UsersRepository;

@Service
public class UsersService {

	@Autowired
	UsersRepository usersrepository;
	
	@Autowired
	AccountsService accountsService;
	
	public PasswordEncoder password() {
		return new BCryptPasswordEncoder();
	}
	
	public String signUp(Users user) {
		Optional<Users> result = usersrepository.findById(user.getEmailid());
		if(result.isPresent()) {
			return "Emailid must be unique";
		}else {
			user.setPassword(password().encode(user.getPassword()));
			Accounts account = new Accounts();
			account.setEmailid(user.getEmailid());
			account.setAmount(40000);
			usersrepository.save(user);
			accountsService.addAccount(account);
			return "Successfully signed up";
		}
	}
	
	public String signIn(Users user) {
		Optional<Users> result = usersrepository.findById(user.getEmailid());
		if(result.isPresent()) {
			Users u = result.get();
			boolean flag = password().matches(user.getPassword(), u.getPassword());
			if(flag) {
				return "Successfuly signed in";
			}else {
				return "Invalid password";
			}
		}else {
			return "Invalid emailid";
		}
	}
	
	public List<Users> findAllUsers(){
		return usersrepository.findAll();
	}
}
