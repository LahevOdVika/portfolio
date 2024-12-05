import './global.css';
import Navigation from "@/app/(home)/(home_components)/navigation";

export const metadata = {
    title: "Michal Budai",
    description: "Are you looking for a good quality webapp for low price? Well you are in the right place.",
}

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false



export default function RootLayout({children}) {
    return <html lang={"en"}>
            <body>
            <header>
                <div className="copyright">
                    &copy; 2024 Michal Budai
                </div>
                <Navigation />
            </header>
            <div className="wrapper">
              {children}
            </div>
            </body>
        </html>
}