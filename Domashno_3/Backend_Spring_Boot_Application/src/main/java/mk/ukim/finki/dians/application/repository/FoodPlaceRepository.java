package mk.ukim.finki.dians.application.repository;

import mk.ukim.finki.dians.application.model.FoodPlace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodPlaceRepository extends JpaRepository<FoodPlace, Long> {


}
