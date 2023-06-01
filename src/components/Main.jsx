import { useState, useEffect } from "react";
import gettAllCountriesInfo from "../services/countriesServices"
const Main = () => {
    const [countries, setCountries] = useState([]);

    const getData = () => {
        gettAllCountriesInfo()
            .then(response =>
                setCountries(response.data)
            )

    }

    useEffect(() => {
        getData()

    }, []);

    return (
        <div>
            Main

        </div>
    )
}

export default Main