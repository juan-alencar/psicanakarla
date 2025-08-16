import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Text } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Text({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title:
    "Ana Karla Viana - Psicologia Clínica | Psicanálise Online e Presencial",
  description:
    "Psicóloga clínica Ana Karla Viana (CRP-13/13452) especializada em psicanálise. Atendimento online e presencial para adolescentes e adultos. Espaço terapêutico para escuta, acolhimento e transformação pessoal.",
  keywords: [
    "psicóloga",
    "psicanálise",
    "atendimento psicológico online",
    "atendimento psicológico presencial",
    "terapia",
    "psicologia clínica",
    "Ana Karla Viana",
    "CRP-13/13452",
    "atendimento adolescente",
    "atendimento adulto",
    "escutar",
    "silêncio",
    "transformação pessoal",
  ],
  authors: [{ name: "Ana Karla Viana" }],
  creator: "Ana Karla Viana",
  publisher: "Ana Karla Viana",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Ana Karla Viana - Psicologia Clínica",
    description:
      "Psicóloga clínica especializada em psicanálise. Atendimento online e presencial para adolescentes e adultos.",
    type: "website",
    url: "https://www.psicanakarla.com/",
    images: [
      {
        url: "https://www.psicanakarla.com/cover.jpg",
        alt: "Ana Karla - Psicologia Clínica",
      },
    ],
    locale: "pt_BR",
    siteName: "Ana Karla Viana - Psicologia Clínica",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ana Karla Viana - Psicologia Clínica",
    description:
      "Psicóloga clínica especializada em psicanálise. Atendimento online e presencial.",
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
  verification: {
    google: "verification_token", // Substitua pelo seu token do Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${dmSans.variable} ${dmSerif.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
