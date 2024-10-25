import styles from './card.module.css';

export default function Card({imageUrl, imageAlt, header, text}) {
    return <>
        <div className={styles.card}>
            <img src={imageUrl} alt={imageAlt} className={styles.cardImg}/>
            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{header}</h3>
                <p className={styles.cardP}>
                    {text}
                </p>
            </div>
        </div>
    </>
}