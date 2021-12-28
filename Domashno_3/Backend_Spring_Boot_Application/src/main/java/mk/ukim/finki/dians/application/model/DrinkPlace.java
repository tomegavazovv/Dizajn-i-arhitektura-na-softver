package mk.ukim.finki.dians.application.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "drink_place")
public class DrinkPlace extends Place{

    public DrinkPlace() {
    }

    public DrinkPlace(double lon, double lat, String name, String opening_hours, String address, String outdoorSitting, String smoking, String amenity) {
        super(lon, lat, name, opening_hours, address, smoking, amenity);
    }
}
