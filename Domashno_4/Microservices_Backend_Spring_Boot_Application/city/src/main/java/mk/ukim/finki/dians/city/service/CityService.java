package mk.ukim.finki.dians.city.service;

import mk.ukim.finki.dians.city.model.City;

import java.util.List;
import java.util.Optional;

public interface CityService {
    List<City> findAll();
    Optional<City> findById(String id);
}
