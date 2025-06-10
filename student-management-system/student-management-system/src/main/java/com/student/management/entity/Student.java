package com.student.management.entity;

import java.time.LocalDate;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class Student {
	
	@Id
	int id;
	@Column(name="studentName")
	String name;
	@Column(name="StudentEmail")
	String email;
	@Column
	int age;
	@Column
	String department;
	@Column
	String course;
	@Column
	double phoneNo;
	@Column(name="PermanentAddress")
	String address;
	@Column(name="AdmissionDate")
	@Temporal(TemporalType.DATE)
	LocalDate dateOfAdmission;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getCourse() {
		return course;
	}
	public void setCourse(String course) {
		this.course = course;
	}
	public double getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(double phoneNo) {
		this.phoneNo = phoneNo;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public LocalDate getDateOfAdmission() {
		return dateOfAdmission;
	}
	public void setDateOfAdmission(LocalDate dateOfAdmission) {
		this.dateOfAdmission = dateOfAdmission;
	}
	@Override
	public String toString() {
		return "Student [id=" + id + ", name=" + name + ", email=" + email + ", age=" + age + ", department="
				+ department + ", course=" + course + ", phoneNo=" + phoneNo + ", address=" + address
				+ ", dateOfAdmission=" + dateOfAdmission + "]";
	}
	public Student(int id, String name, String email, int age, String department, String course, double phoneNo,
			String address, LocalDate dateOfAdmission) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.age = age;
		this.department = department;
		this.course = course;
		this.phoneNo = phoneNo;
		this.address = address;
		this.dateOfAdmission = dateOfAdmission;
	}
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
}
