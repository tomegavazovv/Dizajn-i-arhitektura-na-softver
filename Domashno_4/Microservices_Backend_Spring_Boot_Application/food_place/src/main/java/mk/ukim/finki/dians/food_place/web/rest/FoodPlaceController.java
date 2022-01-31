package mk.ukim.finki.dians.food_place.web.rest;

import mk.ukim.finki.dians.food_place.model.FoodPlace;
import mk.ukim.finki.dians.food_place.service.FoodPlaceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/food")
public class FoodPlaceController {

    private final FoodPlaceService foodPlaceService;


    public FoodPlaceController(FoodPlaceService foodPlaceService) {
        this.foodPlaceService = foodPlaceService;
    }

    @GetMapping()
    public List<FoodPlace> findAllFoodPlaces() {
        return foodPlaceService.findAll();
    }

    @GetMapping("/location")
    List<FoodPlace> findFoodPlacesByLocation(@RequestParam double lat, @RequestParam double lon) {
        return foodPlaceService.findByLocation(lat, lon);
    }
}
