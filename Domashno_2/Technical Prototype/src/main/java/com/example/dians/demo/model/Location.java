package com.example.dians.demo.model;

import lombok.Data;

@Data
public class Location {
    private double lat;
    private double lon;

    public Location(double lat, double lon) {
        this.lat = lat;
        this.lon = lon;
    }
}
