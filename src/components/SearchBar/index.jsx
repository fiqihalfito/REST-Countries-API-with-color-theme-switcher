import { useRef, useState } from "react"
import SearchIcon from "../../assets/icons/search"

const SearchBar = ({ handleSearch }) => {

    const [input, setInput] = useState(null)
    const inputRef = useRef(null)

    const handleChange = (e) => {
        const value = e.target.value
        return setInput(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        return handleSearch(input)
    }

    const focusInput = () => {
        inputRef.current.focus()
    }

    return (
        <form className="group bg-white dark:bg-gray-700 px-8 flex items-center gap-8 py-4 shadow-lg rounded-md md:w-1/3"
            onClick={focusInput}>
            <button
                type="submit"
                onClick={handleSubmit}>
                <SearchIcon />
            </button>
            <input
                ref={inputRef}
                type="text"
                name='search'
                placeholder='Search for a country...'
                className='text-sm outline-none dark:bg-gray-700 dark:text-white'
                onChange={handleChange} />
        </form>
    )
}

export default SearchBar