package mk.ukim.finki.dians.application.web.rest;

import mk.ukim.finki.dians.application.model.DrinkPlace;
import mk.ukim.finki.dians.application.model.FoodPlace;
import mk.ukim.finki.dians.application.service.DrinkPlaceService;
import mk.ukim.finki.dians.application.service.FoodPlaceService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/places")
public class PlacesController {

    private final DrinkPlaceService drinkPlaceService;
    private final FoodPlaceService foodPlaceService;

    public PlacesController(DrinkPlaceService drinkPlaceService, FoodPlaceService foodPlaceService) {
        this.drinkPlaceService = drinkPlaceService;
        this.foodPlaceService = foodPlaceService;
    }

    @PostMapping("/drink")
    public List<DrinkPlace> findAllDrinkPlaces() {
        return drinkPlaceService.findAll();
    }

    @PostMapping("/food")
    public List<FoodPlace> findAllFoodPlaces() {
        return foodPlaceService.findAll();
    }

}
