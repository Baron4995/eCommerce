package com.eCommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.eCommerce.entity.Accounts;

@Repository
public interface AccountsRepository extends JpaRepository<Accounts, Integer>{
	
	@Query("select a from Accounts a where a.emailid = :emailid")
	public Accounts findBalance(@Param("emailid") String emailid);
	
}
