
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import MoonIcon from "../../assets/icons/moon"

const Header = () => {

    const handleTheme = useContext(ThemeContext)

    const handleClick = () => {
        return handleTheme()
    }

    return (
        <div className='flex items-center justify-between  px-4 md:px-20 py-8 bg-white dark:bg-gray-700 dark:text-white shadow'>
            <p className='font-extrabold md:text-2xl'>Where in the world?</p>
            <button
                className='flex items-center gap-2'
                onClick={handleClick}
            >
                <MoonIcon />
                <span className='font-semibold'>Dark mode</span>
            </button>
        </div>
    )
}

export default Header