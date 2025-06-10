package com.student.management.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.student.management.entity.Student;
import com.student.management.repo.StudentRepo;
import com.student.management.service.StudentService;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:4200")
 
public class StudentController {
	
	@Autowired
	private StudentService service;
	
	@Autowired
	private StudentRepo repo;
	 
	@GetMapping("fechById/{id}")
	public Optional<Student> fechbyid(@PathVariable int id){
		return service.getById(id);
	}
	
	@GetMapping("/fechAll")
	public List<Student> fetchAll(){
		return service.fetchAll();
	}
	
	@PutMapping("/update")
	public ResponseEntity<?> update(@RequestBody Student student) {
		
		Optional<Student> existing = repo.findById(student.getId());
		
		if(!existing.isPresent()) {
			return ResponseEntity
					.status(HttpStatus.CONFLICT)
					.body("Student ID does not exist");
		}else {
			Student update = service.update(student);
			return ResponseEntity.accepted().body(update);
		}
		
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteById(@PathVariable int id) {
		 service.deleteById(id);
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody Student student) {
		
		Optional<Student> existing = repo.findById(student.getId());
		
		if(existing.isPresent()) {
			return ResponseEntity
					.status(HttpStatus.CONFLICT)
					.body("ID already exists. Please enter a different ID.");
		}else {
			
			Student saved = service.register(student);
			return ResponseEntity.status(HttpStatus.CREATED).body(student);

		}
		
		
	}

}
