import React from 'react';
import { Check, Phone, MessageSquare, Globe, Zap, Users, Target, ShieldCheck, Gauge, Bot, ArrowRight, Truck, ExternalLink, Network, Cpu, Wrench, HeartHandshake, Megaphone, Briefcase } from 'lucide-react';

export default function USToWMarketing() {
  const pricingPlans = [
    { brand: 'US Tow Alliance', name: 'Shareholder', price: 199, features: ['AI Dispatch', 'Social Scheduling', 'SMS Marketing', 'Lead Capture', 'Email Support'], highlighted: false },
    { brand: 'US Tow Alliance', name: 'Elite Profile Member', price: 299, features: ['All Shareholder', 'Website Builder', 'Funnel Management', '24/7 Support', 'Workflows'], highlighted: true, badge: 'Most Popular' },
    { brand: 'US Tow Alliance', name: 'Profile Member', price: 399, features: ['All Elite', 'Dedicated Support', 'API Access', 'White-Label', 'Unlimited Add-ons'], highlighted: false }
  ];

  const testimonials = [
    { quote: 'Marketing built for towing. Went from 8 to 34 leads/week in 60 days.', author: 'Owner', location: 'Texas', initials: 'TC' },
    { quote: 'Built BY towing people FOR towing people. Workflows designed for us.', author: 'Operator', location: 'Florida', initials: 'IO' },
    { quote: 'The AI understands towing. No learning curve. Upgraded in 3 months.', author: 'Owner', location: 'California', initials: 'TB' }
  ];

  const stats = [
    { value: '50', label: 'States Covered' },
    { value: '3,588', label: 'Cities' },
    { value: '10.6K', label: 'Carriers' },
    { value: '99.9%', label: 'Uptime' }
  ];

  const handleReserve = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const v = (k) => (f.get(k) || '').toString().trim();
    const body = [
      `Name: ${v('name')}`,
      `Company: ${v('company')}`,
      `City: ${v('city')}`,
      `State: ${v('state')}`,
      `Position in company: ${v('position')}`,
      `Fleet size: ${v('fleet')}`,
      `Ready to market: ${v('timeline')}`,
      '',
      'Biggest marketing problem:',
      v('problem'),
      '',
      'What I would like my marketing to look like:',
      v('vision'),
      '',
      'How you can help me now:',
      v('help'),
      ''
    ].join('\n');
    const href = `mailto:chris@bluecollarai.online?subject=${encodeURIComponent('Reserve Your Seat — US Tow Marketing')}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  };

  const inputCls = 'w-full bg-graphite border border-steel rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan transition-colors';
  const labelCls = 'block text-sm font-medium text-gray-300 mb-1.5';

  return (
    <div className="min-h-screen bg-graphite text-white selection:bg-cyan/30">
      {/* NAV */}
      <nav className="fixed w-full bg-graphite/90 backdrop-blur border-b border-steel z-50 px-4">
        <div className="max-w-7xl mx-auto h-16 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <span className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-cyan to-alliance text-graphite shadow-glow">
              <Truck size={18} strokeWidth={2.5} />
            </span>
            <span className="text-xl font-extrabold tracking-tight">
              US Tow <span className="text-cyan">Marketing</span>
            </span>
          </a>
          <a
            href="https://www.bluecollarai.online"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-sm text-gray-400 hover:text-cyan transition-colors"
          >
            <Cpu size={16} className="text-cyan" />
            <span>Powered by <span className="font-bold text-white">Blue Collar AI</span></span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-36 pb-24 px-4 min-h-[88vh] flex items-center overflow-hidden">
        {/* layered background: graphite base + alliance glow + tech grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-graphite via-graphite to-alliance/40" />
        <div className="absolute -top-24 -right-24 w-[36rem] h-[36rem] rounded-full bg-cyan/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-[36rem] h-[36rem] rounded-full bg-alliance/30 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: 'linear-gradient(#19D3E0 1px, transparent 1px), linear-gradient(90deg, #19D3E0 1px, transparent 1px)', backgroundSize: '48px 48px' }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-cyan border border-cyan/30 bg-cyan/10 rounded-full px-4 py-1.5 mb-8">
            <Zap size={15} /> ONE ALLIANCE. ONE ECOSYSTEM.
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
            24/7 Automated Marketing,<br />
            <span className="bg-gradient-to-r from-cyan to-gold bg-clip-text text-transparent">Custom Built for Towing</span>
          </h1>
          <p className="text-lg sm:text-xl mb-4 text-gray-300 max-w-2xl mx-auto">
            A custom-built, AI-powered 24/7 lead generation, sales promotion, and brand development stack —
            built by the owners, for the owners. Leads developed, qualified, and funneled into one platform
            for your review and follow-up every morning.
          </p>
          <p className="text-xl sm:text-2xl font-bold mb-10 text-cyan max-w-2xl mx-auto">
            AI brings the lead. You close the sale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-gold hover:shadow-glow-gold text-graphite font-bold py-4 px-8 rounded-lg transition-shadow">
              Reserve Your Seat <ArrowRight size={18} />
            </a>
            <a href="#features" className="inline-flex items-center justify-center gap-2 border border-cyan/40 hover:bg-cyan/10 text-cyan font-bold py-4 px-8 rounded-lg transition-colors">
              See How It Works
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-5">Join our free live Zoom — held once a week — to learn more.</p>
        </div>
      </section>

      {/* STAT BAR */}
      <section className="border-y border-steel bg-panel/60 px-4 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-3xl sm:text-4xl font-extrabold text-cyan">{s.value}</div>
              <div className="text-sm text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4">Why US Tow Marketing?</h2>
          <p className="text-center text-gray-400 mb-14 max-w-2xl mx-auto">Custom-built marketing, on your terms.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: HeartHandshake, title: 'Built by the Owners, For the Owners', body: 'We know the pain points. We stand with you.' },
              { icon: Truck, title: 'Custom Built for Towing', body: 'GHL custom-built marketing solutions, engineered for the towing industry.' },
              { icon: Wrench, title: 'DIY or Have Us Do It For You', body: 'US Tow Alliance can manage your marketing strategy every day — or you can DIY.' }
            ].map((c, i) => (
              <div key={i} className="group bg-panel border border-cyan/20 hover:border-cyan/50 rounded-xl p-8 shadow-glow-sm hover:shadow-glow transition-all duration-300">
                <div className="grid place-items-center w-12 h-12 rounded-lg bg-cyan/10 text-cyan mb-5 group-hover:shadow-glow transition-shadow">
                  <c.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                <p className="text-gray-400">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 px-4 bg-panel/40 border-y border-steel">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4">Everything You Need to Grow</h2>
          <p className="text-center text-gray-400 mb-14">One ecosystem. Built BY operators, FOR operators.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Network, title: 'US Tow Alliance', body: 'The power of the network works for you. Towers standing with towers for a stronger future.', url: 'https://www.ustowalliance.com' },
              { icon: Truck, title: 'US Tow Fleet', body: 'Software that, used correctly, can and will lower your insurance costs by 10% — possibly more.', url: 'https://www.ustowfleet.com' },
              { icon: Bot, title: 'US Tow Dispatch', body: 'SaaS software to power your business — AI-powered for today and built for tomorrow’s AI-driven operation.', url: 'https://www.ustowdispatch.com' },
              { icon: Megaphone, title: 'US Tow Marketing', body: 'Custom-built, AI-powered 24/7 marketing that funnels leads into one place daily for your team’s follow-up — building your brand while you sleep.', url: 'https://www.ustowmarketing.com' },
              { icon: Phone, title: 'US Tow AI Connect', body: 'Inbound call answering with live ETA updates, plus the first and only customer-engineered outbound calling sales logic.', url: 'https://www.ustowaiconnect.com' },
              { icon: Briefcase, title: 'US Tow Jobs', body: 'The industry’s first and only custom-built jobs source — replacing everything Indeed does, and more.', url: 'https://www.ustowjobs.com' },
              { icon: Gauge, title: 'US Tow Command', body: 'Your real-time command center for dispatch and operations — every job, driver, and truck in one view.', comingSoon: true }
            ].map((f, i) => {
              const cls = 'group bg-graphite border border-steel hover:border-cyan/40 rounded-xl p-7 transition-colors flex flex-col';
              const inner = (
                <>
                  <f.icon className="w-7 h-7 text-gold mb-4" />
                  <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                  <p className="text-gray-400 text-sm flex-1">{f.body}</p>
                  {f.url
                    ? <span className="inline-flex items-center gap-1.5 text-cyan text-sm font-semibold mt-4 group-hover:gap-2.5 transition-all">Visit site <ExternalLink size={14} /></span>
                    : <span className="inline-flex items-center gap-1.5 text-gray-500 text-sm font-semibold mt-4">Coming soon</span>}
                </>
              );
              return f.url
                ? <a key={i} href={f.url} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
                : <div key={i} className={cls + ' opacity-90'}>{inner}</div>;
            })}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4">Plans for Your Business</h2>
          <p className="text-center text-gray-400 mb-14 max-w-2xl mx-auto">Agreements are a 12-month minimum — ensuring our team can support your growth and tweak your marketing strategy each month once results are reviewed.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {pricingPlans.map((plan, i) => (
              <div
                key={i}
                className={
                  plan.highlighted
                    ? 'relative bg-gradient-to-b from-alliance to-graphite border-2 border-cyan rounded-2xl p-8 shadow-glow md:scale-105'
                    : 'relative bg-panel border border-steel rounded-2xl p-8'
                }
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-graphite text-xs font-extrabold tracking-wide py-1.5 px-4 rounded-full">
                    {plan.badge}
                  </div>
                )}
                <div className="text-cyan text-xs font-bold tracking-widest uppercase mb-1">{plan.brand}</div>
                <h3 className="text-xl font-extrabold mb-4">{plan.name}</h3>
                <div className="text-4xl font-extrabold mb-6">
                  ${plan.price}<span className="text-lg text-gray-400 font-medium">/mo</span>
                </div>
                <a
                  href="#contact"
                  className={
                    plan.highlighted
                      ? 'block text-center py-3 bg-gold hover:shadow-glow-gold text-graphite font-bold rounded-lg mb-8 transition-shadow'
                      : 'block text-center py-3 border border-cyan/40 hover:bg-cyan/10 text-cyan font-bold rounded-lg mb-8 transition-colors'
                  }
                >
                  Reserve Your Seat
                </a>
                <ul className="space-y-3">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-300">
                      <Check size={18} className="text-cyan shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 px-4 bg-panel/40 border-y border-steel">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-14">What Operators Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-graphite border border-steel rounded-xl p-8">
                <p className="text-gray-200 mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan to-alliance rounded-full grid place-items-center text-graphite font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold">{t.author}</p>
                    <p className="text-sm text-gray-400">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section id="ecosystem" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4">Part of a Bigger Ecosystem</h2>
          <p className="text-center text-gray-400 mb-14 max-w-2xl mx-auto">US Tow Marketing is backed by an alliance of operators and powered by AI built for the trades.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* US Tow Alliance */}
            <div className="group bg-panel border border-steel hover:border-cyan/50 rounded-2xl p-8 transition-colors flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-cyan/10 text-cyan group-hover:shadow-glow transition-shadow">
                  <Network className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="text-xl font-extrabold">US Tow Alliance</h3>
                  <p className="text-sm text-cyan">The Alliance To Take Control</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 flex-1">
                A national lead generation and sales platform uniting independent operators into one ecosystem —
                AI-powered tools to grow revenue, cut costs, and improve margins across 50 states, 3,588 cities,
                and 10.6K carriers. The industry belongs to the owners.
              </p>
              <a
                href="https://www.ustowalliance.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold font-bold hover:gap-3 transition-all"
              >
                Visit US Tow Alliance <ExternalLink size={16} />
              </a>
            </div>

            {/* Blue Collar AI */}
            <div className="group bg-panel border border-steel hover:border-cyan/50 rounded-2xl p-8 transition-colors flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-gold/10 text-gold group-hover:shadow-glow-gold transition-shadow">
                  <Cpu className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="text-xl font-extrabold">Blue Collar AI</h3>
                  <p className="text-sm text-gold">AI Consulting for the Trades</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 flex-1">
                The AI consulting firm powering it all — bringing artificial intelligence directly to towing,
                auto shops, and blue-collar businesses. Real AI expertise built for hands-on industries,
                not Silicon Valley.
              </p>
              <a
                href="https://www.bluecollarai.online"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold font-bold hover:gap-3 transition-all"
              >
                Visit Blue Collar AI <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-alliance to-graphite" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-cyan/10 blur-3xl" />
        <div className="relative max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">See It Live — Join Our Weekly Zoom</h2>
            <p className="text-lg text-gray-300">No free trial, no guesswork. Tell us about your operation and we'll get you a seat on our next weekly Zoom to show you exactly how US Tow Marketing works. The industry belongs to the owners. Take control.</p>
          </div>
          <form onSubmit={handleReserve} className="bg-panel/70 backdrop-blur border border-steel rounded-2xl p-6 sm:p-8 space-y-5 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls} htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required className={inputCls} placeholder="Your name" />
              </div>
              <div>
                <label className={labelCls} htmlFor="company">Company</label>
                <input id="company" name="company" type="text" required className={inputCls} placeholder="Company name" />
              </div>
              <div>
                <label className={labelCls} htmlFor="city">City</label>
                <input id="city" name="city" type="text" className={inputCls} placeholder="City" />
              </div>
              <div>
                <label className={labelCls} htmlFor="state">State</label>
                <input id="state" name="state" type="text" className={inputCls} placeholder="State" />
              </div>
              <div>
                <label className={labelCls} htmlFor="position">Position in company</label>
                <input id="position" name="position" type="text" className={inputCls} placeholder="e.g. Owner, Manager" />
              </div>
              <div>
                <label className={labelCls} htmlFor="fleet">Fleet size</label>
                <input id="fleet" name="fleet" type="text" className={inputCls} placeholder="# of trucks" />
              </div>
            </div>

            <div>
              <span className={labelCls}>How soon are you ready to market?</span>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-1">
                {['Ready now', 'Ready in one week', 'Ready in one month'].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 text-gray-300 cursor-pointer">
                    <input type="radio" name="timeline" value={opt} className="accent-cyan w-4 h-4" /> {opt}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className={labelCls} htmlFor="problem">What is your biggest marketing problem?</label>
              <textarea id="problem" name="problem" rows={3} className={inputCls} placeholder="Tell us what's holding your marketing back" />
            </div>
            <div>
              <label className={labelCls} htmlFor="vision">What would you like your marketing to look like?</label>
              <textarea id="vision" name="vision" rows={3} className={inputCls} placeholder="Describe your ideal marketing" />
            </div>
            <div>
              <label className={labelCls} htmlFor="help">How can we help you now?</label>
              <textarea id="help" name="help" rows={3} className={inputCls} placeholder="What do you need most right now?" />
            </div>

            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-gold hover:shadow-glow-gold text-graphite font-bold py-4 px-10 rounded-lg transition-shadow text-lg">
              Reserve Your Seat <ArrowRight size={20} />
            </button>
            <p className="text-sm text-gray-400 text-center">Free weekly session · No obligation · Plans are a 12-month minimum</p>
          </form>
          <p className="text-sm text-gray-400 mt-4 text-center">
            Prefer to email directly?{' '}
            <a href="mailto:chris@bluecollarai.online" className="text-cyan hover:underline">chris@bluecollarai.online</a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-graphite border-t border-steel py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center w-7 h-7 rounded-md bg-gradient-to-br from-cyan to-alliance text-graphite">
              <Truck size={14} strokeWidth={2.5} />
            </span>
            <span className="font-extrabold tracking-tight">US Tow <span className="text-cyan">Marketing</span></span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 US Tow Marketing — part of the US Tow Alliance ecosystem. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
