export async function getData() {
    const res = await fetch('https://restcountries.com/v3.1/all').then(result => result.json())
    return res
}

export async function getRegions() {
    const data = await getData()
    const regions = [...new Set(data.map(item => item.region))]
    return regions
}

export async function getCountryByRegion(region) {
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`).then(data => data.json())
    return res
}

export async function getCountryByName(input) {
    const res = await fetch(`https://restcountries.com/v3.1/name/${input}`).then(data => data.json())
    return res
}

export async function getCountryByCode(code) {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`).then(data => data.json())
    return res
}