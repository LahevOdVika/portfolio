'use client';
import { useEffect } from 'react';

const ScrollListener = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        document.body.setAttribute('data-scroll', 'scrolled');
      } else {
        document.body.removeAttribute('data-scroll');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup při unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default ScrollListener;
