import styles from './card.module.css';
import Image from 'next/image'

export default function Card({imageUrl, imageAlt, header, text}) {
    return <div className={styles.card}>
        <Image
            src={imageUrl}
            alt={imageAlt}
            width={1400}
            height={900}
            className={styles.cardImg}
        />
        <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>{header}</h3>
            <p className={styles.cardP}>
                {text}
            </p>
        </div>
    </div>
}