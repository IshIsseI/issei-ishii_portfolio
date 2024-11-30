import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "ISSEI ISHII",
    template: "Issei Ishii",
  },
  description: "石井一成のポートフォリオ",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "ISSEI ISHII",
    description: "石井一成のポートフォリオ",
    url: siteUrl,
    siteName: "ISSEI ISHII",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1920,
        height: 1080,
      },
    ],
    locale: "ja-JP",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/issei2.png",
    icon: "/issei2.png",
    apple: "/issei2.png",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

const JPSans = LocalFont({
  src: "../public/fonts/NotoSansJP-SemiBold.ttf",
  variable: "--font-jpsans",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={[inter.variable, calSans.variable, JPSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined}`}
      >
        {children}
      </body>
    </html>
  );
}