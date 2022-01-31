package mk.ukim.finki.dians.application.service;


import mk.ukim.finki.dians.application.model.City;
import mk.ukim.finki.dians.application.model.FoodPlace;

import java.util.List;

public interface FoodPlaceService {
    List<FoodPlace> findAll();
    List<FoodPlace> findByCity(City city);
    List<FoodPlace> findByLocation(double lat, double lon);
}
