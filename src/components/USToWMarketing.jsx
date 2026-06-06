import React from 'react';
import { Check, Phone, MessageSquare, Globe, Zap, Users, Target } from 'lucide-react';

export default function USToWMarketing() {
  const pricingPlans = [
    { name: 'SHAREHOLDER', price: 199, features: ['AI Dispatch', 'Social Scheduling', 'SMS Marketing', 'Lead Capture', 'Email Support'], highlighted: false },
    { name: 'ELITE PROFILE MEMBER', price: 299, features: ['All Shareholder', 'Website Builder', 'Funnel Management', '24/7 Support', 'Workflows'], highlighted: true, badge: 'Most Popular' },
    { name: 'PROFILE MEMBER', price: 399, features: ['All Elite', 'Dedicated Support', 'API Access', 'White-Label', 'Unlimited Add-ons'], highlighted: false }
  ];

  const testimonials = [
    { quote: 'Marketing built for towing. Went from 8 to 34 leads/week in 60 days.', author: 'Owner', location: 'Texas', initials: 'TC' },
    { quote: 'Built BY towing people FOR towing people. Workflows designed for us.', author: 'Operator', location: 'Florida', initials: 'IO' },
    { quote: 'AI understands towing. No learning curve. Upgraded in 3 months.', author: 'Owner', location: 'California', initials: 'TB' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white shadow-sm z-50 px-4">
        <div className="max-w-7xl mx-auto h-16 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#1e3a5f]">US Tow Marketing</div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-gray-700 hover:text-[#ff6b35]">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-[#ff6b35]">Pricing</a>
            <a href="#testimonials" className="text-gray-700 hover:text-[#ff6b35]">Testimonials</a>
          </div>
        </div>
      </nav>
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-[#1e3a5f] to-[#2a4f7f] text-white min-h-[70vh] flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">24/7 Automated Marketing Built for Towing</h1>
          <p className="text-lg sm:text-xl mb-8 text-gray-100">All platforms, SMS, website, customer funnels. Built BY operators FOR operators.</p>
          <a href="#pricing" className="inline-block bg-[#ff6b35] hover:bg-[#e55a27] text-white font-bold py-4 px-8 rounded-lg">Start Free Trial</a>
        </div>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1e3a5f]">Why US Tow Marketing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg"><h3 className="text-xl font-bold text-[#1e3a5f] mb-4">All-In-One</h3><p className="text-gray-700">All platforms from one dashboard.</p></div>
            <div className="bg-white p-8 rounded-lg"><h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Built for Towing</h3><p className="text-gray-700">Pre-configured for dispatch and funnels.</p></div>
            <div className="bg-white p-8 rounded-lg"><h3 className="text-xl font-bold text-[#1e3a5f] mb-4">24/7 Automation</h3><p className="text-gray-700">AI dispatch and lead capture.</p></div>
          </div>
        </div>
      </section>
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-[#1e3a5f]">Everything You Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg"><Zap className="w-8 h-8 text-[#ff6b35] mb-4" /><h3 className="text-xl font-bold text-[#1e3a5f] mb-3">AI Dispatch</h3><p>Routes calls automatically.</p></div>
            <div className="bg-gray-50 p-8 rounded-lg"><Phone className="w-8 h-8 text-[#ff6b35] mb-4" /><h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Social Scheduling</h3><p>All platforms in one place.</p></div>
            <div className="bg-gray-50 p-8 rounded-lg"><MessageSquare className="w-8 h-8 text-[#ff6b35] mb-4" /><h3 className="text-xl font-bold text-[#1e3a5f] mb-3">SMS Marketing</h3><p>Pre-written sequences.</p></div>
          </div>
        </div>
      </section>
      <section id="pricing" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1e3a5f]">Plans for Your Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => (
              <div key={i} className={plan.highlighted ? 'bg-[#1e3a5f] text-white p-8 rounded-lg shadow-2xl md:scale-105' : 'bg-white p-8 rounded-lg shadow-lg'}>
                {plan.badge && <div className="bg-[#ff6b35] text-white text-center py-2 font-bold mb-4 text-sm">{plan.badge}</div>}
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">${plan.price}<span className="text-lg">/mo</span></div>
                <a href="#contact" className="w-full block text-center py-3 bg-[#ff6b35] text-white font-bold rounded mb-8 hover:bg-[#e55a27]">Start Free Trial</a>
                <ul className="space-y-3">{plan.features.map((f, j) => (<li key={j} className="flex items-center gap-2"><Check size={18} className="text-[#ff6b35]" />{f}</li>))}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-[#1e3a5f]">What Operators Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-700 mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#ff6b35] rounded-full flex items-center justify-center text-white font-bold text-sm">{t.initials}</div>
                  <div><p className="font-bold text-[#1e3a5f]">{t.author}</p><p className="text-sm text-gray-600">{t.location}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-[#ff6b35] to-[#e55a27] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Join US Tow Alliance</h2>
          <p className="text-lg mb-8">Exclusive leads, AI dispatch, marketing automation.</p>
          <a href="#" className="bg-[#1e3a5f] hover:bg-[#152740] text-white font-bold py-4 px-8 rounded-lg inline-block">Claim Your Free Trial</a>
        </div>
      </section>
      <footer className="bg-[#1e3a5f] text-gray-300 py-8 px-4 text-center">
        <p>© 2026 US Tow Alliance. All rights reserved.</p>
      </footer>
    </div>
  );
}
