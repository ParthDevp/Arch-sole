package com.archandsole.clinic.controller;
import com.archandsole.clinic.dto.*;
import com.archandsole.clinic.service.AppointmentService;
import jakarta.validation.Valid;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {
  private final AppointmentService service;
  public AppointmentController(AppointmentService service){this.service=service;}
  @PostMapping public ResponseEntity<AppointmentResponse> create(@Valid @RequestBody AppointmentRequest request){return ResponseEntity.status(HttpStatus.CREATED).body(service.create(request));}
}
