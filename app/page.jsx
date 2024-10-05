'use client'

import styles from './page.module.css';
import Card from "@/app/( components)/card";
import {useEffect, useRef} from "react";

export default function Page() {

    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const thirdRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entities) => {
            entities.forEach(entity => {
                if (entity.isIntersecting) {
                    if (entity.target === firstRef.current) {
                        entity.target.classList.toggle(styles.animate);
                    } else if (entity.target === secondRef.current) {
                        entity.target.classList.toggle(styles.animate);
                    } else if (entity.target === thirdRef.current) {
                        entity.target.classList.toggle(styles.animate);
                    }
                } else {
                    entity.target.classList.remove(styles.animate);
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

    return <>
        <main className={styles.welcome}>
            <div className="container">
                <h1>Dear diary</h1>
                <h2>I'm a junior "full stack" web, desktop and mobile developer</h2>
            </div>
            <img src="/image.png" alt="Image"/>
        </main>
        <div className={styles.cards}>
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
            <div className={styles.timelineSection} ref={firstRef}>
                <div className={styles.timelinePart}>
                    <img src="/timeline/LineTop.svg" alt="Line"/>
                </div>
            </div>
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
                    <img src="/timeline/Utils.svg" alt="Utils"/>
                    Using only the best tools on the market
                </div>
            </div>
        </section>
    </>
}