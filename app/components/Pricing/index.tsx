'use client';

import { useState } from 'react';
import ContactModal from '../ContactModal';
import './Pricing.scss';

interface Plan {
  name: string;
  tagline: string;
  description: string;
  price?: string;
  priceSuffix?: string;
  features: string[];
  cta: string;
  popular: boolean;
}

const plans: Plan[] = [
  {
    name: 'Starter',
    tagline: 'Get Online Quickly',
    description: 'Best for small restaurants, cloud kitchens, or early-stage setups.',
    features: [
      'Menu management system (create & update menu)',
      'Hosted page on KwikTable subdomain',
      'Static digital menu (no ordering or booking)',
      'Basic online presence (shareable link)',
      'Standard speed, no priority',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
  {
    name: 'Growth',
    tagline: 'Start Taking Bookings',
    description: 'Best for restaurants ready to operate digitally.',
    features: [
      'Everything in Starter +',
      'Custom domain + fully designed modern website',
      'Listing on KwikTable marketplace',
      'Table booking system (with table selection)',
      'Pre-order food feature',
      'App access (real-time order & booking notifications)',
      'Full dashboard: Bookings, Table allocation, Order tracking',
      'Dynamic menu (real-time updates)',
      'Google Search Console setup',
      '2 SEO blogs/month',
      'Basic customer data collection',
      'Remove KwikTable branding',
      'Better server performance',
    ],
    cta: 'Contact Sales',
    popular: true,
  },
  {
    name: 'Pro',
    tagline: 'Grow Revenue on Autopilot',
    description: 'Best for premium restaurants, chains, and serious operators.',
    priceSuffix: '/mo',
    features: [
      'Everything in Growth +',
      'Advanced customer insights: Guest history, Order behavior tracking',
      'Customer segmentation (veg lovers, repeat diners, etc.)',
      'Automated marketing: Personalized emails, Offers based on past orders',
      'Festival personalization: Diwali / Christmas themed website',
      'Weekly SEO blogs',
      'Advanced analytics: Customer lifetime value, Top-performing dishes',
      'Multi-location management',
      'Priority support',
      'High-performance servers (fast load, priority infra)',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="11" fill="url(#checkGrad)" />
    <path
      d="M7 11.5L9.5 14L15 8.5"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="checkGrad" x1="0" y1="0" x2="22" y2="22">
        <stop stopColor="#4fd1c5" />
        <stop offset="1" stopColor="#38b2ac" />
      </linearGradient>
    </defs>
  </svg>
);

const Pricing = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  return (
    <section className="pricing" id="pricing">
      <div className="pricing__header">
        <h2 className="pricing__title">Choose your plan</h2>
        <p className="pricing__subtitle">Unlock endless possibilities</p>
      </div>

      <div className="pricing__cards">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`pricing__card ${plan.popular ? 'pricing__card--popular' : ''}`}
          >
            {plan.popular && <span className="pricing__badge">Popular</span>}

            <h3 className="pricing__plan-name">{plan.name}</h3>
            <p className="pricing__plan-desc">{plan.description}</p>

            {plan.price ? (
              <div className="pricing__price">
                <span className="pricing__currency">₹</span>
                <span className="pricing__amount">{plan.price}</span>
                <span className="pricing__suffix">{plan.priceSuffix}</span>
              </div>
            ) : (
              <div className="pricing__price">
                <span className="pricing__custom"></span>
              </div>
            )}

            <button
              onClick={() => {
                setSelectedPlan(plan.name);
                setModalOpen(true);
              }}
              className={`pricing__cta ${plan.popular ? 'pricing__cta--popular' : ''}`}
            >
              {plan.cta}
            </button>

            <ul className="pricing__features">
              {plan.features.map((feature) => {
                const isHeader = feature.startsWith('Everything in');
                return (
                  <li
                    key={feature}
                    className={`pricing__feature ${isHeader ? 'pricing__feature--header' : ''}`}
                  >
                    {!isHeader && <CheckIcon />}
                    <span>{feature}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => { setModalOpen(false); setSelectedPlan(''); }}
        source={selectedPlan}
      />
    </section>
  );
};

export default Pricing;
