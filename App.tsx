
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-[#10041C] min-h-screen text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      {/* Global Background Gradient - Matching peach/coral colors */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] rounded-full blur-[120px]" style={{backgroundColor: 'rgba(255, 181, 167, 0.4)'}} />
         <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px]" style={{backgroundColor: 'rgba(231, 111, 81, 0.3)'}} />
         <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] rounded-full blur-[100px]" style={{backgroundColor: 'rgba(244, 162, 97, 0.2)'}} />
      </div>
      
      <div className="relative z-10 space-y-20 pb-20">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
