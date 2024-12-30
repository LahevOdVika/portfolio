import styles from './page.module.css';
import Image from 'next/image'
import Facts from "@/app/(components)/facts.jsx";
import CardCarousel from "@/app/(components)/card-carousel.jsx";

export default function Page() {

    // async
    /*const projects = await fetch('http://localhost:3000/api')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok in file page.jsx');
            } else
                return response.json();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });*/

    return <>
            <main className={styles.welcome}>
                <div className="container">
                    <h1>Dear diary</h1>
                    <h2>I&apos;m a junior &quot;full stack&quot; web, desktop and mobile developer</h2>
                </div>
                <Image
                    src="/project.svg"
                    alt="Welcome image"
                    width={500}
                    height={500}
                    priority
                />
            </main>
            <CardCarousel/>
            <Facts />
    </>
}