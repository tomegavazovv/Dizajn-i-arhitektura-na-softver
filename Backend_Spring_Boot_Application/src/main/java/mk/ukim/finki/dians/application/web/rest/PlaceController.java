package mk.ukim.finki.dians.application.web.rest;

import mk.ukim.finki.dians.application.model.DrinkPlace;
import mk.ukim.finki.dians.application.model.FoodPlace;
import mk.ukim.finki.dians.application.service.DrinkPlaceService;
import mk.ukim.finki.dians.application.service.FoodPlaceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/places")
public class PlaceController {

    private final DrinkPlaceService drinkPlaceService;
    private final FoodPlaceService foodPlaceService;

    public PlaceController(DrinkPlaceService drinkPlaceService, FoodPlaceService foodPlaceService) {
        this.drinkPlaceService = drinkPlaceService;
        this.foodPlaceService = foodPlaceService;
    }

    @GetMapping("/drink")
    public List<DrinkPlace> findAllDrinkPlaces() {
        return drinkPlaceService.findAll();
    }

    @GetMapping("/food")
    public List<FoodPlace> findAllFoodPlaces() {
        return foodPlaceService.findAll();
    }

}
