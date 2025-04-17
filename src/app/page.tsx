"use client";

import { useState, useEffect, useRef } from 'react';
import englishBlessings from '@/data/englishBlessings.json';
import hindiBlessings from '@/data/hindiBlessings.json';
import Link from 'next/link';

export default function Home() {
  const [blessings, setBlessings] = useState<{text: string, language: 'english' | 'hindi', id: string, height: string, style: string, pattern: string, animation: string}[]>([]);
  const [currentLanguage, setCurrentLanguage] = useState<'english' | 'hindi'>('english');
  const [fullscreenCard, setFullscreenCard] = useState<{text: string, language: 'english' | 'hindi', id: string, height: string, style: string, pattern: string, animation: string} | null>(null);
  const [savedBlessings, setSavedBlessings] = useState<{text: string, language: 'english' | 'hindi', id: string, height: string, style: string, pattern: string, animation: string}[]>([]);
  const fullscreenRef = useRef<HTMLDivElement>(null);
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    // Load any saved blessings from localStorage
    const saved = localStorage.getItem('savedBlessings');
    if (saved) {
      setSavedBlessings(JSON.parse(saved));
    }
    
    // Initialize blessings
    generateBlessingsGrid();
  }, []);

  useEffect(() => {
    // When language changes, regenerate blessings
    generateBlessingsGrid();
  }, [currentLanguage]);

  const generateBlessingsGrid = () => {
    const blessingsData = currentLanguage === 'english' ? englishBlessings : hindiBlessings;
    
    const mappedBlessings = blessingsData.map(text => ({ 
      text, 
      language: currentLanguage, 
      id: Math.random().toString(36).substring(2),
      height: getRandomHeight(),
      style: getRandomCardStyle(),
      pattern: getRandomPattern(),
      animation: getRandomAnimation()
    }));
    
    // Shuffle and take 24 random blessings
    const shuffled = mappedBlessings.sort(() => 0.5 - Math.random());
    setBlessings(shuffled.slice(0, 24));
    
    // Trigger a fun animation
    setIsExploding(true);
    setTimeout(() => setIsExploding(false), 700);
  };

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'english' ? 'hindi' : 'english');
  };

  const openFullscreen = (blessing: {text: string, language: 'english' | 'hindi', id: string, height: string, style: string, pattern: string, animation: string}) => {
    setFullscreenCard(blessing);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setFullscreenCard(null);
    document.body.style.overflow = 'auto';
  };

  const handleSaveBlessing = (blessing: {text: string, language: 'english' | 'hindi', id: string, height: string, style: string, pattern: string, animation: string}) => {
    // Check if already saved
    if (savedBlessings.some(saved => saved.id === blessing.id)) {
      return;
    }
    
    const updatedSaved = [...savedBlessings, blessing];
    setSavedBlessings(updatedSaved);
    localStorage.setItem('savedBlessings', JSON.stringify(updatedSaved));
  };
  
  const handleShareBlessing = (blessing: {text: string, language: 'english' | 'hindi'}) => {
    if (navigator.share) {
      navigator.share({
        title: 'Blessing from Blessing Weaver',
        text: blessing.text,
        url: window.location.href,
      }).catch(error => console.log('Error sharing', error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      alert(`Copy this blessing: ${blessing.text}`);
    }
  };

  // Generate random card styles with Thistledown colors
  const getRandomCardStyle = () => {
    const styles = [
      'bg-gradient-to-r from-thistledown-5 to-thistledown-2/90',
      'bg-gradient-to-br from-thistledown-2 to-thistledown-1/90',
      'bg-gradient-to-bl from-thistledown-3 to-thistledown-4/90',
      'bg-gradient-to-tr from-thistledown-4 to-thistledown-5/90',
      'bg-gradient-to-tl from-thistledown-5 to-thistledown-4/90',
      'bg-gradient-to-r from-thistledown-2 to-thistledown-1/90',
      'bg-gradient-to-b from-thistledown-1 to-thistledown-4/90',
      'bg-gradient-to-t from-thistledown-5 to-thistledown-3/90',
      'bg-gradient-to-r from-thistledown-4 to-thistledown-1/90',
      'bg-gradient-to-br from-thistledown-3 to-thistledown-5/90',
      'bg-gradient-to-bl from-thistledown-2 to-thistledown-3/90',
      'bg-gradient-to-tr from-thistledown-3 to-thistledown-2/90',
    ];
    return styles[Math.floor(Math.random() * styles.length)];
  };

  // Get random pattern
  const getRandomPattern = () => {
    const patterns = [
      'pattern-circles', 
      'pattern-waves', 
      'pattern-triangles', 
      'pattern-zigzag', 
      'pattern-mandala',
      'pattern-cosmic',
      'pattern-lotus',
      'pattern-chakra'
    ];
    return patterns[Math.floor(Math.random() * patterns.length)];
  };

  // Get random animation
  const getRandomAnimation = () => {
    const animations = [
      'animate-float', 
      'animate-float-slow', 
      'animate-pulse-glow',
      'hover:animate-wiggle',
      'animate-expand',
    ];
    return animations[Math.floor(Math.random() * animations.length)];
  };

  // Get random card height for masonry layout
  const getRandomHeight = () => {
    const heights = ["h-56", "h-64", "h-72", "h-80"];
    return heights[Math.floor(Math.random() * heights.length)];
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-thistledown-3 via-thistledown-4/20 to-thistledown-1/20">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <header className="text-center py-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-display text-thistledown-5 mb-3 animate-float glow">
            Blessing Weaver
          </h1>
          <p className="text-thistledown-5/80 max-w-2xl mx-auto mb-8">
            Spiritual blessings in English and Hindi
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button 
              onClick={toggleLanguage}
              className="spirit-button bg-gradient-to-r from-thistledown-4/80 to-thistledown-5/80 text-thistledown-1 hover:from-thistledown-4 hover:to-thistledown-5 shadow-spirit hover:shadow-spirit-hover"
            >
              {currentLanguage === 'english' ? 'Switch to Hindi' : 'Switch to English'}
            </button>
            
            <button 
              onClick={generateBlessingsGrid}
              className="spirit-button bg-gradient-to-r from-thistledown-5/80 to-thistledown-1/80 text-thistledown-3 hover:from-thistledown-5 hover:to-thistledown-1 shadow-spirit hover:shadow-spirit-hover"
            >
              <span className="relative">
                Refresh Blessings
                <span className="absolute top-0 right-0 -mr-1 -mt-1 w-2 h-2 rounded-full bg-thistledown-4 animate-ping"></span>
              </span>
            </button>
            
            <Link href="/saved" className="spirit-button bg-gradient-to-r from-thistledown-2/80 to-thistledown-1/80 text-thistledown-5 hover:from-thistledown-2 hover:to-thistledown-1 shadow-spirit hover:shadow-spirit-hover flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              Saved Blessings
            </Link>
          </div>
        </header>
        
        {/* Masonry Grid Layout */}
        <div className={`columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 transition-all duration-300 ease-in-out ${isExploding ? 'scale-105 opacity-0' : 'scale-100 opacity-100'}`}>
          {blessings.map((blessing, index) => (
            <div 
              key={blessing.id}
              style={{animationDelay: `${index * 0.05}s`}}
              className={`flip-card magic-border break-inside-avoid rounded-2xl overflow-hidden shadow-spirit cursor-pointer transform transition-all hover:-translate-y-1 hover:shadow-glow ${blessing.height} ${blessing.animation}`}
              onClick={() => openFullscreen(blessing)}
            >
              <div className={`flip-card-inner h-full`}>
                {/* Front of card (pattern only) */}
                <div className={`flip-card-front rounded-2xl glass ${blessing.style} ${blessing.pattern} h-full p-5 flex flex-col shimmer-bg`}>
                  <div className="flex-grow flex items-center justify-center">
                    <div className="w-16 h-16 animate-spin-slow opacity-75">
                      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(224,224,213,0.5)" strokeWidth="3" />
                        <path d="M50,10 A40,40 0 0,1 90,50" fill="none" stroke="#E0E0D5" strokeWidth="4" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-end mt-auto">
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-thistledown-3/50 text-thistledown-5">
                      {blessing.language === 'english' ? 'English' : 'हिंदी'}
                    </span>
                  </div>
                </div>
                
                {/* Back of card (not shown in grid view) */}
                <div className={`flip-card-back rounded-2xl glass ${blessing.style} h-full p-5 flex flex-col`}>
                  <div className="flex-grow flex items-center justify-center">
                    <p className={`text-base line-clamp-5 text-thistledown-3 text-center ${blessing.language === 'hindi' ? 'font-hindi' : ''}`}>
                      {blessing.text}
                    </p>
                  </div>
                  <div className="flex justify-end mt-auto">
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-thistledown-3/50 text-thistledown-5">
                      {blessing.language === 'english' ? 'English' : 'हिंदी'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Card View */}
      {fullscreenCard && (
        <div 
          ref={fullscreenRef}
          className="fixed inset-0 bg-thistledown-1/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === fullscreenRef.current) {
              closeFullscreen();
            }
          }}
        >
          <div className={`glass max-w-2xl w-full rounded-2xl shadow-glow transform transition-all animate-card-flip ${fullscreenCard.style} ${fullscreenCard.pattern}`}>
            <div className="p-8 flex flex-col min-h-[50vh]">
              <div className="flex justify-between mb-4">
                <button 
                  onClick={closeFullscreen}
                  className="spirit-button bg-thistledown-3/80 text-thistledown-5 hover:bg-thistledown-3 shadow-spirit flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Close
                </button>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-thistledown-3/80 text-thistledown-5 flex items-center">
                  {fullscreenCard.language === 'english' ? 'English' : 'हिंदी'}
                </span>
              </div>
              
              <div className="flex-grow flex items-center justify-center my-8">
                <p className={`text-xl md:text-2xl text-thistledown-3 text-center ${fullscreenCard.language === 'hindi' ? 'font-hindi' : ''}`}>
                  {fullscreenCard.text}
                </p>
              </div>
              
              <div className="flex justify-center space-x-4 mt-auto">
                <button 
                  onClick={() => handleSaveBlessing(fullscreenCard)}
                  className="spirit-button bg-thistledown-4/80 text-thistledown-5 hover:bg-thistledown-4 shadow-spirit flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  Save
                </button>
                
                <button 
                  onClick={() => handleShareBlessing(fullscreenCard)}
                  className="spirit-button bg-thistledown-3/80 text-thistledown-5 hover:bg-thistledown-3 shadow-spirit flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
