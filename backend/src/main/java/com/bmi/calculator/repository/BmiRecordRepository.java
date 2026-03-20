package com.bmi.calculator.repository;

import com.bmi.calculator.model.BmiRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface BmiRecordRepository extends JpaRepository<BmiRecord, Long> {

    List<BmiRecord> findByClientIdOrderByDateDesc(String clientId);

    Optional<BmiRecord> findFirstByClientIdOrderByDateDesc(String clientId);
}
