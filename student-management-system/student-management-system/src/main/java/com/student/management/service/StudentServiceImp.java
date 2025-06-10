package com.student.management.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.student.management.entity.Student;
import com.student.management.repo.StudentRepo;

import jakarta.persistence.EntityNotFoundException;

@Service
public class StudentServiceImp implements StudentService{
	
	
	@Autowired
	StudentRepo repo;

	@Override
	public Optional<Student> getById(int id) {
		return Optional.of(repo.findById(id).orElseThrow(()-> new EntityNotFoundException("Not Found"+id)));
	}

	@Override
	public void deleteById(int id) {
		// TODO Auto-generated method stub
		 repo.deleteById(id);;
	}

	@Override
	public Student update(Student student) {
		// TODO Auto-generated method stub

		return repo.save(student) ;
	}

	@Override
	public List<Student> fetchAll() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public Student register(Student student) {
		// TODO Auto-generated method stub
		return repo.save(student);
	}

}
