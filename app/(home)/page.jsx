import styles from './page.module.css';
import Image from 'next/image'
import Facts from "@/app/(home)/(home_components)/facts";
import CardCarousel from "@/app/(home)/(home_components)/card-carousel";
import { Client } from 'appwrite';

export default function Page() {

    const client = new Client();
    client.setProject('674a484a00096870c532');

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

        const projects = [];
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
                    priority
                />
            </main>
            <CardCarousel projects={projects}/>
            <Facts />
    </>
}