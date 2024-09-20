import './global.css';
import styles from "@/app/page.module.css";
import Link from "next/link";
export default function RootLayout({ children }) {
    return <>
        <html lang="en">
        <body>
        <nav className={styles.navigation}>
            <div className="copyright">
                &copy;Michal Budai 2024
            </div>
            <div className={styles.links}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/contact">My Work</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
        {children}
        </body>
        </html>
    </>
}