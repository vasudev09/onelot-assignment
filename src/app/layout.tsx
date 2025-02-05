import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";
import Providers from "@/providers";

// Meta Tags Global
export const metadata: Metadata = {
  title: "OneLotTest - Loan for car dealers",
  description:
    "Quick inventory financing and digital tools for your car dealership in the Philippines. Grow with flexible loans and dealership management solutions.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_FRONTEND_URL}`),
  applicationName: "OneLotTest",
  keywords: ["loan", "loan for car dealers", "car dealership"],
  authors: [{ name: "vasude09", url: "https://github.com/vasudev09" }],
  publisher: "vercel",

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL}`,
    languages: {
      en: "en",
    },
  },
  manifest: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/site.webmanifest`,
  icons: {
    icon: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/favicon.ico`,
    shortcut: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/favicon-32x32.png`,
    apple: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/favicon.png`,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
    },
  },

  twitter: {
    card: "summary_large_image",
    title: "OneLot - Loan for car dealers",
    description:
      "Quick inventory financing and digital tools for your car dealership in the Philippines. Grow with flexible loans and dealership management solutions.",
    siteId: "OneLotTest",
    creator: "vasudev09",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/images/logo.png`,
      },
      {
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/favicon-32x32.png`,
      },
    ],
  },

  openGraph: {
    title: "OneLotTest - Loan for car dealers",
    description:
      "Quick inventory financing and digital tools for your car dealership in the Philippines. Grow with flexible loans and dealership management solutions.",

    images: [
      {
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/images/logo.png`,
      },
      {
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/favicon-32x32.png`,
      },
    ],
    type: "website",
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}`,
    siteName: "OneLotTest",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
