import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Authcontext from "@/context/AuthContext";
import SWRConfigContext from "@/context/SWRConfigContext";
import { Provider } from "@/components/ui/provider";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: {
    default: 'Instangram',
    template: 'Instangram | %s'
  },
  description: "Instangram Photos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className={openSans.className}>
      <body className='w-full max-w-screen-xl mx-auto overflow-auto'>
        <Authcontext>
          <header className="sticy top-0 bg-white z-10 border-b"><Navbar /></header>
          <main className="w-full flex justify-center min-h-full">
            <SWRConfigContext>
              <Provider>
                {children}
              </Provider>
            </SWRConfigContext>
          </main>
        </Authcontext>
        <div id="portal" />
      </body>
    </html >
  );
}
