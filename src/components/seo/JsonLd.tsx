import { useLocation } from "react-router-dom";

// LocalBusiness Schema for the homepage
export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://aiyanaservices.ca/#organization",
    "name": "Aiyana Services",
    "image": "https://aiyanaservices.ca/og-image.jpg",
    "url": "https://aiyanaservices.ca",
    "telephone": "(780) 851-9334",
    "email": "info@aiyanaservices.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Edmonton",
      "addressRegion": "AB",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.5461,
      "longitude": -113.4938
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [],
    "priceRange": "$$",
    "description": "Professional respite care and ADHD/Autism assessments in Edmonton. Aiyana Services provides compassionate, integrated support for families of youth with ADHD, Autism, IDD, addiction, and dual diagnoses.",
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
      "name": "Youth Care Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Respite Care",
            "description": "Professional respite care services for families caring for youth with complex needs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ADHD Assessment",
            "description": "Comprehensive ADHD assessments conducted by registered psychologists"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Autism Evaluation",
            "description": "Thorough autism spectrum evaluations for children and youth"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Addiction Support",
            "description": "Evidence-based addiction support services for youth"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dual Diagnosis Care",
            "description": "Integrated care for co-occurring mental health and developmental conditions"
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
    "legalName": "Aiyana Services Inc.",
    "url": "https://aiyanaservices.ca",
    "logo": "https://aiyanaservices.ca/og-image.jpg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "(780) 851-9334",
      "contactType": "customer service",
      "email": "info@aiyanaservices.com",
      "areaServed": "CA",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Edmonton",
      "addressRegion": "AB",
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
      "item": `https://aiyanaservices.ca${item.url}`
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
      "url": "https://aiyanaservices.ca"
    },
    "areaServed": {
      "@type": "City",
      "name": "Edmonton"
    },
    "description": description,
    "url": `https://aiyanaservices.ca${url}`
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
