import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Text } from "next/font/google";
import StructuredData from "./components/structured-data";
import { WhatsAppButton } from "@/components/whatsapp-button";
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
  title: "Ana Karla Viana - Psicóloga Clínica em João Pessoa - PB",
  description:
    "Psicóloga clínica Ana Karla Viana (CRP-13/13452) especializada em psicanálise em João Pessoa, Paraíba. Atendimento online para todo o Brasil e presencial em João Pessoa. Escuta qualificada para adolescentes e adultos.",
  keywords: [
    "psicóloga",
    "psicóloga João Pessoa",
    "psicóloga Paraíba",
    "psicóloga clínica João Pessoa",
    "psicóloga online João Pessoa",
    "psicanálise João Pessoa",
    "psicanálise",
    "atendimento psicológico online",
    "atendimento psicológico presencial",
    "terapia João Pessoa",
    "psicologia clínica",
    "Ana Karla Viana",
    "CRP-13/13452",
    "CRP-13",
    "psicóloga adolescentes",
    "psicóloga adultos",
    "atendimento adolescente",
    "atendimento adulto",
    "escutar",
    "silêncio",
    "transformação pessoal",
  ],
  authors: [{ name: "Ana Karla Viana" }],
  creator: "Ana Karla Viana",
  publisher: "Ana Karla Viana",
  alternates: {
    canonical: "https://www.psicanakarla.com/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Ana Karla Viana - Psicóloga Clínica em João Pessoa - PB",
    description:
      "Psicóloga clínica especializada em psicanálise em João Pessoa, Paraíba. Atendimento online para todo o Brasil e presencial em João Pessoa.",
    type: "website",
    url: "https://www.psicanakarla.com/",
    images: [
      {
        url: "https://www.psicanakarla.com/cover.jpg",
        alt: "Ana Karla - Psicóloga Clínica em João Pessoa",
        width: 1200,
        height: 630,
        type: "image/jpeg",
      },
    ],
    locale: "pt_BR",
    siteName: "Ana Karla Viana - Psicóloga Clínica",
    countryName: "Brasil",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ana Karla Viana - Psicóloga Clínica em João Pessoa - PB",
    description:
      "Psicóloga clínica especializada em psicanálise. Atendimento online para todo o Brasil e presencial em João Pessoa, PB.",
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
    google: "_uNprcNHR6-TBX3tSJUz_0cK7UZ7qpocWm3ig4kvJIs",
  },
  category: "Health",
  classification: "Psychology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${dmSans.variable} ${dmSerif.variable} font-sans antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
