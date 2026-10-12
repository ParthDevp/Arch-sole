package com.archandsole.clinic.entity;

import jakarta.persistence.*;
import java.time.*;

@Entity
@Table(name="appointments")
public class Appointment {
  @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Long id;
  @Column(nullable=false, unique=true, length=30)
  private String referenceNumber;
  @Column(nullable=false, length=100)
  private String fullName;
  @Column(nullable=false, length=30)
  private String phone;
  @Column(length=150)
  private String email;
  @Column(nullable=false, length=120)
  private String service;
  @Column(nullable=false)
  private LocalDate preferredDate;
  @Column(nullable=false)
  private LocalTime preferredTime;
  @Column(length=1000)
  private String message;
  @Column(nullable=false, length=30)
  private String status;
  @Column(nullable=false, updatable=false)
  private LocalDateTime createdAt;

  @PrePersist void prePersist(){ if(createdAt==null) createdAt=LocalDateTime.now(); if(status==null) status="NEW"; }
  public Long getId(){return id;} public void setId(Long id){this.id=id;}
  public String getReferenceNumber(){return referenceNumber;} public void setReferenceNumber(String v){referenceNumber=v;}
  public String getFullName(){return fullName;} public void setFullName(String v){fullName=v;}
  public String getPhone(){return phone;} public void setPhone(String v){phone=v;}
  public String getEmail(){return email;} public void setEmail(String v){email=v;}
  public String getService(){return service;} public void setService(String v){service=v;}
  public LocalDate getPreferredDate(){return preferredDate;} public void setPreferredDate(LocalDate v){preferredDate=v;}
  public LocalTime getPreferredTime(){return preferredTime;} public void setPreferredTime(LocalTime v){preferredTime=v;}
  public String getMessage(){return message;} public void setMessage(String v){message=v;}
  public String getStatus(){return status;} public void setStatus(String v){status=v;}
  public LocalDateTime getCreatedAt(){return createdAt;} public void setCreatedAt(LocalDateTime v){createdAt=v;}
}
