import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  title: "Akses Legal Indonesia - Legalitas Bisnis Mudah & Termurah",
  description: "Kami memberdayakan UMK Indonesia dengan pengurusan izin usaha yang transparan, cepat, dan terjangkau.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="light">
      <head>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
        <script id="tailwind-config">
          {`
            tailwind.config = {
                darkMode: "class",
                theme: {
                    extend: {
                        colors: {
                            "primary": "#2a6ba7",
                            "secondary": "#f3b444",
                            "background-light": "#f9fafb",
                            "background-dark": "#1a2c3d",
                        },
                        fontFamily: {
                            "display": ["Public Sans", "sans-serif"]
                        },
                        borderRadius: {
                            "DEFAULT": "0.5rem",
                            "lg": "1rem",
                            "xl": "1.5rem",
                            "full": "9999px"
                        },
                    },
                },
            }
          `}
        </script>
        <style>
          {`
            .material-symbols-outlined {
                font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            }
          `}
        </style>
      </head>
      <body
        className={`${publicSans.variable} bg-background-light dark:bg-background-dark font-display text-[#101519] dark:text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
