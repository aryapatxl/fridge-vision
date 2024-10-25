import localFont from "next/font/local";
import "./globals.css";
import Head from 'next/head';
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Fridge Vision",
  description: "Detects the ingrediants in your fridge!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
			<link rel='icon' href='/favicon.ico' />
		</Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
