import ClientOnly from './components/ClientOnly';
import LoginModal from './components/modals/LoginModal';
import Modal from './components/modals/Modal';
import RegisterModal from './components/modals/RegisterModal';
import Navbar from './components/navbar/Navbar';
import './globals.css'
import { Nunito } from 'next/font/google'

export const metadata = {
  title: 'airbnb clone',
  description: 'full stack airbnb clone',
}
const font = Nunito({ 
  subsets: ['latin'], 
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          {/* <ToasterProvider />
          
       
          <SearchModal />
          <RentModal /> */}
          <Navbar  />
          
          <LoginModal />
          <RegisterModal />
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
