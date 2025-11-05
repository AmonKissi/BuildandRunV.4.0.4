import { MessageSquare, Mail, Phone, Clock, Lightbulb } from 'lucide-react';

// --- FAQ Data Structure ---
const FAQ_DATA = [
    {
        question: "What makes Build & Run hosting 'decentralized'?",
        answer: "Our infrastructure utilizes a globally distributed network of servers and edge locations, reducing reliance on single data centers. This improves uptime, speed, and resilience against regional outages or attacks.",
    },
    {
        question: "Is there a free trial or money-back guarantee?",
        answer: "Yes, we offer a 7-day free trial on all Standard and Pro plans. We also provide a 30-day money-back guarantee if you are not satisfied with our service quality.",
    },
    {
        question: "How do I manage my projects and billing?",
        answer: "All management is handled through our Unified Control Panel. You can access it via the link on our main page to deploy sites, manage resources, and handle billing and domains.",
    },
    {
        question: "What kind of support is available?",
        answer: "We offer 24/7 priority support via our support ticketing system for all paid plans. We also maintain a comprehensive knowledge base and developer blog for self-service troubleshooting.",
    },
    {
        question: "Can I migrate my existing site to Build & Run?",
        answer: "Absolutely. We offer free, assisted migration services for new customers to ensure a seamless transition with zero downtime. Contact our support team to get started.",
    },
    {
        question: "Where can I find your Terms of Service and Privacy Policy?",
        answer: "These documents are linked in the footer and the Utility Links section of our main landing page. We encourage all users to review them.",
    },
];

// --- COMPONENT STRUCTURE ---
export default function FaqPage() {
    // Contact information
    const contactEmail = "2buildandrun@gmail.com";
    const contactPhone = "+1 (682) 561-7778"; 

    return (
        <div className="faq-wrapper" data-theme="light">
            <div className="faq-container">
                
                {/* Header */}
                <header className="faq-header-section">
                    <MessageSquare size={64} className="faq-main-icon" />
                    <h1 className="faq-title">Frequently Asked Questions</h1>
                    <p className="faq-subtitle">
                        Find quick answers to the most common questions about our decentralized hosting platform.
                    </p>
                </header>

                {/* FAQ List */}
                <section className="faq-list-section">
                    {FAQ_DATA.map((item, index) => (
                        <div key={index} className="faq-item">
                            <details>
                                <summary>
                                    <Lightbulb size={20} className="faq-icon-bullet" />
                                    {item.question}
                                </summary>
                                <p className="faq-answer">{item.answer}</p>
                            </details>
                        </div>
                    ))}
                </section>

                {/* Contact Section */}
                <section className="faq-contact-section">
                    <h2 className="contact-title">Need More Help? Get in Touch.</h2>
                    <div className="contact-grid">
                        <div className="contact-card">
                            <Mail size={32} />
                            <h3>Email Support</h3>
                            <p>For general inquiries, detailed support, or business proposals.</p>
                            <a href={`mailto:${contactEmail}`} className="contact-link">{contactEmail}</a>
                        </div>
                        <div className="contact-card">
                            <Phone size={32} />
                            <h3>Phone / Text</h3>
                            <p>For urgent matters or direct communication during business hours.</p>
                            <span className="contact-detail">{contactPhone}</span>
                        </div>
                    </div>
                </section>

                {/* Back Link */}
                <div className="faq-back-link">
                    <a href="/" className="back-to-home-link">← Back to Homepage</a>
                </div>

            </div>
        </div>
    );
}