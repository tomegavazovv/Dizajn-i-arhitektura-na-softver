package mk.ukim.finki.dians.application.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class Place {

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

    public Place() {
    }

    public Place(double lon, double lat, String name, String opening_hours, String address, String smoking, String amenity) {
        this.lon = lon;
        this.lat = lat;
        this.name = name;
        this.opening_hours = opening_hours;
        this.address = address;
        this.smoking = smoking;
        this.amenity = amenity;
    }
}
