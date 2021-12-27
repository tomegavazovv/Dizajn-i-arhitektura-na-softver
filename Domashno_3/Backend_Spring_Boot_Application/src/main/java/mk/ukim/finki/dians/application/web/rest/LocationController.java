package mk.ukim.finki.dians.application.web.rest;

import mk.ukim.finki.dians.application.model.DrinkPlace;
import mk.ukim.finki.dians.application.model.FoodPlace;
import mk.ukim.finki.dians.application.service.DrinkPlaceService;
import mk.ukim.finki.dians.application.service.FoodPlaceService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/location")
public class LocationController {
    private final FoodPlaceService foodPlaceService;
    private final DrinkPlaceService drinkPlaceService;

    public LocationController(FoodPlaceService foodPlaceService, DrinkPlaceService drinkPlaceService) {
        this.foodPlaceService = foodPlaceService;
        this.drinkPlaceService = drinkPlaceService;
    }

    @PostMapping("/food")
    List<FoodPlace> findFoodPlacesByLocation(@RequestParam double lat, @RequestParam double lon) {
        return foodPlaceService.findByLocation(lat, lon);
    }

    @PostMapping("/drink")
    List<DrinkPlace> findDrinkPlacesByLocation(@RequestParam double lat, @RequestParam double lon) {
        return drinkPlaceService.findByLocation(lat, lon);
    }
}
