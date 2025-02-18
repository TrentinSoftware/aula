import "./globals.css";
import {HeaderGlobal} from "../components/header"

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
