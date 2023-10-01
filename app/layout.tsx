import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'


export const metadata = {
  title: 'The Car Hub',
  description: "Discover the World's Finest Cars",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
