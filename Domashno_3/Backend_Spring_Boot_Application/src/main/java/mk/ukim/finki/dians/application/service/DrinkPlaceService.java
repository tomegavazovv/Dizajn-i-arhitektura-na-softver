package mk.ukim.finki.dians.application.service;


import mk.ukim.finki.dians.application.model.City;
import mk.ukim.finki.dians.application.model.DrinkPlace;

import java.util.List;

public interface DrinkPlaceService {
    List<DrinkPlace> findAll();
    List<DrinkPlace> findByCity(City city);
    List<DrinkPlace> findByLocation(double lat, double lon);
}
