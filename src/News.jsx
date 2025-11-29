import React from 'react';
import Navigation from './Navigation';

export default function News({ activeSection, onNavigate, onScrollToSection }) {
  return (
    <div className="min-h-screen bg-dark-950">
      <Navigation 
        activeSection={activeSection || 'company'} 
        onNavigate={onNavigate} 
        onScrollToSection={onScrollToSection} 
      />
      <div className="max-w-5xl mx-auto py-24 px-6 lg:px-12">
        <h1 className="text-4xl font-bold text-white mb-6">News</h1>
        <p className="text-dark-300 mb-6">Latest announcements and press coverage.</p>
        <div className="space-y-6">
          <article className="bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-white">Cerrado launches new AI platform</h4>
            <p className="text-dark-300 mt-2">Read about our newest advances in scalable AI deployments.</p>
          </article>
        </div>
      </div>
    </div>
  );
}
