package mk.ukim.finki.dians.application.service.impl;

import mk.ukim.finki.dians.application.model.City;
import mk.ukim.finki.dians.application.repository.CityRepository;
import mk.ukim.finki.dians.application.service.CityService;
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
