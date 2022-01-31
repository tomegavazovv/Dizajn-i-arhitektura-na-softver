import { FilterByName } from "./FilterByName"
import { FilterBySmoking } from "./FilterBySmoking"
import { FilterByTerrace } from "./FilterByTerrace"

export const MainFilter = (smoking, type, terrace, searchName, data) => {

    var filtered = data

    filtered = FilterByName(searchName, filtered)

    if (typeof (smoking) != 'undefined' && smoking != 'smoking')
        filtered = FilterBySmoking(smoking, filtered)
    if (typeof (type) != 'undefined' && type != 'type')
        filtered = filtered.filter(o => o.amenity == type)
    if (typeof (terrace) != 'undefined' && terrace != 'terrace')
        filtered = FilterByTerrace(terrace, filtered)
    
    

    return filtered
}