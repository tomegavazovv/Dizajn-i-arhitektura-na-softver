export const FilterByName = (searchName, data) => {
    if(searchName == '') return data
    return data.filter(o => o.name.toLowerCase().includes(searchName.toLowerCase()))
}