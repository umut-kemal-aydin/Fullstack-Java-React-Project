package com.arjuncodes.ogrencisistemi.controller;

import com.arjuncodes.ogrencisistemi.model.Ogrenci;
import com.arjuncodes.ogrencisistemi.repository.OgrenciRepository;
import com.arjuncodes.ogrencisistemi.service.OgrenciService;
import exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class OgrenciController {
    @Autowired
    private OgrenciRepository ogrenciRepository;


    //tüm ögrenci çekme
    @GetMapping("/ogrenci")
    public List<Ogrenci>getAllOgrenci(){
        return ogrenciRepository.findAll();
    }
    //öğrenci ekleme
    @PostMapping("/ogrenci")
    public Ogrenci createOgrenci(@RequestBody Ogrenci ogrenci){
        return ogrenciRepository.save(ogrenci);
    }
    //id ile öğrenci çekme
    @GetMapping("/ogrenci/{id}")
    public ResponseEntity <Ogrenci> getOgrenciById(@PathVariable int id){

        Ogrenci ogrenci = ogrenciRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundException("Bu id ile öğrenci yok:" + id));
        return ResponseEntity.ok(ogrenci);
    }
    //öğrenci güncelleme
    @PutMapping("/ogrenci/{id}")
    public ResponseEntity<Ogrenci> updateOgrenci(@PathVariable int id ,@RequestBody Ogrenci ogrenciDetails){
        Ogrenci ogrenci = ogrenciRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundException("Bu id ile öğrenci yok:" + id));
        ogrenci.setIsim(ogrenciDetails.getIsim());
        ogrenci.setSoyisim(ogrenciDetails.getSoyisim());
        ogrenci.setNumara(ogrenciDetails.getNumara());
        ogrenci.setTelnumara(ogrenciDetails.getTelnumara());

        Ogrenci updatedOgrenci =ogrenciRepository.save(ogrenci);
        return ResponseEntity.ok(updatedOgrenci);
    }
    //öğrenci silme
    @DeleteMapping("/ogrenci/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteOgrenci(@PathVariable int id){
        Ogrenci ogrenci= ogrenciRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundException("Bu id ile öğrenci yok"+ id));

        ogrenciRepository.delete(ogrenci);
        Map<String,Boolean> response = new HashMap<>();
        response.put("Silindi", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
