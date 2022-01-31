package mk.ukim.finki.dians.drink_place.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "drink_place")
public class DrinkPlace {

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

    public DrinkPlace() {
    }

    public DrinkPlace(double lon, double lat, String name, String opening_hours, String address, String smoking, String amenity) {
        this.lon = lon;
        this.lat = lat;
        this.name = name;
        this.opening_hours = opening_hours;
        this.address = address;
        this.smoking = smoking;
        this.amenity = amenity;
    }
}
