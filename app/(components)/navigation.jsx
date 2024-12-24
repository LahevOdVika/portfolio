"use client";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {useState} from "react";
import {faBars, faX} from "@fortawesome/free-solid-svg-icons";
import styles from "./navbar.module.css";

export default function Navigation() {

    const [isOpened, setIsOpened] = useState(false);

    const handleClick = () => {
        setIsOpened(!isOpened);
    }

    return <nav>
            <button type="button" className={styles.faBars} onClick={handleClick}>
                <FontAwesomeIcon icon={faBars}/>
            </button>
            <ul className={styles.menu} data-opened={isOpened}>
                <button type="button" className={styles.faX} onClick={handleClick}>
                    <FontAwesomeIcon icon={faX}/>
                </button>

            </ul>
        </nav>
}
