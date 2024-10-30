"use client"

import styles from "@/app/(home)/page.module.css";
import Card from "@/app/(components)/card";

export default function CardCarousel({projects}) {

    return <>
        <section className={styles.cards}>
            <div className={styles.cardSlider}>
                {projects.map(project => {
                    return <Card key={project.ID} imageUrl={project.image_path} imageAlt={project.address} header={project.address}
                                 text={project.description}></Card>
                })}
            </div>
        </section>
    </>
}