package com.student.management.service;

import java.util.List;
import java.util.Optional;

import com.student.management.entity.Student;

public interface StudentService {
	
	public Optional<Student>getById(int id);
	public void deleteById(int id);
	public Student update(Student student);
	public List<Student> fetchAll();
	public Student register(Student student);

}
