import { Berkshire_Swash, Archivo } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/Footer";

const berkshire = Berkshire_Swash({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-berkshire",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata = {
  title: 'Icy Tales',
  description: '...',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${berkshire.variable} ${archivo.variable}`}>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
