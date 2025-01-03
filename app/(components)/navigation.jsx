'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { faBars, faHouse, faSuitcase, faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from './navbar.module.css';

export default function Navigation() {

  const [isOpened, setIsOpened] = useState(false);
  const menuRef = useRef(null);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  const handleClose = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpened(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClose);
    return () =>
      document.removeEventListener('click', handleClose);
  }, []);

  return <nav ref={menuRef}>
    {/* skipcq */}
    <button type="button" className={styles.faBars} onClick={handleClick} aria-expanded={isOpened} aria-controls="navigation-menu">
      <FontAwesomeIcon icon={faBars} />
    </button>
    <ul className={styles.menu} data-opened={isOpened}>
      <li>
        <Link href="/">
          <FontAwesomeIcon icon={faHouse} style={{ marginRight: '10px' }} />
          Home
        </Link>
      </li>
      <li>
        <Link href="/">
          <FontAwesomeIcon icon={faSuitcase} style={{ marginRight: '10px' }} />
          My Work
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} />
          Contact
        </Link>
      </li>
    </ul>
  </nav>;
}
