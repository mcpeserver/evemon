import React from "react";
import DeveloperBar from "./components/DeveloperBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import ServerInfo from "./components/ServerInfo";
import Rules from "./components/Rules";
import Consequences from "./components/Consequences";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-obsidian text-moonwhite selection:bg-goldaccent/30 selection:text-white overflow-x-hidden font-sans">
      
      {/* Absolute Global Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-repeat bg-center" 
           style={{ backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.5%)', backgroundSize: '16px 16px' }} />
      
      {/* Background Image Parallax Overlay on general sections */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src="/background.png"
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
        
        {/* Unified fixed, multi-layered Header */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <DeveloperBar />
          <Navbar />
        </div>

        {/* Core sections */}
        <main className="flex-grow">
          <Hero />
          <Philosophy />
          <ServerInfo />
          <Rules />
          <Consequences />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
