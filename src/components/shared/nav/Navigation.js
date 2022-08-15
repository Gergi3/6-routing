import { NavLink } from "react-router-dom";

import styles from './Navigation.module.css';

export const Navigation = () => {

    const setNavStyler = (navLinkProps) => {
        return navLinkProps.isActive
            ? styles['active-link']
            : undefined;
    }

    return (
        <div>
            <ul>
                <li>
                    <NavLink className={setNavStyler} to="/"> Home </NavLink>
                </li>
                <li>
                    <NavLink className={setNavStyler} to="/about"> About </NavLink>
                </li>
                <li>
                    <NavLink className={setNavStyler} to="/contacts"> Contacts </NavLink>
                </li>
                <li>
                    <NavLink className={setNavStyler} to="/starships"> Starships </NavLink>
                </li>
            </ul>
        </div>
    );
};
