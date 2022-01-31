package mk.ukim.finki.dians.drink_place.service.impl;

import mk.ukim.finki.dians.drink_place.model.DrinkPlace;
import mk.ukim.finki.dians.drink_place.repository.DrinkPlaceRepository;
import mk.ukim.finki.dians.drink_place.service.DrinkPlaceService;
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
    public List<DrinkPlace> findByLocation(double lat, double lon) {
        return drinkPlaceRepository.findAllByLocation(lat, lon);
    }

}
