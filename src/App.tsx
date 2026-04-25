import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { CredibilityStrip } from './components/CredibilityStrip';
import { WhatWeDo } from './components/WhatWeDo';
import { WhoItsFor } from './components/WhoItsFor';
import { HowItWorks } from './components/HowItWorks';
import { WhyZach } from './components/WhyZach';
import { FocusAreas } from './components/FocusAreas';
import { ClosingCTA } from './components/ClosingCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CredibilityStrip />
        <WhatWeDo />
        <WhoItsFor />
        <HowItWorks />
        <WhyZach />
        <FocusAreas />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
