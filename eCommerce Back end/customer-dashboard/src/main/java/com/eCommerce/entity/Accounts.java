package com.eCommerce.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Accounts {
	@Id
	private int accno;
    private float amount;
    private String emailid;
    
    public Accounts() {
    	
    }

	public Accounts(int accno, float amount, String emailid) {
		super();
		this.accno = accno;
		this.amount = amount;
		this.emailid = emailid;
	}

	public int getAccno() {
		return accno;
	}

	public void setAccno(int accno) {
		this.accno = accno;
	}

	public float getAmount() {
		return amount;
	}

	public void setAmount(float amount) {
		this.amount = amount;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	@Override
	public String toString() {
		return "Accounts [accno=" + accno + ", amount=" + amount + ", emailid=" + emailid + "]";
	}
    
}
