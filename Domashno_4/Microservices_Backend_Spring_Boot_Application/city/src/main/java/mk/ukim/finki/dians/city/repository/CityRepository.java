package mk.ukim.finki.dians.city.repository;

import mk.ukim.finki.dians.city.model.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepository extends JpaRepository<City, String> {

}
