import React from 'react';
import Canonical from '../components/SEO/Canonical';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, FileText, Mail, MapPin, Phone, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const lastUpdated = "June 15, 2026";

  const sections = [
    { id: "infocollect", label: "1. What Information Do We Collect?" },
    { id: "infouse", label: "2. How Do We Process Your Information?" },
    { id: "legalbases", label: "3. What Legal Bases Do We Rely On?" },
    { id: "whoshare", label: "4. When & With Whom Do We Share It?" },
    { id: "cookies", label: "5. Do We Use Cookies & Tracking?" },
    { id: "inforetain", label: "6. How Long Do We Keep Your Information?" },
    { id: "infosafe", label: "7. How Do We Keep It Safe?" },
    { id: "infominors", label: "8. Do We Collect From Minors?" },
    { id: "privacyrights", label: "9. What Are Your Privacy Rights?" },
    { id: "dnt", label: "10. Controls For Do-Not-Track Features" },
    { id: "uslaws", label: "11. United States Specific Rights" },
    { id: "otherregions", label: "12. Other Regions Specific Rights" },
    { id: "policyupdates", label: "13. Do We Make Updates To This Notice?" },
    { id: "contact", label: "14. How Can You Contact Us?" },
    { id: "request", label: "15. Review, Update, or Delete Your Data" }
  ];
  const [activeSection, setActiveSection] = React.useState('');




  React.useEffect(() => {
    const handleScroll = () => {
      // Check if we are at the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (isAtBottom) {
        setActiveSection('request');
        return;
      }

      const scrollPosition = window.scrollY + 140; // Navbar height + offset buffer

      let currentSection = '';
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            currentSection = sec.id;
          }
        }
      }

      if (!currentSection && sections.length > 0) {
        currentSection = sections[0].id;
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    const timer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [sections]);


  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Offset for fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };


  return (
    <div className="min-h-screen text-slate-300 font-inter" style={{ background: '#0a0a0a' }}>
      <Canonical path="/privacy-policy" />

      {/* Hero Header */}
      <section
        className="py-10 relative overflow-hidden border-b border-white/5"
        style={{
          background: 'linear-gradient(135deg, rgb(12,33,21) 0%, rgb(10,24,18) 100%)'
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/4 w-80 h-80 bg-green-500 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-emerald-600 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#47BF72] hover:text-green-300 transition-colors text-xs mb-3 uppercase tracking-wider font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl text-white mb-2 tracking-tight">
            Privacy Notice
          </h1>
          <p className="text-xs text-gray-400">
            Last Updated: <span className="text-white font-medium">{lastUpdated}</span>
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">

          {/* Table of Contents Sticky Sidebar */}
          <aside className="hidden lg:block sticky top-28 pr-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#47BF72] mb-5">
              Table of Contents
            </h3>
            <ul className="space-y-2 border-l border-white/10 pl-2">
              {sections.map((sec) => {
                const isActive = activeSection === sec.id;
                return (
                  <li key={sec.id} className="relative flex items-center">
                    {isActive && (
                      <span className="absolute -left-[11px] w-1.5 h-1.5 rounded-full bg-[#47BF72] shadow-[0_0_8px_#47BF72]" />
                    )}
                    <button
                      onClick={() => handleScrollTo(sec.id)}
                      className={`text-left text-xs transition-all duration-300 focus:outline-none block py-0.5 w-full truncate ${isActive
                          ? 'text-[#47BF72] font-semibold pl-2 translate-x-0.5'
                          : 'text-gray-400 hover:text-gray-200'
                        }`}
                      title={sec.label}
                    >
                      {sec.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>




          {/* Privacy Content */}
          <div className="space-y-12 text-sm leading-relaxed text-gray-300 max-w-4xl">

            {/* Intro Summary Card */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="text-lg font-medium text-white flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#47BF72]" /> Summary of Key Points
              </h2>
              <p>
                This Privacy Notice for <strong>XD Media</strong> ("we," "us," or "our") describes how Whywe might access, collect, store, use, and/or share ("process") your personal information when you use our services.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/5">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <Eye className="w-4 h-4 text-[#47BF72]" />
                    <span>Data We Collect</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    We collect names, phone numbers, email addresses, and technical data (IP addresses, device parameters).
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <Lock className="w-4 h-4 text-[#47BF72]" />
                    <span>How We Protect It</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    We secure your data using modern encryption protocols and organizational procedures.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <FileText className="w-4 h-4 text-[#47BF72]" />
                    <span>Your Choices</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    You have rights to review, update, or request deletion of your data at any time.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 1 */}
            <section id="infocollect" className="space-y-4 pt-4 border-t border-white/5">
              <h2 className="text-xl font-medium text-white">1. WHAT INFORMATION DO WE COLLECT?</h2>
              <h3 className="text-base text-[#47BF72] font-medium mt-6">Personal information you disclose to us</h3>
              <p>
                We collect personal information that you voluntarily provide to us when you register on our Services, express interest in obtaining information about us or our products, participate in activities on the Services, or otherwise contact us.
              </p>
              <p>
                The personal information we collect depends on your interactions with us, the choices you make, and the features you use. This may include:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-gray-400">
                <li>Names</li>
                <li>Phone numbers</li>
                <li>Email addresses</li>
              </ul>

              <h3 className="text-base text-[#47BF72] font-medium mt-6">Sensitive Information</h3>
              <p>We do not process sensitive personal information (such as racial origin, religious beliefs, or medical history).</p>

              <h3 className="text-base text-[#47BF72] font-medium mt-6">Information automatically collected</h3>
              <p>
                We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity but may include device and usage characteristics, such as your IP address, browser type, operating system, language preferences, referring URLs, device name, and location data (imprecise country or city location based on IP).
              </p>
            </section>

            {/* Section 2 */}
            <section id="infouse" className="space-y-4 pt-4 border-t border-white/5">
              <h2 className="text-xl font-medium text-white">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
              <p>
                We process your information to provide, improve, and administer our Services, communicate with you, ensure security and prevent fraud, and comply with law. We process your data only when we have a valid legal reason to do so.
              </p>
              <p>Specifically, we process your information for the following reasons:</p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-gray-400">
                <li><strong>Account Management:</strong> To facilitate account creation and authentication.</li>
                <li><strong>Service Delivery:</strong> To deliver and facilitate the services you request.</li>
                <li><strong>Customer Support:</strong> To respond to inquiries and offer support.</li>
                <li><strong>Admin Communications:</strong> To send administrative updates, product releases, and terms updates.</li>
                <li><strong>Security & Safety:</strong> To protect our website and apps from fraud and security threats.</li>
                <li><strong>Compliance:</strong> To satisfy legal and regulatory mandates.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="legalbases" className="space-y-4 pt-4 border-t border-white/5">
              <h2 className="text-xl font-medium text-white">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h2>
              <p>
                We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-gray-400">
                <li><strong>Consent:</strong> When you have given us explicit permission to use your personal information.</li>
                <li><strong>Performance of a Contract:</strong> When processing is necessary to fulfill our obligations to you.</li>
                <li><strong>Legitimate Interests:</strong> When processing aligns with our business goals (e.g., website security, user analytics).</li>
                <li><strong>Legal Obligations:</strong> When we are required to comply with law enforcement or regulatory requests.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="whoshare" className="space-y-4 pt-4 border-t border-white/5">
              <h2 className="text-xl font-medium text-white">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
              <p>
                We may share your personal information in specific situations and with specific third-party partners. These scenarios include:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-gray-400">
                <li><strong>Business Transfers:</strong> We may share or transfer your info in connection with any merger, sale of assets, financing, or acquisition of all or a portion of our business.</li>
                <li><strong>Affiliates:</strong> We may share your info with our corporate affiliates, in which case we require them to honor this privacy policy.</li>
                <li><strong>Legal Compliance:</strong> We may disclose info where we are legally required to do so to comply with applicable laws or court mandates.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="cookies" className="space-y-4 pt-4 border-t border-white/5">
              <h2 className="text-xl font-medium text-white">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
              <p>
                We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. These help us understand site usage patterns, optimize performance, and personalize your experience. You can configure your browser settings to reject cookies, though doing so might affect certain features of our Services.
              </p>
            </section>

            {/* Section 6 */}
            <section id="inforetain" className="space-y-4 pt-4 border-t border-white/5">
              <h2 className="text-xl font-medium text-white">6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
              <p>
                We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). When we have no ongoing legitimate business need to process your personal info, we will either delete or anonymize it.
              </p>
            </section>

            {/* Section 7 */}
            <section id="infosafe" className="space-y-4 pt-4 border-t border-white/5">
              <h2 className="text-xl font-medium text-white">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
              <p>
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please remember that no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure. We cannot guarantee that unauthorized third parties will not be able to defeat our security barriers.
              </p>
            </section>

            {/* Section 8 */}
            <section id="infominors" className="space-y-4 pt-4 border-t border-white/5">
              <h2 className="text-xl font-medium text-white">8. DO WE COLLECT INFORMATION FROM MINORS?</h2>
              <p>
                We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records.
              </p>
            </section>

            {/* Section 9 */}
            <section id="privacyrights" className="space-y-4 pt-4 border-t border-white/5">
              <h2 className="text-xl font-medium text-white">9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
              <p>
                Depending on your geographical region (e.g., GDPR in the EU/EEA), you have certain rights under applicable data protection laws. These may include the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-gray-400">
                <li>Request access and obtain a copy of your personal info.</li>
                <li>Request rectification or erasure of inaccurate data.</li>
                <li>Object to or restrict the processing of your data.</li>
                <li>Data portability (where applicable).</li>
              </ul>
              <p>
                To make a request, please contact us or use our data subject access request form.
              </p>
            </section>

            {/* Section 10 */}
            <section id="dnt" className="space-y-4 pt-4 border-t border-white/5">
              <h2 className="text-xl font-medium text-white">10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
              <p>
                Most web browsers and some mobile operating systems include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored. At this stage, no uniform technology standard for recognizing DNT signals has been finalized, so we do not currently respond to DNT browser signals.
              </p>
            </section>

            {/* Section 11 */}
            <section id="uslaws" className="space-y-4 pt-4 border-t border-white/5">
              <h2 className="text-xl font-medium text-white">11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
              <p>
                Yes. If you reside in states like California, Colorado, Virginia, Connecticut, or Utah, you are granted specific rights regarding access to your personal information under state statutes (such as the CCPA/CPRA). These include the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-gray-400">
                <li>Know what personal information we collect, use, disclose, and sell.</li>
                <li>Request deletion of your personal info.</li>
                <li>Correct inaccurate personal info.</li>
                <li>Opt out of the sale or sharing of your personal info (we do not sell your personal data).</li>
              </ul>
            </section>

            {/* Section 12 */}
            <section id="otherregions" className="space-y-4 pt-4 border-t border-white/5">
              <h2 className="text-xl font-medium text-white">12. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
              <p>
                Depending on your local region (such as Canada or Australia), local data protection laws grant rights to inspect the personal data we hold, request corrections, or withdraw consent. We process data in compliance with these regional rules.
              </p>
            </section>

            {/* Section 13 */}
            <section id="policyupdates" className="space-y-4 pt-4 border-t border-white/5">
              <h2 className="text-xl font-medium text-white">13. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
              <p>
                We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of the page. If we make material changes, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this notice frequently.
              </p>
            </section>

            {/* Section 14 */}
            <section id="contact" className="space-y-6 pt-4 border-t border-white/5">
              <h2 className="text-xl font-medium text-white">14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
              <p>
                If you have questions or comments about this notice, you can contact us at:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="flex items-start gap-3 bg-white/[0.01] border border-white/5 rounded-xl p-4">
                  <Mail className="w-5 h-5 text-[#47BF72] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">Email Us</h4>
                    <a href="mailto:connect@xdmedia.in" className="text-sm text-[#47BF72] hover:underline">
                      connect@xdmedia.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/[0.01] border border-white/5 rounded-xl p-4">
                  <MapPin className="w-5 h-5 text-[#47BF72] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">Address</h4>
                    <p className="text-xs text-gray-400">
                      SCO-40, HLP Galleria, SAS Nagar Mohali, 160062, Chandigarh
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/[0.01] border border-white/5 rounded-xl p-4">
                  <Phone className="w-5 h-5 text-[#47BF72] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">Call Us</h4>
                    <p className="text-xs text-gray-400">+91 7901724043</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 15 */}
            <section id="request" className="space-y-4 pt-4 border-t border-white/5">
              <h2 className="text-xl font-medium text-white">15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
              <p>
                Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that info, or delete it in some circumstances.
              </p>
              <p>
                To request to review, update, or delete your personal information, please email us by clicking below:
              </p>
              <div className="pt-2">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=connect@xdmedia.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-white px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105"
                  style={{
                    background: '#47BF72',
                    boxShadow: '0 4px 20px rgba(71, 191, 114, 0.3)'
                  }}
                >
                  Email Us
                </a>
              </div>
            </section>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
