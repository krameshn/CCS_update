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
      
      <div className="max-w-5xl mx-auto py-24 px-6 lg:px-12 mt-6 wow fadeInUp">
 
 <div class="header-section">
        <div><div className='txt12'><img src="/src/assets/images/linkedin.png" align="absmiddle" /><a href='www.linkedin.com/in.porikasrikanth' target='_blank'>www.linkedin.com/in.porikasrikanth</a></div>
            <img src="/src/assets/images/profile_photo.png" alt="Profile Photo" className="profile-img" />
        </div>

        <div className="text-dark-300 mb-6">
         <div className='right'><img src="/src/assets/images/isb_logo.png" align="absmiddle" /></div>
           <h1 className="text-4xl font-bold text-white mb-6">About me</h1>

            <p><strong>Srikant Porika</strong>, Founder & CEO of Cerrado Consulting Services, an AI product, services and technology company.
                (<a href="https://cerradoconsulting.com" target="_blank">cerradoconsulting.com</a>)
            </p>

            <h3>Prior Experience:</h3>
            <p>
                Worked as Director of Digital Transformation, Cloud, Applications, AI, and Automation at Kyndryl and IBM.
                Award-winning business leader with over two decades of demonstrated success in driving business transformations,
                building new business units, developing practices, and driving growth.
                Passionate about business model disruption through innovation and technology.
            </p>
<div className="bg-gradient-to-br from-dark-800 mt-6 to-dark-900 border border-dark-700 rounded-lg p-6">
           <h3 className="text-xl font-semibold text-white mb-2">Academics:</h3>
            <p>
                Executive MBA from the Indian School of Business in General Management,
                Wharton in M&A Specialization, LBS in Business Model Innovation and Marketing Strategy,
                and JNTU in Masters in Computers.
            </p>
</div><div className="bg-gradient-to-br from-dark-800 mt-6 to-dark-900 border border-dark-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-2">Additional Profile:</h3>
            <ul>
                <li>Visiting Professor at Mahindra University Hyderabad and NIT Warangal</li>
                <li>Journals published in IJMER and active speaker at Universities and global events</li>
            </ul></div>
        </div>
    </div>

    <div class="logos mt-2">
        <img src="/src/assets/images/ccs_logo.png" alt="Cerrado Consulting Services" />
        <img src="/src/assets/images/kyndryl_logo.png" alt="Kyndryl" />
        <img src="/src/assets/images/ibm_logo.png" alt="IBM" />
        <img src="/src/assets/images/hp_logo.png" alt="HP" />
        <img src="/src/assets/images/london_business_school_logo.png" alt="London Business School"/>
        <img src="/src/assets/images/wharton_logo.png" alt="Wharton"/>
    </div>
      </div>
    </div>
  );
}
