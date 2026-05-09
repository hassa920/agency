// REMOVE all localFont imports and config
import localFont from 'next/font/local'
import Header from './Component/header'
import TopBar from './Component/topbar'
import Footer from './Component/footer'
import './globals.css'
const formaDJR =localFont({
  src:[{
    path:"./assets/fonts/FormaDJRText-Medium-Testing.otf"
  }],
  variable:"--font-forma",
  display:"swap"
})
export default function RootLayout({ children }) {
  return (
    <html className={formaDJR.variable}> 
      <body>
        <TopBar/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}