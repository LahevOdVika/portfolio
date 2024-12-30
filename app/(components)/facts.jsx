'use client'

import styles from "@/app/(home)/page.module.css";
import Card from "@/app/(components)/card";

export default function Facts() {
    return <section className={styles.facts}>
          <h2>Some facts about me</h2>
          <div className={styles.factsGrid}>
            <Card className={styles.factsCard} header="Experience" text="I have been working as a developer for over 5 years." imageUrl={'/experience.svg'} imageAlt={"Experience"}/>
            <Card className={styles.factsCard} header="Skills" text="I work with JavaScript, React, and Node.js." imageUrl={'/genius.svg'} imageAlt={"Skills"}/>
          </div>
        </section>
}
