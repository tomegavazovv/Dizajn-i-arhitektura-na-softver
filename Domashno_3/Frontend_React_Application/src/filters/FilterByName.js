export const FilterByName = (searchName, data) => {
    return data.filter(o => o.name.toLowerCase().includes(searchName.toLowerCase()))
}