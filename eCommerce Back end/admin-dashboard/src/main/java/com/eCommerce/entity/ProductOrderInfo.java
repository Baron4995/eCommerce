package com.eCommerce.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "productorderinfo")
public class ProductOrderInfo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int poid;
	private int orderid;
	private int productid;
	private int qty;
	
	public ProductOrderInfo() {
		
	}

	public ProductOrderInfo(int poid, int orderid, int productid, int qty) {
		super();
		this.poid = poid;
		this.orderid = orderid;
		this.productid = productid;
		this.qty = qty;
	}

	public int getPoid() {
		return poid;
	}

	public void setPoid(int poid) {
		this.poid = poid;
	}

	public int getOrderid() {
		return orderid;
	}

	public void setOrderid(int orderid) {
		this.orderid = orderid;
	}

	public int getProductid() {
		return productid;
	}

	public void setProductid(int productid) {
		this.productid = productid;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	@Override
	public String toString() {
		return "ProductOrderInfo [poid=" + poid + ", orderid=" + orderid + ", productid=" + productid + ", qty=" + qty
				+ "]";
	}
	
}
