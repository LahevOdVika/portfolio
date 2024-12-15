import './global.css';
import Navigation from "@/app/(home)/(home_components)/navigation";

export const metadata = {
    title: "Michal Budai",
    description: "Are you looking for a good quality webapp for low price? Well you are in the right place.",
}

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import ScrollListener from '@/app/(home)/(home_components)/ScrollListener';
config.autoAddCss = false

export default function RootLayout({children}) {

  return <html lang={"en"}>
          <body>
          <header>
              <Navigation />
          </header>
          <div className="wrapper">
            <ScrollListener />
            {children}
          </div>
          </body>
      </html>
}