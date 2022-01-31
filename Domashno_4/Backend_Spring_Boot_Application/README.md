# REST services
Use the following REST calls to get the desired information, you need to use a GET method for all of them.

## PlaceController

* https://backend-springboot-dians.herokuapp.com/api/places/food - use to get all the food places in the database

* https://backend-springboot-dians.herokuapp.com/api/places/drink - use to get all the drink places in the database


## LocationController

* https://backend-springboot-dians.herokuapp.com/api/location/food?lat=[]&lon=[] - use to get all the food places within 15km radius around that location

* https://backend-springboot-dians.herokuapp.com/api/location/drink?lat=[]&lon=[] - use to get all the drink places within 15km radius around that location

Replace the [] with specific values, you must include them both to get result.


## CityController

* https://backend-springboot-dians.herokuapp.com/api/cities - use to get all the cities in the database

* https://backend-springboot-dians.herokuapp.com/api/cities/food/[cityId] - use to get all the food places within 15km radius in that city

* https://backend-springboot-dians.herokuapp.com/api/cities/drink/[cityId] - use to get all the drink places within 15km radius in that city

Replace the [cityId] with one specific name from the city table, and it must be writen exactly as it is in the database.
Checkout the file cities_data_utf8.csv in the folder CSV-Data to see the specific names.