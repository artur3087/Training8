import { Inter } from "next/font/google";
import "./globals.css";


// Below I import Link so I can create my redirection to home, about and posts pages //

import Link from "next/link" // I imported from next/link .... //




const inter = Inter({ subsets: ["latin"] });



// Below I describe my own layout and metadata .... //

export const metadata = {
  title: "MEMES",
  description: "Created by Artur for your fun and laugh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <h1>MEMES FROM DUDES</h1>

        <nav>
          <Link href = "/">HOME</Link>
          <Link href = "/About">ABOUT</Link>
          <Link href = "/posts">POSTS</Link>
        </nav>
        
        
        
        
        
        {children}</body>
    </html>
  );
}
