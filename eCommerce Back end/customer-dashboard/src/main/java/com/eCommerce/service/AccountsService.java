package com.eCommerce.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eCommerce.entity.Accounts;
import com.eCommerce.repository.AccountsRepository;

@Service
public class AccountsService {

	@Autowired
	AccountsRepository accountsRepository;
	
	public String addAccount(Accounts account) {
		accountsRepository.save(account);
		return "Account created";
	}
	
	
	public float findBalance(String emailid) {
		Accounts account = accountsRepository.findBalance(emailid);
		if(account == null) {
			return -1;
		}else {
			return account.getAmount();
		}
	}
	
	public void debitAmount(String emailid, float amount) {
		Accounts account = accountsRepository.findBalance(emailid);
		if(account != null) {
			account.setAmount(account.getAmount() - amount);
			accountsRepository.saveAndFlush(account);
		}
	}
}
