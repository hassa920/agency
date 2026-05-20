import localFont from 'next/font/local'
import Header from './Component/header'
import TopBar from './Component/topbar'
import Footer from './Component/footer'
import './globals.css'

const formaDJR = localFont({
  src: [{
    path: "./assets/fonts/FormaDJRText-Regular-Testing.otf",
  }],
  variable: "--font-forma",
  display: "swap",
})

export const metadata = {
  title: {
    default: "DomyAIO | Digital Growth Services",
    template: "%s | DomyAIO",
  },
  description:
    "Smart digital solutions that help businesses grow through strategy, design, and modern technology.",
  metadataBase: new URL("https://www.domyaio.com"),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={formaDJR.variable}>
      <body>
        <TopBar/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}