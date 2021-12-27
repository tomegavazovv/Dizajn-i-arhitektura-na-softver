package mk.ukim.finki.dians.application.web.rest;

import mk.ukim.finki.dians.application.model.City;
import mk.ukim.finki.dians.application.model.DrinkPlace;
import mk.ukim.finki.dians.application.model.FoodPlace;
import mk.ukim.finki.dians.application.service.CityService;
import mk.ukim.finki.dians.application.service.DrinkPlaceService;
import mk.ukim.finki.dians.application.service.FoodPlaceService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/cities")
public class CityController {

    private final CityService cityService;
    private final FoodPlaceService foodPlaceService;
    private final DrinkPlaceService drinkPlaceService;

    public CityController(CityService cityService, FoodPlaceService foodPlaceService, DrinkPlaceService drinkPlaceService) {
        this.cityService = cityService;
        this.foodPlaceService = foodPlaceService;
        this.drinkPlaceService = drinkPlaceService;
    }

    @PostMapping()
    List<City> findAllCities() {
        return cityService.findAll();
    }

    @PostMapping("/food/{id}")
    List<FoodPlace> findFoodPlacesByCity(@PathVariable String id) {
        City city = cityService.findById(id).orElseThrow(RuntimeException::new);
        return foodPlaceService.findByCity(city);
    }

    @PostMapping("/drink/{id}")
    List<DrinkPlace> findDrinkPlacesByCity(@PathVariable String id) {
        City city = cityService.findById(id).orElseThrow(RuntimeException::new);
        return drinkPlaceService.findByCity(city);
    }

}
