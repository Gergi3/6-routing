import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getIdFromUrl } from "../../utils/utils";

export const Starships = () => {
    const [starships, setStarships] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/starships')
            .then(res => res.json())
            .then(res => setStarships(res.results))
            .catch(err => console.log(err));
    }, [])

    return (
        <>
            <h1> Starships </h1>
            <ul>
                {starships.map(x =>
                    <li key={getIdFromUrl(x.url)}>
                        <Link to={`/starships/${getIdFromUrl(x.url)}`}>
                        <button className="button-hyperion"><span><span>{x.name}</span></span></button>
                        </Link>
                    </li>
                )}
            </ul>  
        </>
    );
};