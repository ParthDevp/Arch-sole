package com.archandsole.clinic.dto;
import jakarta.validation.constraints.*;
import java.time.*;
public record AppointmentRequest(
  @NotBlank @Size(max=100) String fullName,
  @NotBlank @Size(max=30) String phone,
  @Email @Size(max=150) String email,
  @NotBlank @Size(max=120) String service,
  @NotNull @FutureOrPresent LocalDate preferredDate,
  @NotNull LocalTime preferredTime,
  @Size(max=1000) String message
) {}
