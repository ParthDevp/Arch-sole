package com.archandsole.clinic.controller;
import com.archandsole.clinic.dto.AppointmentResponse;
import com.archandsole.clinic.service.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import java.io.IOException;
import java.util.*;
@RestController
@RequestMapping("/api/admin/appointments")
public class AdminAppointmentController {
  private final AppointmentService appointments; private final ExcelExportService excel;
  public AdminAppointmentController(AppointmentService appointments,ExcelExportService excel){this.appointments=appointments;this.excel=excel;}
  @GetMapping public List<AppointmentResponse> list(){return appointments.list();}
  @GetMapping(value="/export",produces="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
  public ResponseEntity<byte[]> export() throws IOException {byte[] bytes=excel.appointments(appointments.listEntities());return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION,"attachment; filename=arch-and-sole-appointments.xlsx").contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")).body(bytes);}
}
