// REMOVE all localFont imports and config
import Header from './Component/header'
import TopBar from './Component/topbar'
import Footer from './Component/footer'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html> 
      <body>
        <TopBar/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}