import { Geist, Geist_Mono } from "next/font/google";
import ThemeRegistry from "@/app/components/ThemeRegistry";
import "@/app/styles/globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const RootLayout = ({children,}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}

export default RootLayout;