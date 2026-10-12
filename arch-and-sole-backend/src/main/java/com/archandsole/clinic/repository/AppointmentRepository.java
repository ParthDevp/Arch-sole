package com.archandsole.clinic.repository;
import com.archandsole.clinic.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
public interface AppointmentRepository extends JpaRepository<Appointment,Long> {}
