package com.archandsole.clinic.service;
import com.archandsole.clinic.dto.*;
import com.archandsole.clinic.entity.Appointment;
import com.archandsole.clinic.repository.AppointmentRepository;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.time.*;
import java.util.*;

@Service
public class AppointmentService {
  private final AppointmentRepository repository;
  public AppointmentService(AppointmentRepository repository){this.repository=repository;}

  @Transactional
  public AppointmentResponse create(AppointmentRequest r){
    if(r.preferredTime().isBefore(LocalTime.of(10,0)) || r.preferredTime().isAfter(LocalTime.of(20,0))) throw new IllegalArgumentException("Please choose a time between 10:00 AM and 8:00 PM.");
    if(r.preferredDate().getDayOfWeek()==DayOfWeek.SUNDAY) throw new IllegalArgumentException("The clinic is closed on Sunday. Please choose Monday to Saturday.");
    Appointment a=new Appointment();
    a.setReferenceNumber("AS-"+LocalDate.now().toString().replace("-","")+"-"+UUID.randomUUID().toString().substring(0,6).toUpperCase());
    a.setFullName(r.fullName().trim()); a.setPhone(r.phone().trim()); a.setEmail(r.email()==null?null:r.email().trim()); a.setService(r.service().trim()); a.setPreferredDate(r.preferredDate()); a.setPreferredTime(r.preferredTime()); a.setMessage(r.message()); a.setStatus("NEW");
    return map(repository.save(a));
  }
  public List<AppointmentResponse> list(){return repository.findAll(Sort.by(Sort.Direction.DESC,"createdAt")).stream().map(this::map).toList();}
  public List<Appointment> listEntities(){return repository.findAll(Sort.by(Sort.Direction.DESC,"createdAt"));}
  private AppointmentResponse map(Appointment a){return new AppointmentResponse(a.getId(),a.getReferenceNumber(),a.getFullName(),a.getPhone(),a.getEmail(),a.getService(),a.getPreferredDate(),a.getPreferredTime(),a.getMessage(),a.getStatus(),a.getCreatedAt());}
}
