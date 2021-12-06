package com.example.dians.demo.repository;

import com.example.dians.demo.bootstrap.DataHolder;
import com.example.dians.demo.model.Place;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PlaceRepository {
    public List<Place> findAll() {
        return DataHolder.placeList;
    }
}
