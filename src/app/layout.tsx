import "./globals.css";
import {HeaderGlobal} from "../components/header"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Aula Next JS do zero!",
  description: "Aprendendo Next JS",
  openGraph:{
    title: "Aprendendo do ZERO NextJS",
    description: "Serve para mostrar uma pré visualização para o usuário antes de acessar o Link",
  },
  robots:{
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      > 
        <HeaderGlobal/>

        {children}
      </body>
    </html>
  );
}
