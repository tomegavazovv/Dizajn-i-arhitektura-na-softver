package com.example.dians.demo.service.impl;

import com.example.dians.demo.model.Place;
import com.example.dians.demo.repository.PlaceRepository;
import com.example.dians.demo.service.PlaceService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlaceServiceImpl implements PlaceService {

    private final PlaceRepository placeRepository;

    public PlaceServiceImpl(PlaceRepository placeRepository) {
        this.placeRepository = placeRepository;
    }

    @Override
    public List<Place> listAll() {
        return placeRepository.findAll();
    }
}
