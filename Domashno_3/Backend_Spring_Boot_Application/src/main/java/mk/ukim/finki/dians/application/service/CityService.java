package mk.ukim.finki.dians.application.service;

import mk.ukim.finki.dians.application.model.City;

import java.util.List;
import java.util.Optional;

public interface CityService {
    List<City> findAll();
    Optional<City> findById(String id);
}
