"use client";

import React, { useState, useRef } from 'react';
import { toPng } from 'html-to-image';
import englishBlessings from '@/data/englishBlessings.json';
import hindiBlessings from '@/data/hindiBlessings.json';
import Link from 'next/link';

export default function CreateBlessingImage() {
  const [selectedBlessing, setSelectedBlessing] = useState('');
  const [customText, setCustomText] = useState('');
  const [language, setLanguage] = useState<'english' | 'hindi'>('english');
  const [background, setBackground] = useState<string>('bg-gradient-to-r from-pink-100 to-purple-200');
  const [textColor, setTextColor] = useState<string>('text-gray-800');
  const cardRef = useRef<HTMLDivElement>(null);

  const backgroundOptions = [
    { value: 'bg-gradient-to-r from-pink-100 to-purple-200', label: 'Pink to Purple' },
    { value: 'bg-gradient-to-r from-cyan-100 to-blue-200', label: 'Cyan to Blue' },
    { value: 'bg-gradient-to-r from-yellow-100 to-amber-200', label: 'Yellow to Amber' },
    { value: 'bg-gradient-to-r from-emerald-100 to-teal-200', label: 'Emerald to Teal' },
    { value: 'bg-gradient-to-r from-rose-100 to-red-200', label: 'Rose to Red' },
  ];

  const textColorOptions = [
    { value: 'text-gray-800', label: 'Dark Gray' },
    { value: 'text-indigo-800', label: 'Indigo' },
    { value: 'text-emerald-800', label: 'Emerald' },
    { value: 'text-rose-800', label: 'Rose' },
    { value: 'text-amber-800', label: 'Amber' },
  ];

  const handleRandomBlessing = () => {
    const blessings = language === 'english' ? englishBlessings : hindiBlessings;
    const randomIndex = Math.floor(Math.random() * blessings.length);
    setSelectedBlessing(blessings[randomIndex]);
    setCustomText('');
  };

  const handleSaveImage = () => {
    if (cardRef.current) {
      toPng(cardRef.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = 'blessing-card.png';
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.error('Error generating image', err);
        });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-8">
      <div className="max-w-6xl mx-auto p-4">
        <header className="mb-8">
          <Link 
            href="/"
            className="mb-4 inline-block text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            ← Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-800">Create Blessing Image</h1>
          <p className="text-gray-600">Design and download a custom blessing card</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-indigo-800">Customize Your Blessing</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-md ${language === 'english' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                    onClick={() => setLanguage('english')}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-md ${language === 'hindi' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                    onClick={() => setLanguage('hindi')}
                  >
                    Hindi
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Blessing Text</label>
                <div className="flex space-x-2 mb-2">
                  <button
                    type="button"
                    onClick={handleRandomBlessing}
                    className="px-3 py-1 bg-emerald-600 text-white text-sm rounded-md hover:bg-emerald-700"
                  >
                    Random Blessing
                  </button>
                </div>
                <textarea
                  value={customText || selectedBlessing}
                  onChange={(e) => {
                    setCustomText(e.target.value);
                    setSelectedBlessing('');
                  }}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-32"
                  placeholder="Enter your blessing text or select a random one"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Background Style</label>
                <select
                  value={background}
                  onChange={(e) => setBackground(e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  {backgroundOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Text Color</label>
                <select
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  {textColorOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleSaveImage}
                className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                Download Image
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div 
              ref={cardRef} 
              className={`w-full max-w-md aspect-square rounded-xl shadow-lg ${background} p-8 flex items-center justify-center overflow-hidden`}
            >
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full bg-white bg-opacity-70 text-indigo-700">
                    {language === 'english' ? 'English' : 'हिंदी'}
                  </span>
                </div>
                
                <p className={`text-center text-lg md:text-xl ${textColor} ${language === 'hindi' ? 'font-hindi' : ''}`}>
                  {customText || selectedBlessing || 'Your blessing will appear here'}
                </p>
                
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <span className="text-xs font-medium opacity-75">
                    Blessing Weaver
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 