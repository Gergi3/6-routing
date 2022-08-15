import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from 'react-router-dom'

import { getIdFromUrl } from "../../../utils/utils";
import { Film } from "../../film/Film";

export const Starship = () => {
    const [starship, setStarship] = useState({});
    const [films, setFilms] = useState([]);
    const {starshipId} = useParams();

    useEffect(() => {
        fetch(`https://swapi.dev/api/starships/${starshipId}`)
            .then(res => res.json())
            .then(res => {
                setStarship(res)

                res.films.forEach(x => {
                    fetch(x)
                        .then(innerRes => innerRes.json())
                        .then(innerRes => {
                            setFilms(oldValues => [...oldValues, innerRes]);
                        });
                })
            })
            .catch(err => console.log(err));
    }, [])


    return (
        <>
            <div>
                <h2><i>{starship.name}</i></h2>
                <p><b>Manufacturer:</b> {starship.manufacturer} </p>
                <p><b>Model:</b> {starship.model} </p>
                <p><b>Class:</b> {starship.starship_class} </p>
                <p><b>Manufacturer:</b> {starship.manufacturer} </p>
                <p><b>Cost:</b> {starship.cost_in_credits} </p>
                <p><b>Max speed:</b> {starship.max_atmosphering_speed} </p>
                <p><b>Passengers capacity:</b> {starship.passangers} </p>
                <p><b>Manufacturer:</b> {starship.manufacturer} </p>
            </div>
            <hr />
            <nav>
                <b>Films:</b>
                {films.map(x =>
                    <li key={getIdFromUrl(x.url)}>
                        <Link to={`films/${getIdFromUrl(x.url)}`}>
                            {x.title}
                        </Link>
                    </li>
                )}
            </nav>

            <section>
                <Routes>
                    <Route path="films/:filmId" element={<Film />}/>
                </Routes>
            </section>
        </>
    );
};

