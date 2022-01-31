package mk.ukim.finki.dians.city.service.impl;

import mk.ukim.finki.dians.city.model.City;
import mk.ukim.finki.dians.city.repository.CityRepository;
import mk.ukim.finki.dians.city.service.CityService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CityServiceImpl implements CityService {

    private final CityRepository cityRepository;

    public CityServiceImpl(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    @Override
    public List<City> findAll() {
        return cityRepository.findAll();
    }

    @Override
    public Optional<City> findById(String id) {
        return cityRepository.findById(id);
    }

}
