package com.example.dians.demo.model;

import com.example.dians.demo.model.enumeration.Type;
import lombok.Data;

@Data
public class Place {
    private Long id;
    private Type type;
    private Location location;
    private String name;
    private String openingHours;
    private String outdoorSitting;
    private String smoking;
    private String cuisine;
    private String address;

    public Place(Type type, Location location, String name, String address, String openingHours, String outdoorSitting, String smoking, String cuisine) {
        this.type = type;
        this.location = location;
        this.name = name;
        this.openingHours = openingHours;
        this.outdoorSitting = outdoorSitting;
        this.smoking = smoking;
        this.cuisine = cuisine;
        this.address = address;

    }

    public Place(Type type, double lat, double lon, String name, String address, String cuisine, String openingHours, String outdoorSitting, String smoking) {
        this.type = type;
        this.location = new Location(lat, lon);
        this.name = name;
        this.openingHours = openingHours;
        this.outdoorSitting = outdoorSitting;
        this.smoking = smoking;
        this.cuisine = cuisine;
        this.address = address;
    }
}
