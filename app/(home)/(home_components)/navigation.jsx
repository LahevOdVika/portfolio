"use client";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {useState} from "react";
import * as icon from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {

    const [isOpened, setIsOpened] = useState(false);

    const handleClick = () => {
        setIsOpened(!isOpened);
    }

    return <nav>
            <button type="button" className={"faBars"} onClick={handleClick}>
                <FontAwesomeIcon icon={icon.faBars} />
            </button>
            <ul className={"menu"} data-opened={isOpened}>
                <li onClick={handleClick}>
                  <Link href="/">
                    <FontAwesomeIcon icon={icon.faHouse} style={{marginRight: '10px'}} />
                    Home
                  </Link>
                </li>
                <li onClick={handleClick}>
                  <Link href="/">
                    <FontAwesomeIcon icon={icon.faSuitcase} style={{marginRight: '10px'}} />
                    My Work
                  </Link>
                </li>
                <li onClick={handleClick}>
                  <Link href="/contact">
                    <FontAwesomeIcon icon={icon.faPhone} style={{marginRight: '10px'}} />
                    Contact
                  </Link>
                </li>
            </ul>
        </nav>
}
