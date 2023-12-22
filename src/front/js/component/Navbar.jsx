import React from "react";
import { Link } from "react-router-dom";
import style from "../../styles/Navbar.module.css"

export const Navbar = () => {
    return (
        
        <div>
            <nav className={style.navbar}>
                <div className={style.navbar__container}>
                    <a href="/" id={style.navbar__logo}><i className="fa-solid fa-dumbbell"></i>__GYMApp</a>
                    <div className={style.navbar__toggle} id={style.mobile_menu}>
                        <span className={style.bar}></span>
                        <span className={style.bar}></span>
                        <span className={style.bar}></span>
                    </div>
                    <ul className={style.navbar__menu}>
                        <li className={style.navbar__item}>
                            <a href="/" className={style.navbar__links}>Home</a>
                        </li>
                        <li className={style.nabvar__item}>
                            <a href="/routines.html" className={style.navbar__links}>Routines</a>
                        </li>
                        <li className={style.navbar__item}>
                            <a href="/diets.html" className={style.navbar__links}>Diets</a>
                        </li>
                        <li className={style.nabvar__btn}>
                            <a href="/" className={style.button}>Sign Up</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;