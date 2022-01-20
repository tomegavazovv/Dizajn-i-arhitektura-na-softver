# Rest services
Use the following rest calls to get the desired information, you need to use a GET method for all of them.

## PlaceController

* http://localhost:8080/api/places/food - use to get all the food places in the database

* http://localhost:8080/api/places/drink - use to get all the drink places in the database


## LocationController

* http://localhost:8080/api/location/food?lat=[]&lon=[] - use to get all the food places within 15km radius around that location

* http://localhost:8080/api/location/drink?lat=[]&lon=[] - use to get all the drink places within 15km radius around that location

Replace the [] with specific values, you must include them both to get result.


## CityController

* http://localhost:8080/api/cities/food/[cityId] - use to get all the food places within 15km radius in that city

* http://localhost:8080/api/cities/drink/[cityId] - use to get all the drink places within 15km radius in that city

Replace the [cityId] with one specific name from the city table, and it must be writen exactly as it is in the database.
Checkout the file cities_data_utf8.csv in the folder CSV-Data to see the specific names.