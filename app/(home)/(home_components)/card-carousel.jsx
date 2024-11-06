"use client"

import styles from "@/app/(home)/page.module.css";
import Card from "@/app/(components)/card";

export default function CardCarousel({projects}) {

    if (projects.length > 0) {
        return <>
            <section className={styles.cards}>
                <div className={styles.cardSlider}>
                    {projects.map(project => {
                        return <Card key={project.ID} imageUrl={project.image_path} imageAlt={project.address}
                                     header={project.address}
                                     text={project.description}></Card>
                    })}
                </div>
            </section>
        </>
    } else {
        return <>
            <h2 style={{textAlign: "center"}}>Loading.....</h2>
        </>
    }
}