"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface Blessing {
  text: string;
  language: 'english' | 'hindi';
  id: string;
  height: string;
  style: string;
  pattern: string;
  animation: string;
}

export default function Saved() {
  const [savedBlessings, setSavedBlessings] = useState<Blessing[]>([]);
  const [fullscreenCard, setFullscreenCard] = useState<Blessing | null>(null);
  const fullscreenRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load saved blessings from localStorage
    const loadSavedBlessings = () => {
      const saved = localStorage.getItem('savedBlessings');
      if (saved) {
        setSavedBlessings(JSON.parse(saved));
      }
      setIsLoading(false);
    };

    loadSavedBlessings();
  }, []);

  const openFullscreen = (blessing: Blessing) => {
    setFullscreenCard(blessing);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setFullscreenCard(null);
    document.body.style.overflow = 'auto';
  };

  const handleRemoveBlessing = (id: string) => {
    const updatedBlessings = savedBlessings.filter(blessing => blessing.id !== id);
    setSavedBlessings(updatedBlessings);
    localStorage.setItem('savedBlessings', JSON.stringify(updatedBlessings));
    
    // If we're removing the currently displayed card, close it
    if (fullscreenCard && fullscreenCard.id === id) {
      closeFullscreen();
    }
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

  return (
    <main className="min-h-screen bg-gradient-to-b from-spirit-light via-spirit-lavender/20 to-spirit-blue/20">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <header className="py-8 flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-display text-spirit-violet mb-3 animate-float glow text-center md:text-left">
              Saved Blessings
            </h1>
            <p className="text-spirit-text/80 max-w-2xl mb-4 text-center md:text-left">
              Your personally saved spiritual blessings
            </p>
          </div>
          
          <Link href="/" className="spirit-button bg-gradient-to-r from-spirit-blue/80 to-spirit-purple/80 text-white hover:from-spirit-blue hover:to-spirit-purple shadow-spirit hover:shadow-spirit-hover mt-4 md:mt-0">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blessings
            </span>
          </Link>
        </header>
        
        {isLoading ? (
          <div className="flex justify-center items-center p-12">
            <div className="w-16 h-16 relative animate-spin">
              <div className="absolute inset-0 rounded-full border-4 border-spirit-lavender/20 border-t-spirit-purple"></div>
              <div className="absolute inset-2 rounded-full border-4 border-spirit-teal/20 border-t-spirit-teal animate-pulse"></div>
            </div>
          </div>
        ) : savedBlessings.length === 0 ? (
          <div className="text-center p-12 bg-white/10 backdrop-blur-sm rounded-2xl shadow-spirit">
            <div className="w-20 h-20 mx-auto mb-4 opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
            <h2 className="text-xl text-spirit-dark mb-4">No Saved Blessings Yet</h2>
            <p className="text-spirit-text/80 mb-6">Your saved blessings will appear here. Go back and save some blessings.</p>
            <Link href="/" className="spirit-button inline-block bg-gradient-to-r from-spirit-gold/80 to-spirit-orange/80 text-spirit-dark hover:from-spirit-gold hover:to-spirit-orange shadow-spirit hover:shadow-spirit-hover">
              Discover Blessings
            </Link>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {savedBlessings.map((blessing, index) => (
              <div 
                key={blessing.id}
                style={{animationDelay: `${index * 0.05}s`}}
                className={`flip-card magic-border break-inside-avoid rounded-2xl overflow-hidden shadow-spirit cursor-pointer transform transition-all hover:-translate-y-1 hover:shadow-glow ${blessing.height} ${blessing.animation || 'animate-float'}`}
                onClick={() => openFullscreen(blessing)}
              >
                <div className={`flip-card-inner h-full`}>
                  {/* Front of card always shows the blessing text */}
                  <div className={`flip-card-front rounded-2xl glass ${blessing.style} ${blessing.pattern || 'pattern-mandala'} h-full p-5 flex flex-col shimmer-bg`}>
                    <div className="flex-grow flex items-center justify-center">
                      <p className={`text-base text-white text-center line-clamp-6 ${blessing.language === 'hindi' ? 'font-hindi' : ''}`}>
                        {blessing.text}
                      </p>
                    </div>
                    <div className="flex justify-end mt-auto">
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-spirit-white/50 text-spirit-text">
                        {blessing.language === 'english' ? 'English' : 'हिंदी'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Card View */}
      {fullscreenCard && (
        <div 
          ref={fullscreenRef}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === fullscreenRef.current) {
              closeFullscreen();
            }
          }}
        >
          <div className={`glass max-w-2xl w-full rounded-2xl shadow-glow transform transition-all animate-card-flip ${fullscreenCard.style} ${fullscreenCard.pattern || 'pattern-mandala'}`}>
            <div className="p-8 flex flex-col min-h-[50vh]">
              <div className="flex justify-between mb-4">
                <button 
                  onClick={closeFullscreen}
                  className="spirit-button bg-spirit-white/80 text-spirit-dark hover:bg-spirit-white shadow-spirit flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Close
                </button>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-spirit-white/80 text-spirit-dark flex items-center">
                  {fullscreenCard.language === 'english' ? 'English' : 'हिंदी'}
                </span>
              </div>
              
              <div className="flex-grow flex items-center justify-center my-8">
                <p className={`text-xl md:text-2xl text-white text-center ${fullscreenCard.language === 'hindi' ? 'font-hindi' : ''}`}>
                  {fullscreenCard.text}
                </p>
              </div>
              
              <div className="flex justify-center space-x-4 mt-auto">
                <button 
                  onClick={() => handleRemoveBlessing(fullscreenCard.id)}
                  className="spirit-button bg-spirit-red/80 text-white hover:bg-spirit-red shadow-spirit hover:shadow-spirit-hover flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Remove
                </button>
                
                <button 
                  onClick={() => handleShareBlessing(fullscreenCard)}
                  className="spirit-button bg-spirit-white/80 text-spirit-dark hover:bg-spirit-white shadow-spirit hover:shadow-spirit-hover flex items-center"
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