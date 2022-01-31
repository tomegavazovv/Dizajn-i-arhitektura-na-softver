package mk.ukim.finki.dians.city.web.rest;

import mk.ukim.finki.dians.city.model.City;
import mk.ukim.finki.dians.city.service.CityService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/cities")
public class CityController {

    private final CityService cityService;

    public CityController(CityService cityService) {
        this.cityService = cityService;
    }

    @GetMapping()
    List<City> findAllCities() {
        return cityService.findAll();
    }
}
