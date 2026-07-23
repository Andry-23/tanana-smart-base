import type { Locale } from "@/lib/i18n";

type SiteChromeDictionary = {
  brand: {
    name: string;
  };
  language: {
    selectorLabel: string;
    switchTo: string;
  };
  navigation: {
    home: string;
    about: string;
    services: string;
    whyChooseUs: string;
    projects: string;
    contact: string;
    mainAriaLabel: string;
    mobileAriaLabel: string;
    openMenu: string;
    closeMenu: string;
  };
};

export const siteChrome: Record<Locale, SiteChromeDictionary> = {
  en: {
    brand: {
      name: "Tanana Smart Base",
    },
    language: {
      selectorLabel: "Language",
      switchTo: "Switch language to",
    },
    navigation: {
      home: "Home",
      about: "About",
      services: "Services",
      whyChooseUs: "Why Choose Us",
      projects: "Projects",
      contact: "Contact",
      mainAriaLabel: "Main navigation",
      mobileAriaLabel: "Mobile navigation",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
    },
  },
  fr: {
    brand: {
      name: "Tanana Smart Base",
    },
    language: {
      selectorLabel: "Langue",
      switchTo: "Changer la langue vers",
    },
    navigation: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      whyChooseUs: "Pourquoi nous choisir",
      projects: "Projets",
      contact: "Contact",
      mainAriaLabel: "Navigation principale",
      mobileAriaLabel: "Navigation mobile",
      openMenu: "Ouvrir le menu de navigation",
      closeMenu: "Fermer le menu de navigation",
    },
  },
  mg: {
    brand: {
      name: "Tanana Smart Base",
    },
    language: {
      selectorLabel: "Fiteny",
      switchTo: "Hanova ny fiteny ho",
    },
    navigation: {
      home: "Fandraisana",
      about: "Momba anay",
      services: "Tolotra",
      whyChooseUs: "Nahoana no misafidy anay",
      projects: "Tetikasa",
      contact: "Fifandraisana",
      mainAriaLabel: "Fitetezana lehibe",
      mobileAriaLabel: "Fitetezana amin’ny finday",
      openMenu: "Sokafy ny menio fitetezana",
      closeMenu: "Akatona ny menio fitetezana",
    },
  },
};
