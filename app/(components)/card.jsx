import styles from './card.module.css';
import Image from 'next/image'

export default function Card({imageUrl, imageAlt, header, text}) {
    return <div className={styles.card}>
        <Image
            src={imageUrl}
            alt={imageAlt}
            width={700}
            height={450}
            sizes="(max-width: 768px) 100vw, 700px"
            quality={75}
            className={styles.cardImg}
            onError={() => {
                console.error(`Error loading image ${imageUrl}:`);
            }}
        />
        <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>{header}</h3>
            <p className={styles.cardP}>
                {text}
            </p>
        </div>
    </div>
}