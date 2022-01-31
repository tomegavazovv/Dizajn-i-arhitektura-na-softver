export const FilterBySmoking = (smoking, data) => {
    if(smoking == 'no')
        return data
    else if(smoking == 'yes')
        return data.filter(obj =>  obj.smoking != null && obj.smoking.toLowerCase() != "no" && obj.smoking != '')

    return data

}