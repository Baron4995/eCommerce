package com.eCommerce.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.eCommerce.bean.OrdersInfo;
import com.eCommerce.bean.Orders;

@Service
public class OrdersService {
	
	@Autowired
	AccountsService accountsService;
	
	@Autowired
	RestTemplate restTemplate;
	
	public String placeOrder(OrdersInfo orderInfo) {
		orderInfo.setOrderDate(LocalDateTime.now());
		String result = restTemplate.postForObject("http://ADMIN-DASHBOARD/admin/orders/placeOrders", orderInfo, String.class);
		accountsService.debitAmount(orderInfo.getEmail(), orderInfo.getTotalAmount());
//		System.out.println(orderInfo);

		return result;
	}
	
	public List<Object> viewOrderByUser(String emailid) {
		return restTemplate.getForObject("http://ADMIN-DASHBOARD/admin/orders/viewOrderByUser?email="+emailid, List.class);
	}
	
//	public List<Orders> ViewAllOrders() {
//		return ordersRepository.findAll();
//	}
}
