package com.eCommerce.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eCommerce.bean.OrdersInfo;
import com.eCommerce.entity.Orders;
import com.eCommerce.entity.ProductOrderInfo;
import com.eCommerce.repository.OrdersRepository;

@Service
public class OrdersService {

	@Autowired
	OrdersRepository ordersRepository;
	
	@Autowired
	ProductOrderInfoService productOrderInfoService;  
	
	public String placeOrder(OrdersInfo ordersInfo) {
		
		System.out.println(ordersInfo);

		
		Orders orders = new Orders();
		orders.setEmail(ordersInfo.getEmail());
		orders.setOrderDate(ordersInfo.getOrderDate());
		orders.setOrderStatus(ordersInfo.getOrderStatus());
		orders.setShipmentCharges(ordersInfo.getShipmentCharges());
		orders.setTotalAmount(ordersInfo.getTotalAmount());
		orders.setTotalItems(ordersInfo.getTotalItems());
//		System.out.println(orders);
		int numberOfProduct = ordersInfo.getProducts().size();
		ordersRepository.save(orders);
		ordersRepository.flush();
//		System.out.println("After saved ");
//		System.out.println(orders);
//		System.out.println("Number of products " + numberOfProduct);
		List<ProductOrderInfo> listOfProductorderinfo = new ArrayList<>();
		for(int i = 0; i < numberOfProduct; i++) {
			ProductOrderInfo poi = new ProductOrderInfo();
			poi.setOrderid(orders.getOrderid());
			poi.setProductid(ordersInfo.getProducts().get(i).getPid());
			poi.setQty(ordersInfo.getProducts().get(i).getQty());
			listOfProductorderinfo.add(poi);
		}
		productOrderInfoService.storeProductOrderInfo(listOfProductorderinfo);
		return "Order Placed successfully";
		
	}
	
	public List<Object> viewOrderByUser(String emailid) {
		return ordersRepository.viewOrderByUser(emailid);
	}
	
	public List<Object[]> ViewAllOrders() {
		return ordersRepository.getAllOrdersInfo();
	}
}
