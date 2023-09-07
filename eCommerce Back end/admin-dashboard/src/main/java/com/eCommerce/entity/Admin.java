package com.eCommerce.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Admin {
	
	@Id
	private String emailid;
	private String password;
	
	public Admin() {
		
	}

	public Admin(String emailid, String password) {
		super();
		this.emailid = emailid;
		this.password = password;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Admin [emailid=" + emailid + ", password=" + password + "]";
	}
	
}
