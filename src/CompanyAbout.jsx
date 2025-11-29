import React from 'react';
import { ArrowRight } from 'lucide-react';
import Navigation from './Navigation';

export default function CompanyAbout({ activeSection, onNavigate, onScrollToSection }) {
  return (
    <div className="min-h-screen bg-dark-950">
      <Navigation 
        activeSection={activeSection || 'company'} 
        onNavigate={onNavigate} 
        onScrollToSection={onScrollToSection} 
      />
      <div className="max-w-5xl mx-auto py-24 px-6 lg:px-12">
        <h1 className="text-4xl font-bold text-white mb-6">About the Founder</h1>
        <p className="text-dark-300 mb-6">
          Our founder brings decades of leadership in enterprise AI and a mission-driven approach to bringing
          responsible, scalable AI to Fortune 100 companies. The company was founded to accelerate real business
          outcomes using modern AI platforms and rigorous governance.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-2">Vision</h3>
            <p className="text-dark-300">To make enterprise AI practical, safe, and value-driven.</p>
          </div>
          <div className="bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-2">Leadership</h3>
            <p className="text-dark-300">Experienced executives from data, AI, and product backgrounds.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
