package mk.ukim.finki.dians.application.service.impl;

import mk.ukim.finki.dians.application.model.City;
import mk.ukim.finki.dians.application.model.DrinkPlace;
import mk.ukim.finki.dians.application.repository.DrinkPlaceRepository;
import mk.ukim.finki.dians.application.service.DrinkPlaceService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DrinkPlaceServiceImpl implements DrinkPlaceService {

    private final DrinkPlaceRepository drinkPlaceRepository;

    public DrinkPlaceServiceImpl(DrinkPlaceRepository drinkPlaceRepository) {
        this.drinkPlaceRepository = drinkPlaceRepository;
    }

    @Override
    public List<DrinkPlace> findAll() {
        return drinkPlaceRepository.findAll();
    }

    @Override
    public List<DrinkPlace> findByCity(City city) {
        return drinkPlaceRepository.findAllByLocation(city.getLat(), city.getLon());
    }

    @Override
    public List<DrinkPlace> findByLocation(double lat, double lon) {
        return drinkPlaceRepository.findAllByLocation(lat, lon);
    }

}
