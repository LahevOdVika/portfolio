'use client'

import styles from "@/app/(home)/page.module.css";
import Card from "@/app/(components)/card";

export default function Facts() {
    return <section className={styles.facts}>
            <Card imageUrl={"/timeline/Langs.svg"} imageAlt={"Programming languages I use"} text={"I code everything myself, no website builders, no AI builders"} className={styles.factsCard}/>
            <Card imageUrl={"/timeline/Utils.svg"} imageAlt={"Programs I use to code"} text={"Using only the best tools on the market"} className={styles.factsCard}/>
        </section>
}
