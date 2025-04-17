"use client";

import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-8">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-6">About Blessing Weaver</h1>
        
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Our Purpose</h2>
          <p className="text-gray-700 mb-4">
            Blessing Weaver is a platform designed to share spiritual blessings from ancient wisdom traditions. 
            Our collection includes hundreds of blessings in both English and Hindi that provide spiritual 
            guidance, encouragement, and wisdom for daily life.
          </p>
          <p className="text-gray-700 mb-4">
            Each blessing in our collection has been carefully curated to help you connect with deeper spiritual truths 
            and to offer positive affirmations that can uplift your spirit and guide your path.
          </p>
          
          <h2 className="text-2xl font-semibold text-indigo-700 mt-8 mb-4">Features</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Random blessing generator in English and Hindi</li>
            <li>Save your favorite blessings for future reference</li>
            <li>Create beautiful blessing images to download and share</li>
            <li>Mobile-friendly design for blessings on the go</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-indigo-700 mt-8 mb-4">How to Use</h2>
          <p className="text-gray-700 mb-4">
            On the home page, you can receive a random blessing in your preferred language.
            You can save blessings that resonate with you, and they will be stored in your collection.
            Visit the Create Image page to design custom blessing cards that you can download and share with others.
          </p>
          
          <div className="mt-8 flex justify-center">
            <Link 
              href="/" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Get Your Blessing Now
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">About the Blessings</h2>
          <p className="text-gray-700 mb-4">
            Our blessings come from spiritual traditions and are designed to inspire, guide, and uplift.
            They contain wisdom about qualities such as compassion, patience, purity, happiness, and spiritual progress.
          </p>
          <p className="text-gray-700">
            We hope these blessings bring light and positivity to your day. If you have any questions or
            suggestions, please feel free to contact us.
          </p>
        </div>
      </div>
    </main>
  );
} 