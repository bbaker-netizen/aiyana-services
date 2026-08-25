import { useLocation } from "react-router-dom";
import logo from "@/assets/ayana-logo.png";

// LocalBusiness Schema for the homepage
export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://aiyanaservices.com/#organization",
    "name": "Aiyana Services",
    "image": "https://aiyanaservices.com/og-image.jpg",
    "url": "https://aiyanaservices.com",
    "telephone": "+1-780-851-6157",
    "email": "info@aiyanaservices.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Edmonton",
      "addressRegion": "AB",
      "streetAddress": "12315 Stony Plain Rd #101",
      "postalCode": "T5N 3Y8",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.5461,
      "longitude": -113.4938
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [],
    "priceRange": "$$",
    "description": "In-home respite and FSCD and PDD funded community supports in Edmonton for children, youth, and adults with developmental disabilities and other complex needs. Support available in Somali, Kiswahili, and English.",
    "areaServed": {
      "@type": "City",
      "name": "Edmonton",
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Alberta"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Family Support Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Respite Care",
            "description": "Planned and short-notice respite in the home and in the community for families caring for someone with complex needs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Community Supports",
            "description": "FSCD and PDD funded community access, behaviour support, life skills, caregiver relief, and transition planning"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Organization Schema
export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Aiyana Services",
    "legalName": "Aiyana Services Ltd.",
    "url": "https://aiyanaservices.com",
          "logo": `https://aiyanaservices.com${logo}`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-780-851-6157",
      "contactType": "customer service",
      "email": "info@aiyanaservices.com",
      "areaServed": "CA",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Edmonton",
      "addressRegion": "AB",
      "streetAddress": "12315 Stony Plain Rd #101",
      "postalCode": "T5N 3Y8",
      "addressCountry": "CA"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// BreadcrumbList Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

export const BreadcrumbSchema = ({ items }: { items: BreadcrumbItem[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://aiyanaservices.com${item.url}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// FAQPage Schema
interface FAQItem {
  question: string;
  answer: string;
}

export const FAQPageSchema = ({ faqs }: { faqs: FAQItem[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Service Schema for individual service pages
interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
}

export const ServiceSchema = ({ name, description, url }: ServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": name,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aiyana Services",
      "url": "https://aiyanaservices.com"
    },
    "areaServed": {
      "@type": "City",
      "name": "Edmonton"
    },
    "description": description,
    "url": `https://aiyanaservices.com${url}`
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
