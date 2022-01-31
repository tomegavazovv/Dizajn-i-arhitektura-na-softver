package mk.ukim.finki.dians.drink_place.repository;

import mk.ukim.finki.dians.drink_place.model.DrinkPlace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DrinkPlaceRepository extends JpaRepository<DrinkPlace, Long> {

    //Native query(postgresql query) for fetching data from dirnk_place table where the places are within 15km radius from the given coordinates(latitude, longitude)
    @Query(value = "SELECT * " +
            "FROM drink_place " +
            "WHERE acos(sin(radians(:Lat)) * sin(radians(lat)) + cos(radians(:Lat)) * cos(radians(lat)) * cos(radians(:Lon) - (radians(lon)))) * 6371 <= 15;",
            nativeQuery = true)
    List<DrinkPlace> findAllByLocation(@Param("Lat") double Lat, @Param("Lon") double Lon);

}
