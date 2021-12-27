package mk.ukim.finki.dians.application.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String city;

    private double lat;

    private double lon;

    public City() {
    }

    public City(String city, double lat, double lon) {
        this.city = city;
        this.lat = lat;
        this.lon = lon;
    }
}
