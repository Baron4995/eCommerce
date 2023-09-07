package com.eCommerce.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eCommerce.entity.Product;
import com.eCommerce.repository.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	ProductRepository productRepository;
	
	public String storeProduct(Product product) {
		productRepository.save(product);
		return "Product stored successfully ";
	}
	
	public List<Product> findAllProducts(){
		return productRepository.findAll();
	}
	
	public String deleteProductById(int pid) {
		Optional<Product> product = productRepository.findById(pid);
		if(product.isPresent()) {
			productRepository.deleteById(pid);
			return "Product deleted succssefully";
		}else {
			return "Product not found in database";
		}
	}
	
	public String updateProduct(Product product) {
		Optional<Product> result = productRepository.findById(product.getPid());
		if(result.isPresent()) {
			Product p = result.get();
			p.setStock(product.getStock());
			p.setPrice(product.getPrice());
			p.setDiscountPercentage(product.getDiscountPercentage());
			p.setThumbnail(product.getThumbnail());
			productRepository.saveAndFlush(p);
			return "Product successfully updated";
		}else {
			return "Product could not be updated";
		}
	}

}
