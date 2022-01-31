package mk.ukim.finki.dians.city.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class City {

    @Id
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
