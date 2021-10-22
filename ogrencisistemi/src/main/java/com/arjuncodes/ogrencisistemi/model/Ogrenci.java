package com.arjuncodes.ogrencisistemi.model;


import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity

public class Ogrenci {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private int id;


    private String isim;


    private String soyisim;


    private String numara;


    private String telnumara;


    public Ogrenci() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getIsim() {
        return isim;
    }

    public void setIsim(String isim) {
        this.isim = isim;
    }

    public String getSoyisim() {
        return soyisim;
    }

    public void setSoyisim(String soyisim) {
        this.soyisim = soyisim;
    }

    public String getNumara() {
        return numara;
    }

    public void setNumara(String numara) {
        this.numara = numara;
    }

    public String getTelnumara() {
        return telnumara;
    }

    public void setTelnumara(String telnumara) {
        this.telnumara = telnumara;
    }
}
