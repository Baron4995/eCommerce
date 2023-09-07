package com.eCommerce.bean;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import com.eCommerce.entity.Product;


public class OrdersInfo {

private int orderid;
	
    private LocalDateTime orderDate;
    private String orderStatus;
    private String email;
    private int shipmentCharges;
    private int totalItems;
    private float totalAmount;
    private List<Product> products;
    
    public OrdersInfo() {
    	
    }

	public OrdersInfo(int orderid, LocalDateTime orderDate, String orderStatus, String email, int shipmentCharges,
			int totalItems, float totalAmount, List<Product> products) {
		this.orderid = orderid;
		this.orderDate = orderDate;
		this.orderStatus = orderStatus;
		this.email = email;
		this.shipmentCharges = shipmentCharges;
		this.totalItems = totalItems;
		this.totalAmount = totalAmount;
		this.products = products;
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

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

	@Override
	public String toString() {
		return "OrdersInfo [orderid=" + orderid + ", orderDate=" + orderDate + ", orderStatus=" + orderStatus
				+ ", email=" + email + ", shipmentCharges=" + shipmentCharges + ", totalItems=" + totalItems
				+ ", totalAmount=" + totalAmount + ", products=" + products + "]";
	}
   
}
