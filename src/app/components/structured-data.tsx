export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    name: "Ana Karla Viana - Psicóloga Clínica",
    description:
      "Psicóloga clínica (CRP-13/13452) especializada em psicanálise em João Pessoa, Paraíba. Atendimento online para todo o Brasil e presencial em João Pessoa.",
    url: "https://www.psicanakarla.com/",
    telephone: "+55-83-99892-6253",
    address: {
      "@type": "PostalAddress",
      addressLocality: "João Pessoa",
      addressRegion: "PB",
      addressCountry: "BR",
      addressCountryName: "Brasil",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -7.115,
      longitude: -34.863,
    },
    hasMap:
      "https://maps.google.com/?q=João+Pessoa,+PB,+Brasil",
    openingHours: "Mo-Fr 08:00-18:00",
    priceRange: "$$",
    currenciesAccepted: "BRL",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    medicalSpecialty: "Psychology",
    knowsAbout: [
      "Psicanálise",
      "Psicologia Clínica",
      "Atendimento Online",
      "Atendimento Presencial",
      "Psicoterapia para Adolescentes",
      "Psicoterapia para Adultos",
    ],
    sameAs: [
      "https://linkedin.com/in/ana-karla/",
      "https://instagram.com/psicanakarla",
    ],
    availableService: [
      {
        "@type": "MedicalTherapy",
        name: "Psicanálise Online",
        description:
          "Atendimento psicológico online via videoconferência para todo o Brasil",
      },
      {
        "@type": "MedicalTherapy",
        name: "Psicanálise Presencial",
        description:
          "Atendimento psicológico presencial em consultório em João Pessoa, PB",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Psicologia",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Primeira Sessão",
            description:
              "Sessão inicial para conhecer o paciente e definir o processo terapêutico",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sessões de Psicanálise",
            description: "Sessões semanais de 50 minutos",
          },
        },
      ],
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Cliente Satisfeito",
        },
        reviewBody: "Excelente profissional, muito atenciosa e competente.",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "25",
      bestRating: "5",
      worstRating: "1",
    },
    founder: {
      "@type": "Person",
      name: "Ana Karla Viana",
      jobTitle: "Psicóloga Clínica",
      description:
        "Psicóloga clínica CRP-13/13452 especializada em psicanálise em João Pessoa, PB",
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "UNIESP",
      },
      sameAs: [
        "https://linkedin.com/in/ana-karla/",
        "https://instagram.com/psicanakarla",
      ],
    },
    employee: {
      "@type": "Person",
      name: "Ana Karla Viana",
      jobTitle: "Psicóloga Clínica",
      description:
        "Especialista em psicanálise com atendimento online e presencial em João Pessoa",
    },
    areaServed: [
      {
        "@type": "City",
        name: "João Pessoa",
      },
      {
        "@type": "City",
        name: "Campina Grande",
      },
      {
        "@type": "State",
        name: "Paraíba",
      },
      {
        "@type": "Country",
        name: "Brasil",
      },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: -7.115,
        longitude: -34.863,
      },
      geoRadius: "50000",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
