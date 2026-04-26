import { useReveal } from '../hooks/useReveal';

export function Privacy() {
  const ref = useReveal();

  return (
    <section ref={ref} className="pt-32 pb-20 md:pt-40 md:pb-26 section-fade-in">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <p className="reveal text-xs font-display font-medium tracking-widest uppercase text-teal-800 mb-4">
          Legal
        </p>
        <h1 className="reveal font-display text-4xl sm:text-5xl text-graphite-900 leading-tight font-bold mb-6">
          Privacy Policy
        </h1>
        <p className="reveal text-graphite-500 text-sm mb-12">
          Effective date: April 25, 2026
        </p>

        <div className="reveal prose-legal space-y-8 text-graphite-700 text-base leading-relaxed">
          <div>
            <h2 className="font-display text-xl font-semibold text-graphite-900 mb-3">1. Introduction</h2>
            <p>
              Captive Path LLC ("Captive Path," "we," "us," or "our") respects your privacy and is committed
              to protecting your personal information. This Privacy Policy explains how we collect, use,
              disclose and safeguard your information when you visit our website at captivepath.com (the "Site").
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-graphite-900 mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Information you provide directly:</strong> When you submit our contact form, we collect
                your name, email address and any message content you provide.
              </li>
              <li>
                <strong>Automatically collected information:</strong> When you visit the Site, we may automatically
                collect certain technical information such as your IP address, browser type, operating system,
                referring URLs and pages visited.
              </li>
              <li>
                <strong>Cookies and similar technologies:</strong> We may use cookies and similar tracking
                technologies to enhance your experience on the Site.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-graphite-900 mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Respond to your inquiries and communications</li>
              <li>Operate, maintain and improve the Site</li>
              <li>Monitor and analyze usage trends and preferences</li>
              <li>Protect against unauthorized access and legal liability</li>
              <li>Comply with applicable laws and regulations</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-graphite-900 mb-3">4. Sharing of Information</h2>
            <p>
              We do not sell, trade or rent your personal information to third parties. We may share your
              information with trusted service providers who assist us in operating the Site and conducting
              our business, provided they agree to keep your information confidential. We may also disclose
              your information when required by law or to protect our rights and safety.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-graphite-900 mb-3">5. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes
              for which it was collected, including to satisfy any legal, accounting or reporting requirements.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-graphite-900 mb-3">6. Data Security</h2>
            <p>
              We implement reasonable administrative, technical and physical security measures to protect
              your personal information. However, no method of transmission over the Internet or electronic
              storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-graphite-900 mb-3">7. Third-Party Links</h2>
            <p>
              The Site may contain links to third-party websites. We are not responsible for the privacy
              practices or content of those websites. We encourage you to review the privacy policies of
              any third-party sites you visit.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-graphite-900 mb-3">8. Children's Privacy</h2>
            <p>
              The Site is not intended for individuals under the age of 18. We do not knowingly collect
              personal information from children. If we become aware that we have collected personal
              information from a child, we will take steps to delete that information.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-graphite-900 mb-3">9. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have the right to access, correct, delete or restrict
              the processing of your personal information. To exercise any of these rights, please contact
              us using the information below.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-graphite-900 mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page
              with an updated effective date. Your continued use of the Site after any changes constitutes
              your acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-graphite-900 mb-3">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-3 text-graphite-600">
              <p className="font-semibold text-graphite-900">Captive Path LLC</p>
              <p>11403 West Bernardo Court, #202</p>
              <p>San Diego, California 92127</p>
              <p className="mt-2">
                Email:{' '}
                <a href="mailto:zach@captivepath.com" className="text-teal-800 hover:text-teal-700 transition-colors">
                  zach@captivepath.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
