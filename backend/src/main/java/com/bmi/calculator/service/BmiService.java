package com.bmi.calculator.service;

import com.bmi.calculator.dto.BmiRequest;
import com.bmi.calculator.dto.BmiResponse;
import com.bmi.calculator.model.BmiRecord;
import com.bmi.calculator.repository.BmiRecordRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BmiService {

    private final BmiRecordRepository bmiRecordRepository;

    public BmiService(BmiRecordRepository bmiRecordRepository) {
        this.bmiRecordRepository = bmiRecordRepository;
    }

    @Transactional
    public BmiResponse calculateAndSaveBmi(BmiRequest request) {
        double heightInMeters = request.getHeightCm() / 100.0;
        double bmiValue = request.getWeightKg() / (heightInMeters * heightInMeters);
        double roundedBmi = Math.round(bmiValue * 10.0) / 10.0;
        String category = determineCategory(roundedBmi);

        BmiRecord record = BmiRecord.builder()
                .clientId(request.getClientId())
                .weightKg(request.getWeightKg())
                .heightCm(request.getHeightCm())
                .age(request.getAge())
                .gender(request.getGender())
                .activityLevel(request.getActivityLevel())
                .bmiValue(roundedBmi)
                .category(category)
                .date(LocalDate.now())
                .build();

        BmiRecord savedRecord = bmiRecordRepository.save(record);
        return mapToResponse(savedRecord);
    }

    public List<BmiResponse> getBmiHistory(String clientId) {
        return bmiRecordRepository.findByClientIdOrderByDateDesc(clientId)
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public BmiResponse getLatestBmi(String clientId) {
        Optional<BmiRecord> latestRecord = bmiRecordRepository.findFirstByClientIdOrderByDateDesc(clientId);
        return latestRecord.map(this::mapToResponse).orElse(null);
    }

    @Transactional
    public void deleteBmiRecord(Long recordId, String clientId) {
        BmiRecord record = bmiRecordRepository.findById(recordId)
                .orElseThrow(() -> new RuntimeException("Record not found"));
        
        if (!record.getClientId().equals(clientId)) {
            throw new RuntimeException("Unauthorized to delete this record!");
        }
        
        bmiRecordRepository.delete(record);
    }

    private String determineCategory(double bmi) {
        if (bmi < 18.5) return "Underweight";
        if (bmi < 25.0) return "Normal";
        if (bmi < 30.0) return "Overweight";
        return "Obese";
    }

    private double calculateBmr(BmiRecord record) {
        if ("Male".equalsIgnoreCase(record.getGender())) {
            return (10 * record.getWeightKg()) + (6.25 * record.getHeightCm()) - (5 * record.getAge()) + 5;
        } else {
            return (10 * record.getWeightKg()) + (6.25 * record.getHeightCm()) - (5 * record.getAge()) - 161;
        }
    }

    private double calculateTdee(double bmr, String activityLevel) {
        double multiplier = 1.2;
        if (activityLevel != null) {
            switch (activityLevel) {
                case "Light": multiplier = 1.375; break;
                case "Moderate": multiplier = 1.55; break;
                case "Active": multiplier = 1.725; break;
                case "Very Active": multiplier = 1.9; break;
                case "Sedentary": default: multiplier = 1.2; break;
            }
        }
        return bmr * multiplier;
    }

    private BmiResponse mapToResponse(BmiRecord record) {
        double bmr = Math.round(calculateBmr(record) * 10.0) / 10.0;
        double tdee = Math.round(calculateTdee(bmr, record.getActivityLevel()) * 10.0) / 10.0;
        
        return BmiResponse.builder()
                .id(record.getId())
                .weightKg(record.getWeightKg())
                .bmiValue(record.getBmiValue())
                .category(record.getCategory())
                .date(record.getDate())
                .bmr(bmr)
                .tdee(tdee)
                .heightCm(record.getHeightCm())
                .age(record.getAge())
                .gender(record.getGender())
                .activityLevel(record.getActivityLevel())
                .build();
    }
}
