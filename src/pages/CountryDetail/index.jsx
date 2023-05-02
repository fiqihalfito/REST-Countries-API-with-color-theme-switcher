import { Link, useParams } from "react-router-dom"
import BackIcon from "../../assets/icons/back"
import { useEffect, useState } from "react"
import { getCountryByCode } from "../../lib/data"
import BorderCountryItem from "../../components/BorderCountryItem";
import LoadingIcon from "../../assets/icons/loading";

const CountryDetail = () => {

    const { code } = useParams()
    const [source, setSource] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const detail = await getCountryByCode(code)
            setSource(detail[0])
        }

        fetchData()
    }, [])

    console.log(source);

    if (!source) {
        return (
            <div className="flex justify-center mt-8">
                <LoadingIcon />
            </div>
        )
    }

    const country = {
        name: source?.name?.common,
        nativeName: source.name.nativeName ? Object.values(source.name.nativeName).map(type => type.common).join(", ") : source?.name?.common,
        population: source.population ? source.population : "-",
        region: source.region ? source.region : "-",
        subRegion: source.subregion ? source.subregion : "-",
        capital: source.capital ? source.capital.join(", ") : "-", //array
        topLevelDomain: source.tld ? source.tld.join(", ") : "-", //array
        currencies: source.currencies ? Object.values(source.currencies).map(type => type.name).join(", ") : "-",
        languages: source.languages ? Object.values(source.languages)?.join(", ") : "-",
        borderCountries: source?.borders,
        flags: {
            svg: source.flags.svg,
            alt: source.flags.alt
        }
    }



    return (
        <div className="px-4 mt-12">

            <Link to={'/'}>
                <button className="flex items-center gap-x-2 bg-white dark:bg-gray-700 px-8 py-2 rounded shadow mb-16">
                    <BackIcon />
                    <p className="dark:text-white">Back</p>
                </button>
            </Link>


            <div className=" md:grid md:grid-cols-2 md:gap-x-40">

                <img src={country.flags.svg} alt={country.flags.alt} loading="eager" />

                <div className="py-12 dark:text-white">
                    <p className="font-extrabold text-2xl mb-6">{country.name}</p>
                    <div className=" md:flex md:justify-between">
                        <div className="space-y-3 mb-10 md:mb-0">
                            <p ><span className="font-semibold">Native Name: </span>{country.nativeName} </p>
                            <p ><span className="font-semibold">Population: </span>{country.population} </p>
                            <p ><span className="font-semibold">Region: </span>{country.region} </p>
                            <p ><span className="font-semibold">Subregion: </span>{country.subRegion} </p>
                            <p ><span className="font-semibold">Capital: </span>{country.capital} </p>
                        </div>
                        <div className="space-y-3">
                            <p ><span className="font-semibold">Top level domain: </span>{country.topLevelDomain} </p>
                            <p ><span className="font-semibold">Currencies: </span>{country.currencies} </p>
                            <p ><span className="font-semibold">Languages: </span>{country.languages} </p>
                        </div>
                    </div>



                    <p className="font-semibold text-lg mt-10 mb-4">Border Countries: </p>
                    {country.borderCountries
                        ? <div className="grid grid-cols-3 gap-2">
                            {country.borderCountries?.map((code, i) => (
                                <BorderCountryItem key={i} code={code} />
                            ))}
                        </div>
                        : <p className="text-slate-400">no border countries</p>
                    }

                </div>
            </div>

        </div>
    )
}

export default CountryDetail