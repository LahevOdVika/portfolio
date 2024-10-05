import './global.css';

export default function RootLayout({children}) {
    return <>
        <html>
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
                        <li><a href="/">Home</a></li>
                        <li><a href="/work">My Work</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            {children}
            </body>
        </html>
    </>
}