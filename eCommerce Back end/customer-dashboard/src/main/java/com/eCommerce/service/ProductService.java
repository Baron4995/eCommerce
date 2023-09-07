package com.eCommerce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.eCommerce.bean.Product;

@Service
public class ProductService {
	
	@Autowired
	RestTemplate restTemplate;
	
	public List<Product> findAllProducts(){
		List<Product> allProducts = restTemplate.getForObject("http://ADMIN-DASHBOARD/admin/product/findAllProducts", List.class);
		return allProducts;
	}

}
