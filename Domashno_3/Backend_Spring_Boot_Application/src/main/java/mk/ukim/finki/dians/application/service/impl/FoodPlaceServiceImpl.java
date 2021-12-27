package mk.ukim.finki.dians.application.service.impl;

import mk.ukim.finki.dians.application.model.City;
import mk.ukim.finki.dians.application.model.FoodPlace;
import mk.ukim.finki.dians.application.repository.FoodPlaceRepository;
import mk.ukim.finki.dians.application.service.FoodPlaceService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodPlaceServiceImpl implements FoodPlaceService {

    private final FoodPlaceRepository foodPlaceRepository;

    public FoodPlaceServiceImpl(FoodPlaceRepository foodPlaceRepository) {
        this.foodPlaceRepository = foodPlaceRepository;
    }

    @Override
    public List<FoodPlace> findAll() {
        return foodPlaceRepository.findAll();
    }

    @Override
    public List<FoodPlace> findByCity(City city) {
        return foodPlaceRepository.findAllByCity(city.getLat(), city.getLon());
    }
}
