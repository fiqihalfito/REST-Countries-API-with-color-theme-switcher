import { Link } from "react-router-dom"

const Card = ({ item }) => {

    // console.log(item.cca2);

    return (

        <Link to={`/country/${item.cca2}`}>


            <div className="mb-12 md:mb-0 bg-white dark:bg-gray-700 dark:text-white rounded-lg overflow-hidden shadow md:h-full">
                <div className="md:h-40">
                    <img src={item.flags.svg} alt={item.flags.alt} loading="eager" className="object-fill h-full w-full" />

                </div>
                <div className="px-8 pt-8 pb-12">
                    <p className="mb-4 font-extrabold text-xl">{item.name.common}</p>
                    <ul>
                        <li>
                            <span className="font-semibold">Population: </span>
                            <span>{item.population}</span>
                        </li>
                        <li>
                            <span className="font-semibold">Region: </span>
                            <span>{item.region}</span>
                        </li>
                        <li>
                            <span className="font-semibold">Capital: </span>
                            <span>{item.capital}</span>
                        </li>
                    </ul>
                </div>
            </div>

        </Link>

    )
}

export default Card