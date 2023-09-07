package com.eCommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.eCommerce.entity.Product;
import com.eCommerce.service.ProductService;

@RestController
@RequestMapping("admin/product")
@CrossOrigin
public class ProductController {
	
	@Autowired
	ProductService productService;
	
	@PostMapping(value = "storeProduct", consumes = MediaType.APPLICATION_JSON_VALUE)
	public String storeProduct(@RequestBody Product product) {
		return productService.storeProduct(product);
	}
	
	@GetMapping(value = "findAllProducts", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Product> findAllProducts(){
		return productService.findAllProducts();
	}
	
	@DeleteMapping(value = "deleteProduct")
	public String deleteProduct(@RequestParam("pid") int pid) {
		return productService.deleteProductById(pid);
	}
	
	@PutMapping(value = "updateProduct", consumes = MediaType.APPLICATION_JSON_VALUE)
	public String updateProduct(@RequestBody Product product) {
		return productService.updateProduct(product);
	}
}
