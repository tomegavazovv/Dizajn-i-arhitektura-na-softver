package mk.ukim.finki.dians.food_place.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "food_place")
public class FoodPlace {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private double lon;

    private double lat;

    private String name;

    private String opening_hours;

    private String address;

    private String smoking;

    private String amenity;

    private String cuisine;

    public FoodPlace() {
    }

    public FoodPlace(double lon, double lat, String name, String opening_hours, String address, String smoking, String amenity, String cuisine) {
        this.lon = lon;
        this.lat = lat;
        this.name = name;
        this.opening_hours = opening_hours;
        this.address = address;
        this.smoking = smoking;
        this.amenity = amenity;
        this.cuisine = cuisine;
    }
}
