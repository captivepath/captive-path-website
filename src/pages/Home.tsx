import { Hero } from '../components/Hero';
import { CredibilityStrip } from '../components/CredibilityStrip';
import { WhatWeDo } from '../components/WhatWeDo';
import { HowItWorks } from '../components/HowItWorks';
import { WhyZach } from '../components/WhyZach';
import { ClosingCTA } from '../components/ClosingCTA';

export function Home() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <WhatWeDo condensed />
      <HowItWorks condensed />
      <WhyZach />
      <ClosingCTA />
    </>
  );
}
