import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
// import { API_URL, geoApiOptions } from "../../Api"
import { url, options } from "../../Api"



function Search({ onSearchChange }) {

    const [search, setSearch] = useState(null)

    // function loadOptions(inputValue) {
    //     return fetch(`${API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
    //         .then(response => response.json())
    //         .then(response => console.log(response))
    //         .catch(err => console.log(err))
    // }

    async function loadOptions(inputValue) {
        try {
            const response = await fetch(`${url}?namePrefix=salem`, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }


    function handleOnChange(searchData) {
        setSearch(searchData)
        onSearchChange(searchData)
    }


    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search
