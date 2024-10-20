import './global.css';
import Link from "next/link";

export default function RootLayout({children}) {
    return <>
        <html lang={"en"}>
            <head>
                <title>Michal Budai</title>
                <meta name={"description"} content={"Are you looking for a good quality webapp for low price? Well you are in the right place."} />
                <meta name={"viewport"} content={"width=device-width, initial-scale=1"} />
            </head>
            <body>
            <nav>
                <div className="copyright">
                    &copy; 2024 Michal Budai
                </div>
                <div className="menu">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/work">My Work</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
            {children}
            </body>
        </html>
    </>
}