import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import ServerInfo from "./components/ServerInfo";
import Rules from "./components/Rules";
import Consequences from "./components/Consequences";
import Community from "./components/Community";
import Footer from "./components/Footer";
import background from "./assets/background.jpg";
import heroImage from "./assets/hero.jpg";
import logoImage from "./assets/logo.jpg";
import { siteConfig } from "./config/site";
import { useDeveloperConfig } from "./hooks/useDeveloperConfig";

export default function App() {
  const { data } = useDeveloperConfig();

  // Multi-page SPA state based on hash
  const [activeSection, setActiveSection] = useState(() => {
    const hash = window.location.hash.replace("#", "");
    return ["beranda", "filosofi", "server-info", "aturan", "komunitas"].includes(hash) ? hash : "beranda";
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (["beranda", "filosofi", "server-info", "aturan", "komunitas"].includes(hash)) {
        setActiveSection(hash);
      } else {
        setActiveSection("beranda");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Dynamic Open Graph Tags & Favicon Setup
  useEffect(() => {
    // Dynamic document title
    document.title = `${siteConfig.name} - ${siteConfig.description}`;

    // Helper to update or create meta tags
    const updateMetaTag = (property: string, content: string, isName = false) => {
      const attr = isName ? "name" : "property";
      let element = document.querySelector(`meta[${attr}="${property}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, property);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // SEO Meta
    updateMetaTag("description", siteConfig.description, true);

    // Open Graph Tags
    updateMetaTag("og:title", siteConfig.name);
    updateMetaTag("og:description", siteConfig.description);
    updateMetaTag("og:type", "website");
    updateMetaTag("og:url", window.location.href);

    // Use dynamic/local background image as WhatsApp/OG thumbnail as requested
    const thumbnail = background;
    updateMetaTag("og:image", thumbnail);
    updateMetaTag("og:image:width", "1200");
    updateMetaTag("og:image:height", "630");

    // Twitter
    updateMetaTag("twitter:card", "summary_large_image", true);
    updateMetaTag("twitter:title", siteConfig.name, true);
    updateMetaTag("twitter:description", siteConfig.description, true);
    updateMetaTag("twitter:image", thumbnail, true);

    // Dynamic Favicon from Logo Image
    const favUrl = logoImage;
    let faviconLink = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
    if (!faviconLink) {
      faviconLink = document.createElement("link");
      faviconLink.setAttribute("rel", "icon");
      document.head.appendChild(faviconLink);
    }
    faviconLink.setAttribute("href", favUrl);
  }, [data]);

  return (
    <div className="relative min-h-screen bg-obsidian text-moonwhite selection:bg-goldaccent/30 selection:text-white overflow-x-hidden font-sans">
      
      {/* Absolute Global Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-repeat bg-center" 
           style={{ backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.5%)', backgroundSize: '16px 16px' }} />
      
      {/* Background Image Parallax Overlay on general sections */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src={background}
          alt="EVEMON Forest Night Background"
          className="w-full h-full object-cover filter blur-[2px] brightness-[0.15]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian" />
      </div>

      {/* Floating subtle ambient fog animation */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[120%] h-[30%] bg-blue-900/5 filter blur-[150px] animate-pulse duration-10000" />
        <div className="absolute bottom-[20%] left-[-10%] w-[120%] h-[30%] bg-neutral-900/10 filter blur-[150px] animate-pulse duration-8000" />
      </div>

      {/* Structured Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Unified sticky, multi-layered Header */}
        <Navbar />

        {/* Core sections (Anti-Lag Multi-page SPA rendering) */}
        <main className="flex-grow">
          {activeSection === "beranda" && <Hero />}
          {activeSection === "filosofi" && <Philosophy />}
          {activeSection === "server-info" && <ServerInfo />}
          {activeSection === "aturan" && (
            <>
              <Rules />
              <Consequences />
            </>
          )}
          {activeSection === "komunitas" && <Community />}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
