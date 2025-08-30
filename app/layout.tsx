import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syed Abdul Latif — Portfolio",
  description: "Personal portfolio website",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Syed Abdul Latif — Portfolio",
    description: "Personal portfolio website",
    url: "https://example.com",
    siteName: "Portfolio",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name — Portfolio",
    description: "Personal portfolio website",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
