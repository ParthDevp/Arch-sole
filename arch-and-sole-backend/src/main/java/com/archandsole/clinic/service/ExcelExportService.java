package com.archandsole.clinic.service;
import com.archandsole.clinic.entity.Appointment;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;
import java.io.*;
import java.util.*;
@Service
public class ExcelExportService {
  public byte[] appointments(List<Appointment> items) throws IOException {
    try(Workbook wb=new XSSFWorkbook(); ByteArrayOutputStream out=new ByteArrayOutputStream()){
      Sheet s=wb.createSheet("Appointments");
      String[] headers={"Reference","Name","Phone","Email","Service","Preferred Date","Preferred Time","Message","Status","Created At"};
      Row h=s.createRow(0); CellStyle hs=wb.createCellStyle(); Font f=wb.createFont(); f.setBold(true); hs.setFont(f);
      for(int i=0;i<headers.length;i++){Cell c=h.createCell(i);c.setCellValue(headers[i]);c.setCellStyle(hs);} int r=1;
      for(Appointment a:items){Row row=s.createRow(r++);String[] vals={a.getReferenceNumber(),a.getFullName(),a.getPhone(),n(a.getEmail()),a.getService(),String.valueOf(a.getPreferredDate()),String.valueOf(a.getPreferredTime()),n(a.getMessage()),a.getStatus(),String.valueOf(a.getCreatedAt())};for(int i=0;i<vals.length;i++)row.createCell(i).setCellValue(vals[i]);}
      for(int i=0;i<headers.length;i++)s.autoSizeColumn(i); wb.write(out); return out.toByteArray();
    }
  }
  private String n(String v){return v==null?"":v;}
}
