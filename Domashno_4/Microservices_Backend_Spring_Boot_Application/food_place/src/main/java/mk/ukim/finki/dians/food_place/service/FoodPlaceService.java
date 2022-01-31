package mk.ukim.finki.dians.food_place.service;

import mk.ukim.finki.dians.food_place.model.FoodPlace;

import java.util.List;

public interface FoodPlaceService {
    List<FoodPlace> findAll();
    List<FoodPlace> findByLocation(double lat, double lon);
}
