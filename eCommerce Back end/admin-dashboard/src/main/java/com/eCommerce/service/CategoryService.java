 package com.eCommerce.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eCommerce.entity.Category;
import com.eCommerce.repository.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	CategoryRepository categoryRepository;
	
	public String storeCategory(Category category) {
		categoryRepository.save(category);
		return "Category stored succesfully";
	}
	
	public List<Category> findAllCategories(){
		return categoryRepository.findAll();
	}
	
	public List<Category> searchCategoryByName(String categoryName){
		return categoryRepository.searchCategoryByName(categoryName);
	}
	
	public String deleteCategory(int cid) {
		Optional<Category> category = categoryRepository.findById(cid);
		if(category.isPresent()) {
			categoryRepository.deleteById(cid);
			return "Category successfully deleted";
		}else {
			return "Category not present";
		}
	}
	
	public String updateCategory(Category category) {
		Optional<Category> result = categoryRepository.findById(category.getCid());
		if(result.isPresent()) {
			Category categoryObj = result.get();
			categoryObj.setCid(category.getCid());
			categoryObj.setCategoryName(category.getCategoryName());
			categoryObj.setCategoryDescription(category.getCategoryDescription());
			categoryObj.setCategoryImageUrl(category.getCategoryImageUrl());
			categoryRepository.saveAndFlush(categoryObj);
			return "Category successfully updated";
		}else {
			return "Category not present";
		}
	}
}
