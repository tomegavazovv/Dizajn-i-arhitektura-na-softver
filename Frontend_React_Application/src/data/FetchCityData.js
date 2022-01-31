export const cityData = async (cityId) => {
    if(cityId == 'City') return []
    var data = []

    await fetch(`https://backend-springboot-dians.herokuapp.com/api/cities/food/${cityId}`)
    .then(res => res.json())
    .then(json => data = json)
    await fetch(`https://backend-springboot-dians.herokuapp.com/api/cities/drink/${cityId}`)
    .then(res => res.json())
    .then(json => data = data.concat(json))

    return data
    
};

export default cityData