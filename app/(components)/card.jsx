import styles from './card.module.css';
import Image from 'next/image'

export default function Card({imageUrl, imageAlt, header, text}) {
    return <div className={styles.card}>
        <div className={styles.cardImageWrapper}>
            <Image
                src={imageUrl}
                alt={imageAlt}
                width={300}
                height={300}
                sizes="(max-width: 768px) 100vw, 300px"
                quality={75}
                className={styles.cardImg}
                onError={() => {
                    console.error(`Error loading image ${imageUrl}:`);
                }}
            />
        </div>
        <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>{header}</h3>
            <p className={styles.cardP}>
                {text}
            </p>
        </div>
    </div>
}