package com.eCommerce.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.eCommerce.entity.Admin;
import com.eCommerce.repository.AdminRepository;

@Service
public class AdminService {

	@Autowired
	AdminRepository adminRepository;
	
	public PasswordEncoder password() {
		return new BCryptPasswordEncoder();
	}
	
	public String signIn(Admin admin) {
		Optional<Admin> result = adminRepository.findById(admin.getEmailid());
		if(result.isPresent()) {
			Admin ad = result.get();
			boolean result1 = password().matches(admin.getPassword(), ad.getPassword());
			if(result1) {
				return "Successfully Logged in";
			}else {
				return "Unsuccessful log in";
			}
			
		}else {
			return "Invalid emailid";
		}
	}
}
