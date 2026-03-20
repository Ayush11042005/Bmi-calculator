package com.bmi.calculator.dto;

import java.time.LocalDate;

public class BmiResponse {
    private Long id;
    private Double weightKg;
    private Double bmiValue;
    private String category;
    private LocalDate date;
    private Double bmr;
    private Double tdee;
    
    private double heightCm;
    private int age;
    private String gender;
    private String activityLevel;

    public BmiResponse() {}

    public BmiResponse(Long id, Double weightKg, Double bmiValue, String category, LocalDate date, Double bmr, Double tdee, double heightCm, int age, String gender, String activityLevel) {
        this.id = id; this.weightKg = weightKg; this.bmiValue = bmiValue;
        this.category = category; this.date = date; this.bmr = bmr; this.tdee = tdee;
        this.heightCm = heightCm; this.age = age; this.gender = gender; this.activityLevel = activityLevel;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public Double getWeightKg() { return weightKg; }
    public void setWeightKg(Double weightKg) { this.weightKg = weightKg; }
    public Double getBmiValue() { return bmiValue; }
    public void setBmiValue(Double bmiValue) { this.bmiValue = bmiValue; }
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    public LocalDate getDate() { return date; }
    public void setDate(LocalDate date) { this.date = date; }
    public Double getBmr() { return bmr; }
    public void setBmr(Double bmr) { this.bmr = bmr; }
    public Double getTdee() { return tdee; }
    public void setTdee(Double tdee) { this.tdee = tdee; }

    public double getHeightCm() { return heightCm; }
    public void setHeightCm(double heightCm) { this.heightCm = heightCm; }
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }
    public String getActivityLevel() { return activityLevel; }
    public void setActivityLevel(String activityLevel) { this.activityLevel = activityLevel; }

    public static BmiResponseBuilder builder() { return new BmiResponseBuilder(); }

    public static class BmiResponseBuilder {
        private Long id;
        private Double weightKg;
        private Double bmiValue;
        private String category;
        private LocalDate date;
        private Double bmr;
        private Double tdee;
        private double heightCm;
        private int age;
        private String gender;
        private String activityLevel;

        public BmiResponseBuilder id(Long id) { this.id = id; return this; }
        public BmiResponseBuilder weightKg(Double weightKg) { this.weightKg = weightKg; return this; }
        public BmiResponseBuilder bmiValue(Double bmiValue) { this.bmiValue = bmiValue; return this; }
        public BmiResponseBuilder category(String category) { this.category = category; return this; }
        public BmiResponseBuilder date(LocalDate date) { this.date = date; return this; }
        public BmiResponseBuilder bmr(Double bmr) { this.bmr = bmr; return this; }
        public BmiResponseBuilder tdee(Double tdee) { this.tdee = tdee; return this; }
        
        public BmiResponseBuilder heightCm(double heightCm) { this.heightCm = heightCm; return this; }
        public BmiResponseBuilder age(int age) { this.age = age; return this; }
        public BmiResponseBuilder gender(String gender) { this.gender = gender; return this; }
        public BmiResponseBuilder activityLevel(String activityLevel) { this.activityLevel = activityLevel; return this; }

        public BmiResponse build() {
            return new BmiResponse(id, weightKg, bmiValue, category, date, bmr, tdee, heightCm, age, gender, activityLevel);
        }
    }
}
