import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { InstallModalProvider } from "@/components/modules/install-modal";
import { getBaseUrl } from "@/lib/env";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: "g-draft ✦ Your terminal's ghostwriter",
    template: "%s | g-draft",
  },
  description: "High-performance AI assistant for your terminal. Automate commits, PR descriptions, and rigorous code audits with your local AI agents like Claude, Gemini, and OpenAI. Built by Godswill Ezeala.",
  keywords: [
    "g-draft",
    "git assistant",
    "terminal ghostwriter",
    "ai git tool",
    "conventional commits automation",
    "ai pr description",
    "code review assistant",
    "Godswill Ezeala",
    "claude",
    "gemini",
    "openai",
    "developer productivity",
    "git workflow automation",
  ],
  authors: [{ name: "Godswill Ezeala", url: "https://github.com/Bobbyjsx" }],
  creator: "Godswill Ezeala",
  publisher: "Godswill Ezeala",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: getBaseUrl(),
    title: "g-draft ✦ Your terminal's ghostwriter",
    description: "Automate Git workflows with your preferred AI agents. High-speed, private, and precise.",
    siteName: "g-draft",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "g-draft ✦ AI-Powered Git Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "g-draft ✦ Your terminal's ghostwriter",
    description: "Automate commits, PRs, and audits with AI in your terminal.",
    creator: "@EzealaGodswill",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-black">
        <InstallModalProvider>{children}</InstallModalProvider>
      </body>
    </html>
  );
}
