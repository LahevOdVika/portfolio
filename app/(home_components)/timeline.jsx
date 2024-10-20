'use client'

import styles from "@/app/page.module.css";
import Image from "next/image";
import {useEffect, useRef} from "react";

export default function Timeline() {
    const firstRef = useRef(null);
    const secondRef = useRef(null);

    const speed = 100;

    const typeWriter = (text, element) => {
        let index = 0;

        const write = () => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(write, speed);
            }
        };

        write();
    };

    useEffect(() => {
        if (!window.matchMedia('(prefers-reduced-motion)').matches) {
            const observer = new IntersectionObserver((entities) => {
                entities.forEach(entity => {
                    if (entity.isIntersecting && !entity.target.dataset.animated) {
                        entity.target.classList.add(styles.animate);
                        entity.target.dataset.animated = true;
                        typeWriter(entity.target.dataset.text, entity.target.children[1].children[1])
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
            <div className={styles.timelineSection} ref={firstRef} data-text={"I code everything myself, no website builders, no AI builders"}>
                <div className={styles.timelinePart}>
                    <img src="/timeline/Code.svg" alt="Svg code icon" width={"auto"} height={"auto"} aria-hidden={true}/>
                    <img src="/timeline/LineMiddle.svg" alt="Svg line spacer" width={"auto"} height={"auto"} aria-hidden={true}/>
                </div>
                <div className={styles.timelineContent}>
                    <img src="/timeline/Langs.svg" alt="Programming languages I use" width={"auto"} height={"auto"} aria-hidden={true}/>
                    <span className={"typewriter"}>

                    </span>
                </div>
            </div>
            <div className={styles.timelineSection} ref={secondRef} data-text={"Using only the best tools on the market"}>
                <div className={styles.timelinePart}>
                    <img src="/timeline/Terminal.svg" alt="Svg terminal icon" width={"auto"} height={"auto"} aria-hidden={true}/>
                    <img src="/timeline/LineBottom.svg" alt="Svg line spacer" width={"auto"} height={"auto"} aria-hidden={true}/>
                </div>
                <div className={styles.timelineContent}>
                    <Image
                        src="/timeline/Utils.svg"
                        alt="Programs I use to code"
                        width={502}
                        height={470}
                        aria-hidden={true}
                    />
                    <span className="typewriter">

                    </span>
                </div>
            </div>
        </section>
    </>
}
