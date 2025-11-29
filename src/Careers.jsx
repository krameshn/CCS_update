import React from 'react';
import Navigation from './Navigation';

export default function Careers({ activeSection, onNavigate, onScrollToSection }) {
  return (
    <div className="min-h-screen bg-dark-950">
      <Navigation 
        activeSection={activeSection || 'company'} 
        onNavigate={onNavigate} 
        onScrollToSection={onScrollToSection} 
      />
      <div className="max-w-5xl mx-auto py-24 px-6 lg:px-12">
        <h1 className="text-4xl font-bold text-white mb-6">Careers</h1>
        <p className="text-dark-300 mb-6">We're growing — join a team building enterprise-grade AI products and services.</p>
        <div className="bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-2">Open roles</h3>
          <ul className="text-dark-300 list-disc pl-5">
            <li>Senior ML Engineer</li>
            <li>Product Manager, AI Platforms</li>
            <li>Customer Success Manager</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
