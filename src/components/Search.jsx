import React from 'react'
import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate'
import { url, geoDBoptions } from "../api.js";

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }
    const loadOptions = (inputvalue) => {
        return fetch(
            `${url}?minPopulation=1000000&namePrefix=${inputvalue}`,
            geoDBoptions
        )
            .then((response) => response.json())
            .then((response) => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        };
                    }),
                };
            });
    }
    return (
        <div>
            <AsyncPaginate
                placeholder="Search for city"
                debounceTimeout={600}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}
            />

        </div>
    )
}

export default Search