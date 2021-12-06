package com.example.dians.demo.web.rest;

import com.example.dians.demo.model.Place;
import com.example.dians.demo.service.PlaceService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/places")
public class PlacesController {

    private final PlaceService placeService;

    public PlacesController(PlaceService placeService) {
        this.placeService = placeService;
    }

    @GetMapping
    public List<Place> findAll() {
        return placeService.listAll();
    }
}
