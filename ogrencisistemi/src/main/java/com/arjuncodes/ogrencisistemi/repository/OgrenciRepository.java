package com.arjuncodes.ogrencisistemi.repository;

import com.arjuncodes.ogrencisistemi.model.Ogrenci;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OgrenciRepository extends JpaRepository<Ogrenci,Integer> {
}
