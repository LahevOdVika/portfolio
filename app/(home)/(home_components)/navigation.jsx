"use client";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faX} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {useState} from "react";

export default function Navigation() {

    const [isOpened, setIsOpened] = useState(false);

    const handleClick = () => {
        setIsOpened(!isOpened);
    }

    return <>
        <nav>
            <button type="button" className={"faBars"} onClick={handleClick}>
                <FontAwesomeIcon icon={faBars}/>
            </button>
            <ul className={"menu"} data-opened={isOpened}>
                <button type="button" className="faX" onClick={handleClick}>
                    <FontAwesomeIcon icon={faX}/>
                </button>
                <li onClick={handleClick}><Link href="/">Home</Link></li>
                <li onClick={handleClick}><Link href="/">My Work</Link></li>
                <li onClick={handleClick}><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    </>
}
