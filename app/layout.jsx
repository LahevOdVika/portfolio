import './global.css';

export default function RootLayout({children}) {
    return <>
        <html>
            <head>
                <title>My App</title>
                <meta name={"description"} content={"My app description"} />
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