package mk.ukim.finki.dians.application.repository;

import mk.ukim.finki.dians.application.model.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CityRepository extends JpaRepository<City, String> {

}
