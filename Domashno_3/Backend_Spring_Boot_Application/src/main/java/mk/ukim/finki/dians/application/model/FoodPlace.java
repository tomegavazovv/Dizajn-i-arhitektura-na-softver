package mk.ukim.finki.dians.application.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "food_place")
public class FoodPlace extends Place {

    private String cuisine;

    public FoodPlace() {
    }

    public FoodPlace(double lon, double lat, String name, String opening_hours, String address, String outdoorSitting, String smoking, String amenity, String cuisine) {
        super(lon, lat, name, opening_hours, address, smoking, amenity);
        this.cuisine = cuisine;
    }
}
