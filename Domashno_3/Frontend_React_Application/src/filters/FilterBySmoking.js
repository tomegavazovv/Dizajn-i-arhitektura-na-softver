export const FilterBySmoking = (smoking, data) => {
    if(smoking == 'no')
        return data.filter(obj => obj.smoking.toLowerCase() == "no")
    return data.filter(obj => obj.smoking.toLowerCase() != "no" && obj.smoking != "")

}