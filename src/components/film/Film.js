import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

export const Film = () => {
    const [movie, setMovie] = useState({});
    const { filmId } = useParams();
    
    useEffect(() => {
        fetch(`https://swapi.dev/api/films/${filmId}`)
            .then(res => res.json())
            .then(res => setMovie(res))
            .catch(err => console.log(err));
    }, [filmId]);

    return (
        <>
            <p><code>{movie.title}</code></p>
            <p>Director: <code>{movie.director}</code></p>
            <p>Producer: <code>{movie.producer}</code></p>
            <p>Release date: <code>{movie.release_date
            }</code></p>
            <center><p style={{width:'50%'}}>Description: <code>{movie.opening_crawl}</code></p></center>
        </>
    );
};
