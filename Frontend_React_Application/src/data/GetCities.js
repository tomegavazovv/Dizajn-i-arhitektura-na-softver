
export const GetCities = async () => {
    var cities = []
    await fetch('https://backend-springboot-dians.herokuapp.com/api/cities')
    .then(res => res.json())
    .then(json => cities = json)

    return cities;
};
