package com.eCommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eCommerce.bean.Product;
import com.eCommerce.service.ProductService;

@RestController
@RequestMapping("customer/products")
@CrossOrigin
public class ProductController {

	@Autowired
	ProductService productService;
	
	@GetMapping(value = "viewAll", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Product> findAllProducts(){
		return productService.findAllProducts();
	}
}
