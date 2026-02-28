import { Link } from "react-router-dom";
import { useEffect } from "react";
import logo from "../assets/logo.png";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy — LightChat";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Learn how LightChat collects, uses, and protects your data. Read our full privacy policy."
      );
    return () => {
      document.title = "LightChat — Engage at the Speed of Light";
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute(
          "content",
          "Drive more sales and conversions on Instagram using chat automation. Automate DMs, build visual flows, and convert followers into customers."
        );
    };
  }, []);

  return (
    <div className="min-h-screen bg-surface-950 text-white font-sans">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-surface-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="LightChat" className="h-8 w-8" />
            <span className="text-lg font-bold tracking-tight">
              LightChat
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
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
            <h2 className="text-white text-xl font-semibold">1. Introduction</h2>
            <p>
              LightChat ("we," "our," or "us") is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our web
              application and related services (collectively, the "Service").
            </p>
            <p>
              By using the Service, you agree to the collection and use of
              information in accordance with this policy. If you do not agree,
              please do not use the Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">
              2. Information We Collect
            </h2>
            <h3 className="text-white font-medium">2.1 Account Information</h3>
            <p>
              When you create an account, we collect your email address and a
              securely hashed password. We do not store plaintext passwords.
            </p>
            <h3 className="text-white font-medium">
              2.2 Instagram Account Data
            </h3>
            <p>
              When you connect an Instagram Business or Creator account, we
              receive and store data through the Instagram Graph API, including
              your Instagram user ID, username, profile picture URL, account
              type, follower and post counts, biography, and access tokens. We
              also receive real-time data via Instagram webhooks, including
              comment content, commenter usernames, direct messages, and related
              metadata.
            </p>
            <h3 className="text-white font-medium">
              2.3 Activity & Usage Data
            </h3>
            <p>
              We log moderation actions (comments removed, auto-replies sent),
              user contacts who interact with your account, and timestamps of
              all activity. This data is used to power your analytics dashboard.
            </p>
            <h3 className="text-white font-medium">2.4 Technical Data</h3>
            <p>
              We may collect browser type, IP address, device information, and
              usage patterns to improve Service performance, security, and
              reliability.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2 text-surface-400">
              <li>
                To provide and maintain the Service, including comment
                moderation and DM automation
              </li>
              <li>
                To display analytics and activity history in your dashboard
              </li>
              <li>To authenticate your identity and manage your account</li>
              <li>
                To send service-related notifications (e.g., account alerts,
                plan limits)
              </li>
              <li>To improve, personalize, and optimize the Service</li>
              <li>
                To detect and prevent fraud, abuse, or security threats
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">
              4. Data Sharing & Disclosure
            </h2>
            <p>
              We do not sell, rent, or trade your personal information. We may
              share data only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-surface-400">
              <li>
                <span className="text-white">Service Providers:</span> Trusted
                third parties that assist in operating the Service (hosting,
                database management), bound by confidentiality obligations
              </li>
              <li>
                <span className="text-white">Legal Compliance:</span> When
                required by law, regulation, or legal process
              </li>
              <li>
                <span className="text-white">Safety:</span> To protect the
                rights, property, or safety of LightChat, our users, or the
                public
              </li>
              <li>
                <span className="text-white">Business Transfers:</span> In
                connection with a merger, acquisition, or sale of assets
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">
              5. Instagram API Compliance
            </h2>
            <p>
              Our use of Instagram data is governed by Meta's Platform Terms and
              Instagram's API Terms of Use. We only request permissions necessary
              to provide the Service. Access tokens are stored securely and are
              never shared with third parties. You can revoke access at any time
              by disconnecting your account from LightChat or through your
              Instagram settings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">
              6. Data Security
            </h2>
            <p>
              We implement industry-standard security measures including
              encrypted data transmission (TLS/SSL), hashed passwords using
              bcrypt, secure session management with HTTP-only cookies, and
              access control mechanisms. However, no method of transmission over
              the Internet is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">
              7. Data Retention & Deletion
            </h2>
            <p>
              We retain your data for as long as your account is active. Activity
              logs are retained for up to 14 days by default. When you delete
              your account, all associated data — including connected Instagram
              accounts, activity logs, contacts, and settings — is permanently
              deleted from our systems.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">8. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-surface-400">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>
              To exercise these rights, contact us at{" "}
              <span className="text-brand-400">privacy@lightchats.com</span>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">9. Cookies</h2>
            <p>
              We use essential cookies for authentication and session management.
              We do not use third-party tracking cookies or advertising cookies.
              By using the Service, you consent to the use of essential cookies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">
              10. Children's Privacy
            </h2>
            <p>
              The Service is not intended for individuals under the age of 16. We
              do not knowingly collect personal information from children. If we
              discover that we have collected data from a child under 16, we will
              delete it promptly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">
              11. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify
              you of material changes by posting the updated policy on this page
              with a revised "Last updated" date. Your continued use of the
              Service after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">12. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please
              contact us at{" "}
              <span className="text-brand-400">privacy@lightchats.com</span>.
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-surface-600">
            &copy; {new Date().getFullYear()} LightChat. All rights
            reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-surface-500">
            <span className="text-white font-medium">Privacy Policy</span>
            <Link
              to="/terms"
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
