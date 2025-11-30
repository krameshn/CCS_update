import React from 'react';
import { ArrowRight } from 'lucide-react';
import Navigation from './Navigation';
import profilePhoto from './assets/images/profile_photo.png';
import linkedin from './assets/images/linkedin.png';
import ccslogo from './assets/images/ccs_logo.png';
import isblogo from './assets/images/isb_logo.png';
import kyndryllogo from './assets/images/kyndryl_logo.png';
import ibmlogo from './assets/images/ibm_logo.png';
import hplogo from './assets/images/hp_logo.png';
import londonbusinessschoollogo from './assets/images/london_business_school_logo.png';
import whartonlogo from './assets/images/wharton_logo.png';

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
        <div><div className='txt12'><img src={linkedin} align="absmiddle" /><a href='www.linkedin.com/in.porikasrikanth' target='_blank'>www.linkedin.com/in.porikasrikanth</a></div>
            <img src={profilePhoto} alt="Profile Photo" className="profile-img" />
        </div>

        <div className="text-dark-300 mb-6">
         <div className='right'><img src={isblogo} align="absmiddle" /></div>
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
        <img src={ccslogo}  alt="Cerrado Consulting Services" />
        <img src={kyndryllogo}  alt="Kyndryl" />
        <img src={ibmlogo}  alt="IBM" />
        <img src={hplogo}  alt="HP" />
        <img src={londonbusinessschoollogo}  alt="London Business School"/>
        <img src={whartonlogo}  alt="Wharton"/>
    </div>
      </div>
    </div>
  );
}
