'use client'

import styles from './page.module.css';
import Card from "@/app/( components)/card";
import {useEffect, useRef} from "react";
import Image from 'next/image'

export default function Page() {

    let firstRef;
    let secondRef;
    let thirdRef;

    if (!window.matchMedia('prefers-reduced-motion').matches) {

        firstRef = useRef(null);
        secondRef = useRef(null);
        thirdRef = useRef(null);

        useEffect(() => {
            const observer = new IntersectionObserver((entities) => {
                entities.forEach(entity => {
                    if (entity.isIntersecting) {
                        if (entity.target === firstRef.current) {
                            entity.target.classList.add(styles.animate);
                        } else if (entity.target === secondRef.current) {
                            entity.target.classList.add(styles.animate);
                        } else if (entity.target === thirdRef.current) {
                            entity.target.classList.add(styles.animate);
                        }
                    }
                })
            }, {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            })

            if (firstRef.current) observer.observe(firstRef.current);
            if (secondRef.current) observer.observe(secondRef.current);
            if (thirdRef.current) observer.observe(thirdRef.current);

            return () => {
                if (firstRef.current) observer.unobserve(firstRef.current);
                if (secondRef.current) observer.unobserve(secondRef.current);
                if (thirdRef.current) observer.unobserve(thirdRef.current);
            };
        }, []);
    }

    return <>
            <main className={styles.welcome}>
                <div className="container">
                    <h1>Dear diary</h1>
                    <h2>I'm a junior "full stack" web, desktop and mobile developer</h2>
                </div>
                <Image
                    src="/image.png"
                    alt="Welcome image"
                    width={500}
                    height={500}
                />
            </main>
            <div className={styles.cards}>
                <div className={styles.cardSlider}>
                    <Card imageUrl={"https://studio-am.cz/favicon.ico"} imageAlt={"Placeholder"} header={"Card 1"}
                          text={"Lorem ipsum dolor sit amet."}></Card>
                    <Card imageUrl={"https://placehold.co/200"} imageAlt={"Placeholder"} header={"Card 2"}
                          text={"Lorem ipsum dolor sit amet."}></Card>
                    <Card imageUrl={"https://placehold.co/300"} imageAlt={"Placeholder"} header={"Card 3"}
                          text={"Lorem ipsum dolor sit amet."}></Card>
                    <Card imageUrl={"https://placehold.co/200"} imageAlt={"Placeholder"} header={"Card 4"}
                          text={"Lorem ipsum dolor sit amet."}></Card>
                    <Card imageUrl={"https://placehold.co/300"} imageAlt={"Placeholder"} header={"Card 5"}
                          text={"Lorem ipsum dolor sit amet."}></Card>
                    <Card imageUrl={"https://placehold.co/200"} imageAlt={"Placeholder"} header={"Card 6"}
                          text={"Lorem ipsum dolor sit amet."}></Card>
                </div>
                <div className={styles.cardSlider}>
                    <Card imageUrl={"https://placehold.co/300"} imageAlt={"Placeholder"} header={"Card 1"}
                          text={"Lorem ipsum dolor sit amet."}></Card>
                    <Card imageUrl={"https://placehold.co/200"} imageAlt={"Placeholder"} header={"Card 2"}
                          text={"Lorem ipsum dolor sit amet."}></Card>
                    <Card imageUrl={"https://placehold.co/300"} imageAlt={"Placeholder"} header={"Card 3"}
                          text={"Lorem ipsum dolor sit amet."}></Card>
                    <Card imageUrl={"https://placehold.co/200"} imageAlt={"Placeholder"} header={"Card 4"}
                          text={"Lorem ipsum dolor sit amet."}></Card>
                    <Card imageUrl={"https://placehold.co/300"} imageAlt={"Placeholder"} header={"Card 5"}
                          text={"Lorem ipsum dolor sit amet."}></Card>
                    <Card imageUrl={"https://placehold.co/200"} imageAlt={"Placeholder"} header={"Card 6"}
                          text={"Lorem ipsum dolor sit amet."}></Card>
                </div>
            </div>
            <section>
                <div className={styles.timelineSection} ref={secondRef}>
                    <div className={styles.timelinePart}>
                        <img src="/timeline/Code.svg" alt="Code"/>
                        <img src="/timeline/LineMiddle.svg" alt="Line"/>
                    </div>
                    <div className={styles.timelineContent}>
                        <img src="/timeline/Langs.svg" alt="Langs"/>
                        I code everything myself, no website builders, no AI builders
                    </div>
                </div>
                <div className={styles.timelineSection} ref={thirdRef}>
                    <div className={styles.timelinePart}>
                        <img src="/timeline/Terminal.svg" alt="Terminal"/>
                        <img src="/timeline/LineBottom.svg" alt="Line"/>
                    </div>
                    <div className={styles.timelineContent}>
                        <Image
                            src="/timeline/Utils.svg"
                            alt="Programs I use to code"
                            width={502}
                            height={470}
                        />
                        Using only the best tools on the market
                    </div>
                </div>
            </section>
    </>
}