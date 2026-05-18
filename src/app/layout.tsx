import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { InstallModalProvider } from "@/components/modules/install-modal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "g-draft ✦ Your terminal's ghostwriter",
  description: "Automate commits, PR descriptions, and rigorous code audits with your local AI agents (Claude, Gemini, OpenAI).",
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
      style={{ colorScheme: 'dark' }}
    >
      <body className="min-h-full flex flex-col">
        <InstallModalProvider>
          {children}
        </InstallModalProvider>
      </body>
    </html>
  );
}
