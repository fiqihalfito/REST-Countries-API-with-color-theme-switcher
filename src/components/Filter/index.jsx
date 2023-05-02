import { memo, useEffect, useState } from "react"
import ArrowDown from "../../assets/icons/arrow-down"
import { getRegions } from "../../lib/data"

const Filter = ({ selectedFilter, handleFilter }) => {
    const [open, setOpen] = useState(false)
    const [regions, setRegions] = useState([])



    useEffect(() => {
        async function fetchData() {
            const regions = await getRegions()
            setRegions(regions)
        }

        fetchData()
    }, [])

    function handleClick(item) {
        handleFilter(item)
        return setOpen(false)
    }

    return (
        <div className="my-12 md:my-0 md:w-1/6 relative">
            <button
                className="flex items-center justify-between bg-white dark:bg-gray-700 rounded-md w-2/3 md:w-full p-4  shadow-md"
                onClick={() => setOpen(status => !status)}>
                <p className="text-sm dark:text-white">
                    {selectedFilter ?? 'Filter by Region'}
                </p>
                <ArrowDown />
            </button>
            {open &&
                <ul className="bg-white dark:bg-gray-700 dark:text-white w-2/3 md:w-full rounded-md shadow-md mt-2 px-6 py-4 flex flex-col gap-y-3 absolute">
                    <li
                        key={99}
                        className="text-slate-400 cursor-pointer"
                        onClick={() => handleClick(null)}
                    >
                        All
                    </li>
                    {regions?.map((item, i) => (
                        <li
                            key={i}
                            onClick={() => handleClick(item)}
                            className="cursor-pointer"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            }

        </div>

    )
}

export default Filter