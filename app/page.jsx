import styles from './page.module.css'
import Card from "@/app/( components)/card";
import Button from "@/app/( components)/button";

export default function Page() {
    return <>
        <main className={styles.welcome}>
            <div>
                <h1>
                    Dear diary
                </h1>
                <h2>This is what I have done so far</h2>
            </div>
            <div>
                <h4>It ain't much, I know, however I'm really trying to improve and succeed in my life</h4>
            </div>
        </main>
        <section className={styles.gridSystemWrapper}>
            <h3 style={{textAlign: "center"}}>Showcase of my work</h3>
            <div className={styles.gridSystem}>
                <Card imageUrl={"https://placehold.co/200"} imageAlt={"Placeholder"} header={"Page 1"} text={"Lorem"}/>
                <Card imageUrl={"https://placehold.co/200"} imageAlt={"Placeholder"} header={"Page 1"} text={"Lorem"}/>
                <Card imageUrl={"https://placehold.co/200"} imageAlt={"Placeholder"} header={"Page 1"} text={"Lorem"}/>
                <Card imageUrl={"https://placehold.co/200"} imageAlt={"Placeholder"} header={"Page 1"} text={"Lorem"}/>
                <Card imageUrl={"https://placehold.co/200"} imageAlt={"Placeholder"} header={"Page 1"} text={"Lorem"}/>
                <Card imageUrl={"https://placehold.co/200"} imageAlt={"Placeholder"} header={"Page 1"} text={"Lorem"}/>
            </div>
            <Button clickText={"See more"}></Button>
        </section>
        <section className={styles.technology}>
            <h3>Technology I use</h3>
            <h4>Programing languages</h4>
            <div>
                <img src="/csharp.svg" alt="C#" className="card"/>
                <img src="/javascript.svg" alt="JavaScript" className="card"/>
                <img src="/php.svg" alt="Php" className="card"/>
                <img src="/html.svg" alt="HTML" className="card"/>
                <img src="/css.svg" alt="CSS" className="card"/>
            </div>
            <h4>IDEs</h4>
            <div>
                <img src="/JetBrainsPycharm.svg" alt="PyCharm" className="card"/>
                <img src="/JetBrainsPHP.svg" alt="PhpStorm" className="card"/>
                <img src="/JetBrainsRider.svg" alt="Riders" className="card"/>
                <img src="/vscode.svg" alt="VSCode" className="card"/>
                <img src="/visual%20studio.svg" alt="Visual Studio" className="card"/>
            </div>
        </section>
    </>
}