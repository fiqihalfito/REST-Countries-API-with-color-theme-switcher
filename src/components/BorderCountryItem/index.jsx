import { useEffect, useState } from "react"
import { getCountryByCode } from "../../lib/data"

const BorderCountryItem = ({ code }) => {

    const [countryName, setCountryName] = useState("...")


    useEffect(() => {
        async function fetchData() {
            const country = await getCountryByCode(code)
            return setCountryName(country[0].name.common)
        }
        fetchData()
    }, [])


    return (
        <div className="bg-white dark:bg-gray-700 flex justify-center items-center text-center py-2 text-sm rounded shadow">
            {countryName}
        </div>
    )
}

export default BorderCountryItem