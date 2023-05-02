import { useEffect } from "react"
import SearchBar from "../../components/SearchBar"
import CardWrapper from "../../components/wrapper/CardWrapper"
import { getCountryByName, getCountryByRegion, getData } from "../../lib/data"
import { useState } from "react"
import Filter from "../../components/Filter"
import ErrorCard from "../../components/Error"
import LoadingIcon from "../../assets/icons/loading"

const Home = () => {

    const [countries, setCountries] = useState([])
    const [selectedFilter, setSelectedFilter] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)




    const handleFilter = async (region) => {

        // prevent render and prevent calling API if the selected is same
        if (region == selectedFilter) {
            return
        }

        setSelectedFilter(region)

        setIsLoading(true)
        let filteredCountries
        if (region) {
            filteredCountries = await getCountryByRegion(region)
        } else {
            filteredCountries = await getData()
        }

        setIsLoading(false)
        return setCountries(filteredCountries)
    }

    const handleSearch = async (input) => {
        setIsLoading(true)
        setSelectedFilter(null)

        const searchedCountries = input ? await getCountryByName(input) : await getData()

        if (searchedCountries.status) {
            setIsLoading(false)
            return setError(searchedCountries.message)
        }

        setIsLoading(false)
        setError(null)
        return setCountries(searchedCountries)
    }



    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            console.count('app rendered')
            const countries = await getData()
            setIsLoading(false)
            setCountries(countries)

        }
        fetchData()
    }, [])


    return (
        <div className="mt-8 md:mt-0">
            <div className="md:flex md:justify-between md:items-center md:my-12">
                <SearchBar handleSearch={handleSearch} />
                <Filter selectedFilter={selectedFilter} handleFilter={handleFilter} />
            </div>
            {
                isLoading
                    ?
                    <div className="flex justify-center">
                        <LoadingIcon />
                    </div>
                    : (!error ? <CardWrapper data={countries} /> : <ErrorCard message={error} />)
            }


        </div>
    )
}

export default Home