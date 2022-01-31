package mk.ukim.finki.dians.food_place.service.impl;

import mk.ukim.finki.dians.food_place.model.FoodPlace;
import mk.ukim.finki.dians.food_place.repository.FoodPlaceRepository;
import mk.ukim.finki.dians.food_place.service.FoodPlaceService;
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
    public List<FoodPlace> findByLocation(double lat, double lon) {
        return foodPlaceRepository.findAllByLocation(lat, lon);
    }

}
