package com.example.dog_adoption.service;

import com.example.dog_adoption.dao.DogDAO;
import com.example.dog_adoption.model.Dog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DogService {

    @Autowired
    private DogDAO dogDAO;

    public List<Dog> getAllDogs() {
        return dogDAO.findAll();
    }
}
