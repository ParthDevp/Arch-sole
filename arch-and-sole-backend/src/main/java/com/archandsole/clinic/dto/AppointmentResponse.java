package com.archandsole.clinic.dto;
import java.time.*;
public record AppointmentResponse(Long id,String referenceNumber,String fullName,String phone,String email,String service,LocalDate preferredDate,LocalTime preferredTime,String message,String status,LocalDateTime createdAt) {}
