package com.eCommerce.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.eCommerce.entity.Orders;

@Repository
public interface OrdersRepository extends JpaRepository<Orders, Integer>{

//	@Query(value="select o.*, p.* from Orders o, Product p, ProductOrderInfo poi where p.pid = poi.productid and o.orderid = poi.orderid and o.email = :emailid",nativeQuery = true)
//	public List<Object> viewOrderByUser(@Param("emailid") String emailid);
	
	@Query(value="select o.*, p.pid, p.title, p.description, p.price, p.discountpercentage,p.rating,p.stock,p.brand,p.cid,p.thumbnail, poi.qty from Orders o, Product p, ProductOrderInfo poi where p.pid = poi.productid and o.orderid = poi.orderid and o.email = :emailid",nativeQuery = true)
	public List<Object> viewOrderByUser(@Param("emailid") String emailid);

//	@Query(value = "select o.*, p.* from Orders o, Product p, ProductOrderInfo poi where p.pid = poi.productid and o.orderid = poi.orderid;",nativeQuery = true)
//	public List<Object[]> getAllOrdersInfo();
	
	@Query(value = "select o.*, p.pid, p.title, p.description, p.price, p.discountpercentage,p.rating,p.stock,p.brand,p.cid,p.thumbnail, poi.qty from Orders o, Product p, ProductOrderInfo poi where p.pid = poi.productid and o.orderid = poi.orderid;",nativeQuery = true)
	public List<Object[]> getAllOrdersInfo();
}
