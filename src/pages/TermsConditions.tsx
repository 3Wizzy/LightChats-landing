import { Link } from "react-router-dom";
import { useEffect } from "react";
import logo from "../assets/logo.png";

export default function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-surface-950 text-white font-sans">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-surface-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Content Track" className="h-8 w-8" />
            <span className="text-lg font-bold tracking-tight">
              Content Track
            </span>
          </Link>
          <Link
            to="/"
            className="text-sm text-surface-400 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Terms & Conditions
        </h1>
        <p className="text-surface-500 text-sm mb-12">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        <div className="space-y-10 text-surface-300 text-[15px] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using Content Track ("the Service"), you agree to
              be bound by these Terms & Conditions ("Terms"). If you do not agree
              to these Terms, you may not use the Service. These Terms constitute
              a legally binding agreement between you ("User," "you") and Content
              Track ("we," "our," "us").
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">
              2. Description of Service
            </h2>
            <p>
              Content Track is a web-based platform that provides Instagram
              content moderation and automation tools, including automated
              comment filtering, direct message auto-reply, activity analytics,
              and multi-account management. The Service operates through
              Instagram's official Graph API and webhook system.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">
              3. Eligibility
            </h2>
            <p>
              You must be at least 16 years old to use the Service. By creating
              an account, you represent that you are at least 16 years of age and
              have the legal capacity to enter into these Terms. If you are using
              the Service on behalf of an organization, you represent that you
              have authority to bind that organization.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">
              4. Account Registration
            </h2>
            <p>
              To use the Service, you must create an account with a valid email
              address and password. You are responsible for maintaining the
              confidentiality of your account credentials and for all activities
              that occur under your account. You agree to notify us immediately
              of any unauthorized use. We reserve the right to suspend or
              terminate accounts that violate these Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">
              5. Instagram Account Connection
            </h2>
            <p>
              The Service requires you to connect one or more Instagram Business
              or Creator accounts via Meta's OAuth flow. By connecting your
              account, you authorize Content Track to access and interact with
              your Instagram data as described in our{" "}
              <Link to="/privacy" className="text-brand-400 hover:underline">
                Privacy Policy
              </Link>
              . You are responsible for ensuring your use of our moderation and
              automation features complies with Instagram's Terms of Use and
              Community Guidelines.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">
              6. Acceptable Use
            </h2>
            <p>You agree not to use the Service to:</p>
            <ul className="list-disc list-inside space-y-2 text-surface-400">
              <li>
                Violate any applicable laws, regulations, or third-party rights
              </li>
              <li>
                Violate Instagram's Terms of Use or Community Guidelines
              </li>
              <li>
                Engage in harassment, bullying, or discriminatory behavior
              </li>
              <li>
                Send spam, unsolicited messages, or deceptive content via DM
                automation
              </li>
              <li>
                Attempt to gain unauthorized access to the Service or other
                users' accounts
              </li>
              <li>
                Reverse-engineer, decompile, or disassemble the Service
              </li>
              <li>
                Use the Service in a way that could damage, disable, or impair
                its functionality
              </li>
              <li>
                Resell, sublicense, or commercially exploit the Service without
                authorization
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">
              7. Subscription & Billing
            </h2>
            <p>
              Content Track offers free and paid subscription plans. Paid plans
              are billed on a monthly basis. By subscribing to a paid plan, you
              authorize us to charge your payment method on a recurring basis
              until you cancel. You may cancel your subscription at any time;
              cancellation takes effect at the end of the current billing period.
              Refunds are not provided for partial billing periods.
            </p>
            <p>
              We reserve the right to change pricing with 30 days' advance
              notice. Continued use after a price change constitutes acceptance
              of the new pricing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">
              8. Content Moderation Disclaimer
            </h2>
            <p>
              Content Track's moderation tools operate based on keyword filters
              and rules that you configure. We do not guarantee that all unwanted
              content will be detected or that legitimate content will never be
              incorrectly flagged. You are solely responsible for configuring
              your moderation rules and reviewing moderation actions. Content
              Track is not liable for any content that is or is not removed from
              your Instagram accounts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">
              9. Intellectual Property
            </h2>
            <p>
              The Service, including its design, code, features, graphics, and
              documentation, is owned by Content Track and protected by
              intellectual property laws. You are granted a limited,
              non-exclusive, non-transferable license to use the Service in
              accordance with these Terms. You retain ownership of all content on
              your Instagram accounts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">
              10. Service Availability
            </h2>
            <p>
              We strive to maintain high availability but do not guarantee
              uninterrupted or error-free operation. The Service depends on
              third-party APIs (including Instagram's Graph API) which may
              experience outages or changes beyond our control. We may perform
              maintenance, updates, or modifications that temporarily affect
              availability. We will make reasonable efforts to notify users of
              planned downtime.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">
              11. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Content Track and its
              officers, directors, employees, and agents shall not be liable for
              any indirect, incidental, special, consequential, or punitive
              damages, including loss of profits, data, business opportunities,
              or goodwill, arising from your use of or inability to use the
              Service.
            </p>
            <p>
              Our total aggregate liability for any claims arising from these
              Terms or the Service shall not exceed the amount you paid us in the
              12 months preceding the claim.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">
              12. Disclaimer of Warranties
            </h2>
            <p>
              The Service is provided "as is" and "as available" without
              warranties of any kind, whether express or implied, including but
              not limited to implied warranties of merchantability, fitness for a
              particular purpose, and non-infringement. We do not warrant that
              the Service will meet your requirements or that it will be
              compatible with all Instagram features or updates.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">
              13. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless Content Track and its
              affiliates from any claims, damages, losses, liabilities, costs,
              and expenses (including legal fees) arising from your use of the
              Service, your violation of these Terms, or your violation of any
              third-party rights.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">
              14. Termination
            </h2>
            <p>
              We may suspend or terminate your access to the Service at any time,
              with or without cause, with or without notice. Upon termination,
              your right to use the Service ceases immediately. You may terminate
              your account at any time by deleting it through the Service
              settings. Sections that by their nature should survive termination
              (including Limitation of Liability, Disclaimer, and
              Indemnification) will survive.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">
              15. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. Material
              changes will be communicated via email or through the Service. Your
              continued use of the Service after changes take effect constitutes
              acceptance of the revised Terms. If you do not agree, you must stop
              using the Service and delete your account.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">
              16. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the jurisdiction in which Content Track operates,
              without regard to conflict of law provisions. Any disputes arising
              from these Terms or the Service shall be resolved through binding
              arbitration or in the courts of the applicable jurisdiction.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">17. Contact</h2>
            <p>
              For questions about these Terms, contact us at{" "}
              <span className="text-brand-400">legal@contenttrack.io</span>.
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-surface-600">
            &copy; {new Date().getFullYear()} Content Track. All rights
            reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-surface-500">
            <Link
              to="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-white font-medium">Terms & Conditions</span>
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
