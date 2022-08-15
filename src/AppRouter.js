import { Routes, Route } from 'react-router-dom'
import { About } from './components/about/About';
import { Contacts } from './components/contacts/Contacts';
import { Starships } from './components/starships/Starships';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<></>} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/starships" element={<Starships />} />
        </Routes>
    )
};
