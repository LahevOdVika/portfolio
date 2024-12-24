"use client"

import styles from "@/app/(home)/page.module.css";
import Card from "@/app/(components)/card";
import {useState, useEffect} from "react";

export default function CardCarousel({projects}) {

    const [isMobile, setIsMobile] = useState(false);

    const projectCountBool = projects.length > 4;

    useEffect(() => {
        setIsMobile(window.matchMedia('(width <= 800px)').matches);
    }, []);

    if (projects.length > 0) {
        if (isMobile) {
            return <section className={styles.cards}>
                    {projects.map(project => {
                        return <Card key={project.id} imageUrl={project.image_path} imageAlt={project.address}
                                     header={project.address}
                                     text={project.description} />
                    })}
                </section>
        } else if (projectCountBool) {
            return <section className={styles.cards}>
                    <div className={styles.cardSlider} data-animate={true}>
                        {projects.map(project => {
                            return <Card key={project.id} imageUrl={project.image_path} imageAlt={project.address}
                                         header={project.address}
                                         text={project.description} />
                        })}
                        {projects.map(project => {
                            return <Card key={project.id} imageUrl={project.image_path} imageAlt={project.address}
                                         header={project.address}
                                         text={project.description} />
                        })}
                    </div>
                </section>
        } else {
            return <section className={styles.cards}>
                <div className={styles.cardSlider} data-animate={false}>
                    {projects.map(project => {
                        return <Card key={project.id} imageUrl={project.image_path} imageAlt={project.address}
                                     header={project.address}
                                     text={project.description} />
                    })}
                </div>
            </section>
        }
    } else {
        return <h2 style={{textAlign: "center"}}>Loading.....</h2>
    }
}