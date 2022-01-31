export const FilterByTerrace = (terrace, data) => {
    console.log(data)
    if(terrace == 'yes')
        return data.filter(obj => obj.outdoor_sitting != null && obj.outdoor_sitting.toLowerCase() != 'no')

    if(terrace == 'no')
        return data.filter(obj => obj.outdoor_sitting != null && obj.outdoor_sitting.toLowerCase() == 'no')

    else if(terrace == 'terrace')
        return data


}