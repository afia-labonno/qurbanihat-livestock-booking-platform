import { Elms_Sans, Quicksand} from "next/font/google";
import "./globals.css";


const elmsSans = Elms_Sans({
  variable: "--font-elms-sans",
  subsets : ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
});

// font for auth layout
export const quickSand = Quicksand({
  variable: '--font-quick-sand',
  subsets: ["latin"],
  weight : ['400', '500', '600', '700'],
})

export const metadata = {
  title: "QurbaniHat",
  description: "Trusted digital platform for buying and selling animals for Qurbani",

  icons: {
    icon: "/logo.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme = "light"
      className={`${elmsSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
