import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tiers = [
  {
    name: 'Starter (Pilot)',
    price: 'from $85k',
    features: [
      'Single backend compiler sprint',
      '1 target workflow (e.g., VQE)',
      'Benchmarking report',
      '8 weeks support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Growth (Multi‑backend)',
    price: 'from $240k',
    features: [
      'IR + 3 backends',
      'CI portability suite',
      'PQC readiness blueprint',
      '3 months support',
    ],
    cta: 'Contact Sales',
  },
  {
    name: 'Enterprise (Residency)',
    price: 'POA',
    features: [
      'Dedicated team (compiler + crypto + simulation)',
      'SLOs',
      'Co‑authored publications',
      'Regulator packages',
    ],
    cta: 'Book a Scoping',
  },
];

const addOns = [
  'PQC rollout',
  'MPC wallet module',
  'QKD peering',
  'Pulse‑level optimizer',
  'Training',
];

export const PricingSection = () => {
  return (
    <div id="pricing-section" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-quantaforge-dark">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-quantaforge-light quantaforge-text-gradient">Pricing</h2>
          <p className="mt-4 md:mt-6 text-base sm:text-lg leading-7 md:leading-8 text-quantaforge-light/70 px-4">
            Solutions for every stage of the quantum journey. 
          </p>
        </div>
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tiers.map((tier) => (
            <div key={tier.name} className="flex flex-col rounded-3xl bg-quantaforge-dark/50 ring-1 ring-inset ring-quantaforge-light/10">
              <div className="p-6 sm:p-8 md:p-10">
                <h3 className="text-base sm:text-lg font-semibold leading-7 text-quantaforge-secondary">{tier.name}</h3>
                <div className="mt-4 flex items-baseline gap-x-2">
                  <span className="text-3xl sm:text-4xl font-bold tracking-tight text-quantaforge-light">{tier.price}</span>
                </div>
                <ul role="list" className="mt-6 md:mt-8 space-y-3 md:space-y-4 text-xs sm:text-sm leading-6 text-quantaforge-light/80">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckCircle className="h-6 w-5 flex-none text-quantaforge-secondary" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 flex flex-col justify-end p-6 sm:p-8 md:p-10 mt-auto">
                 <Button className="w-full bg-quantaforge-secondary text-quantaforge-dark hover:bg-quantaforge-secondary/90 quantaforge-glow text-sm md:text-base min-h-[44px]">
                  {tier.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 md:mt-16 text-center">
          <h3 className="text-lg md:text-xl font-bold tracking-tight text-quantaforge-light">Add-ons</h3>
          <div className="mt-4 md:mt-6 flex flex-wrap justify-center gap-3 md:gap-4">
            {addOns.map((addOn) => (
              <span key={addOn} className="px-4 py-2 text-sm text-quantaforge-light/80 bg-quantaforge-dark/50 rounded-full ring-1 ring-inset ring-quantaforge-light/10">
                {addOn}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
