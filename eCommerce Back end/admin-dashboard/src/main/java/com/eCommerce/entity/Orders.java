package com.eCommerce.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Orders {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int orderid;
	
	@Column(name = "orderdate")
    private LocalDateTime orderDate;
    
	@Column(name = "orderstatus")
    private String orderStatus;
    
    private String email;
    
    @Column(name = "shipmentcharges")
    private int shipmentCharges;
    
    @Column(name = "totalitems")
    private int totalItems;
    
    @Column(name = "totalamount")
    private float totalAmount;

    public Orders() {
    	
    }
    
	public Orders(int orderid, LocalDateTime orderDate, String orderStatus, String email, int shipmentCharges,
			int totalItems, float totalAmount) {
		super();
		this.orderid = orderid;
		this.orderDate = orderDate;
		this.orderStatus = orderStatus;
		this.email = email;
		this.shipmentCharges = shipmentCharges;
		this.totalItems = totalItems;
		this.totalAmount = totalAmount;
	}

	public int getOrderid() {
		return orderid;
	}

	public void setOrderid(int orderid) {
		this.orderid = orderid;
	}

	public LocalDateTime getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(LocalDateTime orderDate) {
		this.orderDate = orderDate;
	}

	public String getOrderStatus() {
		return orderStatus;
	}

	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getShipmentCharges() {
		return shipmentCharges;
	}

	public void setShipmentCharges(int shipmentCharges) {
		this.shipmentCharges = shipmentCharges;
	}

	public int getTotalItems() {
		return totalItems;
	}

	public void setTotalItems(int totalItems) {
		this.totalItems = totalItems;
	}

	public float getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(float totalAmount) {
		this.totalAmount = totalAmount;
	}

	@Override
	public String toString() {
		return "Orders [orderid=" + orderid + ", orderDate=" + orderDate + ", orderStatus=" + orderStatus + ", email="
				+ email + ", shipmentCharges=" + shipmentCharges + ", totalItems=" + totalItems + ", totalAmount="
				+ totalAmount + "]";
	}
}
