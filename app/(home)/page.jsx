import styles from './page.module.css';
import Image from 'next/image'
import Timeline from "@/app/(home)/(home_components)/timeline";
import CardCarousel from "@/app/(home)/(home_components)/card-carousel";

export default function Page() {
    return <>
            <main className={styles.welcome}>
                <div className="container">
                    <h1>Dear diary</h1>
                    <h2>I&apos;m a junior &quot;full stack&quot; web, desktop and mobile developer</h2>
                </div>
                <Image
                    src="/image.png"
                    alt="Welcome image"
                    width={500}
                    height={500}
                    priority={true}
                />
            </main>
            <CardCarousel />
            <Timeline />
    </>
}