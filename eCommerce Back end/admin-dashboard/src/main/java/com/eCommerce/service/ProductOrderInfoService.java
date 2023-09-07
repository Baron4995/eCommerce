package com.eCommerce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eCommerce.entity.ProductOrderInfo;
import com.eCommerce.repository.ProductOrderInfoRepository;

@Service
public class ProductOrderInfoService {
	
	@Autowired
	ProductOrderInfoRepository productOrderInfoRepository;
	
	public String storeProductOrderInfo(List<ProductOrderInfo> productOrderInfo) {
		productOrderInfoRepository.saveAll(productOrderInfo);
		return "Product order info stored";
	}

}
