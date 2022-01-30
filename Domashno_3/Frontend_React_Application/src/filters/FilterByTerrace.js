export const FilterByTerrace = (terrace, data) => {

    if(terrace == 'yes')
        return data.filter(obj => obj.outdoor_sitting != "")

    else if(terrace == 'terrace')
        return data

    return data.filter(obj => obj.outdoor_sitting != undefined && obj.outdoor_sitting.toLowerCase() == 'no')

}