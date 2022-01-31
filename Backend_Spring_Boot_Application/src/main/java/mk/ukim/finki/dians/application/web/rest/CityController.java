package mk.ukim.finki.dians.application.web.rest;

import mk.ukim.finki.dians.application.model.City;
import mk.ukim.finki.dians.application.model.DrinkPlace;
import mk.ukim.finki.dians.application.model.FoodPlace;
import mk.ukim.finki.dians.application.service.CityService;
import mk.ukim.finki.dians.application.service.DrinkPlaceService;
import mk.ukim.finki.dians.application.service.FoodPlaceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/api/cities")
public class CityController {

    private final CityService cityService;
    private final FoodPlaceService foodPlaceService;
    private final DrinkPlaceService drinkPlaceService;

    public CityController(CityService cityService, FoodPlaceService foodPlaceService, DrinkPlaceService drinkPlaceService) {
        this.cityService = cityService;
        this.foodPlaceService = foodPlaceService;
        this.drinkPlaceService = drinkPlaceService;
    }

    @GetMapping()
    List<City> findAllCities() {
        return cityService.findAll();
    }

    @GetMapping("/food/{cityId}")
    List<FoodPlace> findFoodPlacesByCity(@PathVariable String cityId) {
        City city = cityService.findById(cityId).orElseThrow(RuntimeException::new);
        return foodPlaceService.findByCity(city);
    }

    @GetMapping("/drink/{cityId}")
    List<DrinkPlace> findDrinkPlacesByCity(@PathVariable String cityId) {
        City city = cityService.findById(cityId).orElseThrow(RuntimeException::new);
        return drinkPlaceService.findByCity(city);
    }

}
