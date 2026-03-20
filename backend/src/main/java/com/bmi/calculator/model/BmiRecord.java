package com.bmi.calculator.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "bmi_records")
public class BmiRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "client_id", nullable = false)
    private String clientId;

    @Column(name = "weight_kg", nullable = false)
    private Double weightKg;

    @Column(name = "height_cm", nullable = false)
    private Double heightCm;

    @Column(name = "age", nullable = false)
    private Integer age;

    @Column(name = "gender", nullable = false)
    private String gender;

    @Column(name = "activity_level", nullable = false)
    private String activityLevel;

    @Column(name = "bmi_value", nullable = false)
    private Double bmiValue;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private LocalDate date;

    public BmiRecord() {}

    public BmiRecord(Long id, String clientId, Double weightKg, Double heightCm, Integer age, String gender, String activityLevel, Double bmiValue, String category, LocalDate date) {
        this.id = id;
        this.clientId = clientId;
        this.weightKg = weightKg;
        this.heightCm = heightCm;
        this.age = age;
        this.gender = gender;
        this.activityLevel = activityLevel;
        this.bmiValue = bmiValue;
        this.category = category;
        this.date = date;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getClientId() { return clientId; }
    public void setClientId(String clientId) { this.clientId = clientId; }

    public Double getWeightKg() { return weightKg; }
    public void setWeightKg(Double weightKg) { this.weightKg = weightKg; }

    public Double getHeightCm() { return heightCm; }
    public void setHeightCm(Double heightCm) { this.heightCm = heightCm; }

    public Integer getAge() { return age; }
    public void setAge(Integer age) { this.age = age; }

    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }

    public String getActivityLevel() { return activityLevel; }
    public void setActivityLevel(String activityLevel) { this.activityLevel = activityLevel; }

    public Double getBmiValue() { return bmiValue; }
    public void setBmiValue(Double bmiValue) { this.bmiValue = bmiValue; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public LocalDate getDate() { return date; }
    public void setDate(LocalDate date) { this.date = date; }

    public static BmiRecordBuilder builder() { return new BmiRecordBuilder(); }

    public static class BmiRecordBuilder {
        private Long id;
        private String clientId;
        private Double weightKg;
        private Double heightCm;
        private Integer age;
        private String gender;
        private String activityLevel;
        private Double bmiValue;
        private String category;
        private LocalDate date;

        public BmiRecordBuilder id(Long id) { this.id = id; return this; }
        public BmiRecordBuilder clientId(String clientId) { this.clientId = clientId; return this; }
        public BmiRecordBuilder weightKg(Double weightKg) { this.weightKg = weightKg; return this; }
        public BmiRecordBuilder heightCm(Double heightCm) { this.heightCm = heightCm; return this; }
        public BmiRecordBuilder age(Integer age) { this.age = age; return this; }
        public BmiRecordBuilder gender(String gender) { this.gender = gender; return this; }
        public BmiRecordBuilder activityLevel(String activityLevel) { this.activityLevel = activityLevel; return this; }
        public BmiRecordBuilder bmiValue(Double bmiValue) { this.bmiValue = bmiValue; return this; }
        public BmiRecordBuilder category(String category) { this.category = category; return this; }
        public BmiRecordBuilder date(LocalDate date) { this.date = date; return this; }

        public BmiRecord build() {
            return new BmiRecord(id, clientId, weightKg, heightCm, age, gender, activityLevel, bmiValue, category, date);
        }
    }
}
