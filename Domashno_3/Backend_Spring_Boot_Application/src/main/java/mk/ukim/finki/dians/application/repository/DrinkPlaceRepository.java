package mk.ukim.finki.dians.application.repository;

import mk.ukim.finki.dians.application.model.DrinkPlace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DrinkPlaceRepository extends JpaRepository<DrinkPlace, Long> {

    @Query(value = "SELECT * " +
            "FROM drink_place " +
            "WHERE acos(sin(radians(:Lat)) * sin(radians(lat)) + cos(radians(:Lat)) * cos(radians(lat)) * cos(radians(:Lon) - (radians(lon)))) * 6371 <= 15;",
            nativeQuery = true)
    List<DrinkPlace> findAllByCity(@Param("Lat") double Lat, @Param("Lon") double Lon);
}
