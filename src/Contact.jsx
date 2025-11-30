import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Navigation from './Navigation';

export default function Contact({ activeSection, onNavigate, onScrollToSection }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  // Role radios with 'other' text input
  const [role, setRole] = useState('CXO');
  const [otherRole, setOtherRole] = useState('');

  // Support calls radio group
  const [supportCalls, setSupportCalls] = useState('< 50,000');

  // Validation / touched states
  const [touched, setTouched] = useState({});

  const emailIsValid = (v) => {
    // simple email check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  };

  const isValid = fullName.trim() !== '' && emailIsValid(email) && company.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    // mark all fields as touched so errors appear if any
    setTouched({ fullName: true, email: true, company: true, message: true, role: true, supportCalls: true });
    if (!isValid) return;
    const payload = {
      fullName,
      email,
      company,
      message,
      role: role === 'Other' ? otherRole || 'Other' : role,
      supportCalls,
    };
    // eslint-disable-next-line no-console
    console.log('Contact form submit:', payload);
    alert('Thanks — form submitted (check console)');
  };

  return (
    <div className="min-h-screen bg-dark-950">
      <Navigation 
        activeSection={activeSection || 'contact'} 
        onNavigate={onNavigate} 
        onScrollToSection={onScrollToSection} 
      />
      <div className="max-w-4xl mx-auto py-24 px-6 lg:px-12 wow fadeInUp">
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">AI agents for B2C enterprise support</h1>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            Ready to get started? Tell us about your needs and we'll be in touch to
            schedule a personalized demo and next steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Details</h2>
            <p className="text-dark-300 mb-6">Sales & Partnerships</p>
            <p className="text-dark-300 mb-2">Email: <a className="text-brand-300">admin@cerredoconsulting.com</a></p>
            <p className="text-dark-300 mb-6">Phone: <span className="text-dark-300">+91 8886564445</span></p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Company Registry</h3>
            <p className="text-dark-300">
Balaji meadows,<br/>
Diamond heights,<br/>
Nallagandla,<br/>Hyderabad</p>

            <div className="mt-8">
              <a href="#" className="inline-flex items-center gap-2 text-brand-300 font-medium">
                View trust & compliance
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br wow from-dark-800 to-dark-900 border border-dark-700 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Request a demo</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm text-dark-300 mb-1">Full name</label>
                <input
                  aria-required={true}
                  aria-invalid={fullName.trim() === ''}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, fullName: true }))}
                  className="w-full px-4 py-3 rounded bg-dark-900 border border-dark-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-400"
                />
                {touched.fullName && fullName.trim() === '' && (
                  <p className="text-red-400 text-sm mt-1">Full name is required.</p>
                )}
              </div>
              <div>
                <label className="block text-sm text-dark-300 mb-1">Work email</label>
                <input
                  aria-required={true}
                  aria-invalid={!emailIsValid(email)}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  className="w-full px-4 py-3 rounded bg-dark-900 border border-dark-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-400"
                />
                {touched.email && !emailIsValid(email) && (
                  <p className="text-red-400 text-sm mt-1">Please enter a valid work email.</p>
                )}
              </div>
              <div>
                <label className="block text-sm text-dark-300 mb-1">Company</label>
                <input
                  aria-required={true}
                  aria-invalid={company.trim() === ''}
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, company: true }))}
                  className="w-full px-4 py-3 rounded bg-dark-900 border border-dark-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-400"
                />
                {touched.company && company.trim() === '' && (
                  <p className="text-red-400 text-sm mt-1">Company is required.</p>
                )}
              </div>

              {/* Role radios with Other option */}
              <div>
                <label className="block text-sm text-dark-300 mb-2">Role</label>
                <div className="space-y-3">
                  {['CXO', 'VP', 'Director', 'Other'].map((r) => (
                    <label
                      key={r}
                      className={`flex items-center gap-3 bg-dark-900 rounded px-4 py-3 border ${role === r ? 'border-brand-400' : 'border-dark-700'}`}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={r}
                        checked={role === r}
                        onChange={() => setRole(r)}
                        onBlur={() => setTouched((t) => ({ ...t, role: true }))}
                        className="form-radio text-brand-400"
                      />
                      <span className="text-dark-100">{r}</span>
                    </label>
                  ))}
                </div>
                {role === 'Other' && (
                  <div className="mt-3">
                    <input
                      placeholder="Please specify"
                      value={otherRole}
                      onChange={(e) => setOtherRole(e.target.value)}
                      onBlur={() => setTouched((t) => ({ ...t, otherRole: true }))}
                      className="w-full px-4 py-3 rounded bg-dark-900 border border-dark-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-400"
                    />
                  </div>
                )}
              </div>

              {/* Support calls radio group */}
              <div>
                <label className="block text-sm text-dark-300 mb-2">Number of Support Calls (Monthly)</label>
                <div className="space-y-3">
                  {['< 50,000', '50,001 - 100,000', '100,001 - 500,000', '500,001 - 1,000,000', '> 1,000,000'].map((opt) => (
                    <label
                      key={opt}
                      className={`flex items-center gap-3 bg-dark-900 rounded px-4 py-3 border ${supportCalls === opt ? 'border-brand-400' : 'border-dark-700'}`}
                    >
                      <input
                        type="radio"
                        name="supportCalls"
                        value={opt}
                        checked={supportCalls === opt}
                        onChange={() => setSupportCalls(opt)}
                        onBlur={() => setTouched((t) => ({ ...t, supportCalls: true }))}
                        className="form-radio text-brand-400"
                      />
                      <span className="text-dark-100">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm text-dark-300 mb-1">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                  className="w-full px-4 py-3 rounded bg-dark-900 border border-dark-700 text-white h-28 focus:outline-none focus:ring-2 focus:ring-brand-400"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!isValid}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                    isValid
                      ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white hover:from-brand-600 hover:to-brand-700'
                      : 'bg-dark-800 text-dark-500 cursor-not-allowed'
                  }`}
                >
                  Submit
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

