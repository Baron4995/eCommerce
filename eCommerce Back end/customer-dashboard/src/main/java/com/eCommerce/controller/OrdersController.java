package com.eCommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.eCommerce.bean.Orders;
import com.eCommerce.bean.OrdersInfo;
import com.eCommerce.service.OrdersService;

@RestController
@RequestMapping("customer/orders")
@CrossOrigin
public class OrdersController {

	@Autowired
	OrdersService ordersService;
	
	@PostMapping(value = "placeOrder", consumes = MediaType.APPLICATION_JSON_VALUE)
	public String placeOrder(@RequestBody OrdersInfo orderInfo) {
//		System.out.println(orderInfo);
		return ordersService.placeOrder(orderInfo);
	}
	
	@GetMapping(value = "viewOrderByUser", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Object> viewOrderByUser(@RequestParam("email") String emailid){
		return ordersService.viewOrderByUser(emailid);
	}
	
//	@GetMapping(value = "viewAllOrders", produces = MediaType.APPLICATION_JSON_VALUE)
//	public List<Orders> viewAllOrders(){
//		return ordersService.ViewAllOrders();
//	}
}
