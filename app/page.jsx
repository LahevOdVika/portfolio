import styles from './page.module.css';
import Card from "@/app/( components)/card";

export default function Page() {
    return <>
        <main className={styles.welcome}>
            <div className="container">
                <h1>Dear diary</h1>
                <h2>I'm a junior "full stack" web, desktop and mobile developer</h2>
            </div>
            <img src="image.png" alt="Image"/>
        </main>
        <div className={styles.cards}>
            <div className={styles.cardSlider}>
                <Card imageUrl={"https://placehold.co/300"} imageAlt={"Placeholder"} header={"Card 1"} text={"Lorem ipsum dolor sit amet."}></Card>
                <Card imageUrl={"https://placehold.co/200"} imageAlt={"Placeholder"} header={"Card 2"} text={"Lorem ipsum dolor sit amet."}></Card>
                <Card imageUrl={"https://placehold.co/300"} imageAlt={"Placeholder"} header={"Card 3"} text={"Lorem ipsum dolor sit amet."}></Card>
                <Card imageUrl={"https://placehold.co/200"} imageAlt={"Placeholder"} header={"Card 4"} text={"Lorem ipsum dolor sit amet."}></Card>
                <Card imageUrl={"https://placehold.co/300"} imageAlt={"Placeholder"} header={"Card 5"} text={"Lorem ipsum dolor sit amet."}></Card>
                <Card imageUrl={"https://placehold.co/200"} imageAlt={"Placeholder"} header={"Card 6"} text={"Lorem ipsum dolor sit amet."}></Card>
            </div>
            <div className={styles.cardSlider}>
                <Card imageUrl={"https://placehold.co/300"} imageAlt={"Placeholder"} header={"Card 1"} text={"Lorem ipsum dolor sit amet."}></Card>
                <Card imageUrl={"https://placehold.co/200"} imageAlt={"Placeholder"} header={"Card 2"} text={"Lorem ipsum dolor sit amet."}></Card>
                <Card imageUrl={"https://placehold.co/300"} imageAlt={"Placeholder"} header={"Card 3"} text={"Lorem ipsum dolor sit amet."}></Card>
                <Card imageUrl={"https://placehold.co/200"} imageAlt={"Placeholder"} header={"Card 4"} text={"Lorem ipsum dolor sit amet."}></Card>
                <Card imageUrl={"https://placehold.co/300"} imageAlt={"Placeholder"} header={"Card 5"} text={"Lorem ipsum dolor sit amet."}></Card>
                <Card imageUrl={"https://placehold.co/200"} imageAlt={"Placeholder"} header={"Card 6"} text={"Lorem ipsum dolor sit amet."}></Card>
            </div>
        </div>
        <section className={styles.timeline}>
            <img src="Timeline.svg" alt="Timeline"/>
            <div className={styles.code}>
                I code everything myself, no website builders, no ai builders
            </div>
            <div className={styles.tools}>
                Using only the best tools on the market
            </div>
        </section>
    </>
}