package com.bmi.calculator.controller;

import com.bmi.calculator.dto.BmiRequest;
import com.bmi.calculator.dto.BmiResponse;
import com.bmi.calculator.service.BmiService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bmi")
public class BmiController {

    private final BmiService bmiService;

    public BmiController(BmiService bmiService) {
        this.bmiService = bmiService;
    }

    @PostMapping("/save")
    public ResponseEntity<BmiResponse> saveBmi(@Valid @RequestBody BmiRequest request) {
        BmiResponse response = bmiService.calculateAndSaveBmi(request);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/history")
    public ResponseEntity<List<BmiResponse>> getHistory(@RequestParam String clientId) {
        List<BmiResponse> history = bmiService.getBmiHistory(clientId);
        return ResponseEntity.ok(history);
    }

    @GetMapping("/latest")
    public ResponseEntity<BmiResponse> getLatest(@RequestParam String clientId) {
        BmiResponse latest = bmiService.getLatestBmi(clientId);
        if (latest == null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(latest);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteRecord(@PathVariable Long id, @RequestParam String clientId) {
        try {
            bmiService.deleteBmiRecord(id, clientId);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
