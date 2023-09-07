package com.eCommerce.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Users {
	
	@Id
	@Column(name = "emailid")
	private String emailid;
	
	@Column(name = "username")
    private String username;
	
	@Column(name = "fullname")
    private String fullName;
	
	@Column(name = "password")
    private String password;
	
	@Column(name = "img")
    private String img;
	
	@Column(name = "contact")
    private long contact;
	
	@Column(name = "street")
    private String street;
	
	@Column(name = "city")
    private String city;
	
	@Column(name = "state")
    private String state;
	
	@Column(name = "country")
    private String country;
	
	@Column(name = "pincode")
    private long pincode;
    
    public Users() {
    	
    }

	public Users(String emailid, String username, String fullName, String password, String img, long contact,
			String street, String city, String state, String country, long pincode) {
		super();
		this.emailid = emailid;
		this.username = username;
		this.fullName = fullName;
		this.password = password;
		this.img = img;
		this.contact = contact;
		this.street = street;
		this.city = city;
		this.state = state;
		this.country = country;
		this.pincode = pincode;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public long getContact() {
		return contact;
	}

	public void setContact(long contact) {
		this.contact = contact;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public long getPincode() {
		return pincode;
	}

	public void setPincode(long pincode) {
		this.pincode = pincode;
	}

	@Override
	public String toString() {
		return "Users [emailid=" + emailid + ", username=" + username + ", fullName=" + fullName + ", password="
				+ password + ", img=" + img + ", contact=" + contact + ", street=" + street + ", city=" + city
				+ ", state=" + state + ", country=" + country + ", pincode=" + pincode + "]";
	}

}
