'use client'

import styles from "@/app/(home)/page.module.css";
import Image from "next/image";
import {useEffect, useRef} from "react";

export default function Facts() {
    const firstRef = useRef(null);
    const secondRef = useRef(null);

    useEffect(() => {
        if (!window.matchMedia('(prefers-reduced-motion)').matches) {
            const observer = new IntersectionObserver((entities) => {
                entities.forEach(entity => {
                    if (entity.isIntersecting && !entity.target.dataset.animated) {
                        entity.target.classList.add(styles.animate);
                        entity.target.dataset.animated = true;
                    }
                })
            }, {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            })

            if (firstRef.current) observer.observe(firstRef.current);
            if (secondRef.current) observer.observe(secondRef.current);

            return () => {
                [firstRef, secondRef].forEach(ref => {
                    if (ref.current) observer.unobserve(ref.current);
                });
            };
        } else {
            [firstRef, secondRef].forEach(entity => {
                if (entity.current) entity.current.classList.add(styles.animate);
                entity.current.textContent = entity.current.dataset.text;
            });
        }
    }, []);



    return <>
        <section>
            <div className={styles.facts} ref={firstRef}>
                <Image
                    src="/timeline/Langs.svg"
                    alt="Programming languages I use"
                    width={502}
                    height={470}
                    aria-hidden
                />
                <p>
                    I code everything myself, no website builders, no AI builders
                </p>
            </div>
            <div className={styles.facts} ref={secondRef}>
                <Image
                    src="/timeline/Utils.svg"
                    alt="Programs I use to code"
                    width={502}
                    height={470}
                    aria-hidden
                />
                <p>
                    Using only the best tools on the market
                </p>
            </div>
        </section>
    </>
}
