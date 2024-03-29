package com.eCommerce.admindashboard;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.client.RestTemplate;

import com.eCommerce.entity.Admin;
import com.eCommerce.repository.AdminRepository;

@SpringBootApplication(scanBasePackages = "com")
@EntityScan(basePackages = "com.eCommerce.entity")
@EnableJpaRepositories(basePackages = "com.eCommerce.repository")
@EnableEurekaClient
public class AdminDashboardApplication {
	
	@Autowired
	AdminRepository adminRepository;

	public PasswordEncoder password() {
		return new BCryptPasswordEncoder();
	}
	
	@PostConstruct
	public void doInitialization() {
		System.out.println("Post admin construct annotation executed");
		Admin admin = new Admin();
		admin.setEmailid("admin@gmail.com");
		admin.setPassword(password().encode("admin@123")); //admin password converted into hash algorithm
		adminRepository.save(admin);
		System.out.println("admin created...");
	}
	
	@Bean
	@LoadBalanced
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}

	public static void main(String[] args) {
		SpringApplication.run(AdminDashboardApplication.class, args);
		System.out.println("Admin server running on port 8181");
	}

}
