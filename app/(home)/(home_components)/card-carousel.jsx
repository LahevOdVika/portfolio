"use client"

import styles from "@/app/(home)/page.module.css";
import Card from "@/app/(components)/card";

export default function CardCarousel() {
    return <>
        <section className={styles.cards}>
            <div className={styles.cardSlider}>
                <Card imageUrl={"https://placehold.co/200"} imageAlt={"Placeholder"} header={"Card 1"}
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
        </section>
    </>
}