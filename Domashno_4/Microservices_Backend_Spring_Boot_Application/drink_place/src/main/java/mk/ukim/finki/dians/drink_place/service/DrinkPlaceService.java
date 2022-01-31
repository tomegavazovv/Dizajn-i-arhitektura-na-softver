package mk.ukim.finki.dians.drink_place.service;

import mk.ukim.finki.dians.drink_place.model.DrinkPlace;

import java.util.List;

public interface DrinkPlaceService {
    List<DrinkPlace> findAll();
    List<DrinkPlace> findByLocation(double lat, double lon);
}
