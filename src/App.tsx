import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';
import { ExpansionProvider } from './contexts/ExpansionContext';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let timeoutId: number;
    
    const handleScroll = () => {
      // Debounce scroll handler to prevent excessive re-renders
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      }, 100); // 100ms debounce
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <ExpansionProvider>
      <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
        <Navigation activeSection={activeSection} />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ExpansionProvider>
  );
}

export default App;