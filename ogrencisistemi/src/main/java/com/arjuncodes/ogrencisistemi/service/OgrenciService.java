package com.arjuncodes.ogrencisistemi.service;

import com.arjuncodes.ogrencisistemi.model.Ogrenci;

import java.util.List;

public interface OgrenciService {
    public Ogrenci saveOgrenci(Ogrenci ogrenci);
    public List<Ogrenci> getAllOgrenci();

}
