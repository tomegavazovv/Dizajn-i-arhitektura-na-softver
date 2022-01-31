package mk.ukim.finki.dians.drink_place.web.rest;

import mk.ukim.finki.dians.drink_place.model.DrinkPlace;
import mk.ukim.finki.dians.drink_place.service.DrinkPlaceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/drink")
public class DrinkPlaceController {

    private final DrinkPlaceService drinkPlaceService;


    public DrinkPlaceController(DrinkPlaceService drinkPlaceService) {
        this.drinkPlaceService = drinkPlaceService;
    }

    @GetMapping("")
    public List<DrinkPlace> findAllDrinkPlaces() {
        return drinkPlaceService.findAll();
    }

    @GetMapping("/location")
    List<DrinkPlace> findDrinkPlacesByLocation(@RequestParam double lat, @RequestParam double lon) {
        return drinkPlaceService.findByLocation(lat, lon);
    }
}