package mk.ukim.finki.dians.application.web.rest;

import mk.ukim.finki.dians.application.model.DrinkPlace;
import mk.ukim.finki.dians.application.model.FoodPlace;
import mk.ukim.finki.dians.application.service.DrinkPlaceService;
import mk.ukim.finki.dians.application.service.FoodPlaceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/location")
public class LocationController {
    private final FoodPlaceService foodPlaceService;
    private final DrinkPlaceService drinkPlaceService;

    public LocationController(FoodPlaceService foodPlaceService, DrinkPlaceService drinkPlaceService) {
        this.foodPlaceService = foodPlaceService;
        this.drinkPlaceService = drinkPlaceService;
    }

    @GetMapping("/food")
    List<FoodPlace> findFoodPlacesByLocation(@RequestParam double lat, @RequestParam double lon) {
        return foodPlaceService.findByLocation(lat, lon);
    }

    @GetMapping("/drink")
    List<DrinkPlace> findDrinkPlacesByLocation(@RequestParam double lat, @RequestParam double lon) {
        return drinkPlaceService.findByLocation(lat, lon);
    }

}
