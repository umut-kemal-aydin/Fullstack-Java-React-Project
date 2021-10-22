package com.arjuncodes.ogrencisistemi.service;

import com.arjuncodes.ogrencisistemi.model.Ogrenci;
import com.arjuncodes.ogrencisistemi.repository.OgrenciRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OgrenciServicempl implements OgrenciService {
    @Autowired
    private OgrenciRepository ogrenciRepository;
    @Override
    public Ogrenci saveOgrenci(Ogrenci ogrenci) {
        return ogrenciRepository.save(ogrenci);
    }

    @Override
    public List<Ogrenci> getAllOgrenci() {
        return ogrenciRepository.findAll();
    }
}
