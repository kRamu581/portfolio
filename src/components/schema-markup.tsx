"use client";

import { DATA } from "@/data/resume";

export function SchemaMarkup() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": DATA.name,
    "url": DATA.url,
    "image": `${DATA.url}${DATA.avatarUrl}`,
    "jobTitle": "Kanam Ramu – ServiceNow Developer and AI & Full-Stack Enthusiast",
    "description": DATA.summary,
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "K.S.R.M. College of Engineering"
    },
    "knowsAbout": [
      "ServiceNow Development",
      "AI Automation",
      "Full-Stack Development",
      "Java",
      "Spring Boot",
      "React",
      "Flow Designer",
      "Service Portal"
    ],
    "sameAs": [
      DATA.contact.social.GitHub.url,
      DATA.contact.social.LinkedIn.url
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": `${DATA.name} Portfolio`,
    "url": DATA.url,
    "author": {
      "@type": "Person",
      "name": DATA.name
    },
    "description": "Portfolio of Kanam Ramu – ServiceNow Developer and AI & Full-Stack Enthusiast"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
