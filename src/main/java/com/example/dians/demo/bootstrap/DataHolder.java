package com.example.dians.demo.bootstrap;

import com.example.dians.demo.model.Place;
import com.example.dians.demo.model.enumeration.Type;
import lombok.Getter;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Component
@Getter
public class DataHolder {
    public static List<Place> placeList = new ArrayList<>();

    @PostConstruct
    public void init() {
        placeList.add(new Place(Type.PUB, 41.9950681, 21.4355937, "Ирски паб Св. Патрик", "Кеј 13 Ноември", "", "10:00-24:00  Fr-Sa 10:00-01:00", "", "separated"));
        placeList.add(new Place(Type.PUB, 41.9953933, 21.4315704, "Пелистер", "Плоштад Македонија", "", "Mo-Th 07:00-00:00 Fr-Sa 07:00-01:00 Su 10:30-00:00", "", ""));
        placeList.add(new Place(Type.PUB, 41.9943261, 21.4342799, "Кај Џино", "", "", "Mo 08:00-24:00  Tu We Fr Sa 09:00-24:00  Th 09:00-23:00  Su 09:00-01:00", "", "outside"));
        placeList.add(new Place(Type.PUB, 41.9947645, 21.4245254, "Pastel Wine & Dine", "Булевар Климент Охридски", "", "Mo-Fr 06:30-21:00 Sa 06:30-17:00 Su 06:30-16:00", "", "outside"));
        placeList.add(new Place(Type.PUB, 41.9987513, 21.4204158, "Дестан", "Владимир Полежановски", "", "Mo-Su 09:00-23:00", "", "separated"));
    }
}
