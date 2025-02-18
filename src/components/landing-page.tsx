import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Store, Tag, ChevronDown, ChevronUp, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import NumberTicker from './ui/number-ticker';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Link from 'next/link';
import Image from 'next/image';
import SparklesText from './ui/sparkles-text';
import { BenefitsSection, ProductIntro } from './product-sections';
import HowItWorksSection from './HowItWorksSection';
import TaglineStrip from './TaglineStrip';
import SynchronizedCarousels from './SynchronizedCarousels';

gsap.registerPlugin(ScrollToPlugin);


if (typeof window !== 'undefined') {
  gsap.to(window, {
    duration: 1.5, // Increase to 1.5 or 2 for smoother scrolling
    ease: 'power1.inOut', // Use a smoother easing function
  });
}




const faqs = [
  {
    question: "What is BAEONN.com?",
    answer:
      "BAEONN is a hyperlocal customer acquisition and customer retention platform that connects businesses with customers through targeted promotions and incentives.",
  },
  {
    question: "Is my business eligible to be a part of BAEONN?",
    answer: "All businesses that are legitimate under the law are eligible to be a part of BAEONN.",
  },
  {
    question: "How much does it cost to register with BAEONN?",
    answer: "Free. It is literally free.",
  },
  {
    question: "What are the things required to use BAEONN?",
    answer: "A business that is running and a smartphone with good network connectivity is all that it takes to use BAEONN.",
  },
  {
    question: "Is there any hidden cost or money that needs to be paid after registration?",
    answer: "Not at all, it's completely free.",
  }
];


function App() {
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(
    () => ["Smarter Shopping", "Powerful Marketing", "Monetizing Networks"],
    []
  )
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber(titleNumber === titles.length - 1 ? 0 : titleNumber + 1)
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles])



  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleScrollToSection = (sectionId: any) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: sectionId, offsetY: 70 }, // Adjust `offsetY` for fixed header height
      ease: 'power2.out',
    });
    setIsMenuOpen(false);
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900">
           <Image src="/logo.svg" alt="BAEONN" width={120} height={40} />
          </Link>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleScrollToSection("#products")}
              className="text-gray-600 hover:text-gray-900 nav-link nav-link-ltr hover:underline underline-offset-4" 
            >
              Products
            </button>
            <button
              onClick={() => handleScrollToSection("#howit")}
              className="text-gray-600 hover:text-gray-900 nav-link nav-link-ltr hover:underline underline-offset-4"
            >
              How it Works
            </button>
            <button
              onClick={() => handleScrollToSection("#whyus")}
              className="text-gray-600 hover:text-gray-900 nav-link nav-link-ltr hover:underline underline-offset-4"
            >
              Why Us
            </button>
            <button
              onClick={() => handleScrollToSection("#pricing")}
              className="text-gray-600 hover:text-gray-900 nav-link nav-link-ltr hover:underline underline-offset-4"
            >
              Pricing
            </button>
            <a
              href="https://dashboard.baeonn.com"
              className="bg-bay-of-many-800 text-white px-6 py-2 rounded-full hover:bg-bay-of-many-900 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900 focus:outline-none"
            onClick={handleToggleMenu}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="absolute top-16 right-5 w-64 bg-white shadow-lg z-40 rounded-lg">
          <div className="flex flex-col items-center py-4 space-y-4">
            <button
              onClick={() => handleScrollToSection("#products")}
              className="text-gray-600 hover:text-gray-900 text-lg"
            >
              Products
            </button>
            <button
              onClick={() => handleScrollToSection("#howit")}
              className="text-gray-600 hover:text-gray-900 text-lg"
            >
              How it Works
            </button>
            <button
              onClick={() => handleScrollToSection("#whyus")}
              className="text-gray-600 hover:text-gray-900 text-lg"
            >
              Why Us
            </button>
            <button
              onClick={() => handleScrollToSection("#pricing")}
              className="text-gray-600 hover:text-gray-900 text-lg"
            >
              Pricing
            </button>
            <a
              href="https://dashboard.baeonn.com"
              className="bg-bay-of-many-800 text-white px-6 py-2 rounded-full hover:bg-bay-of-many-900 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      )}

    </header>

      {/* Hero Section */}
    <SynchronizedCarousels/>
        <TaglineStrip />

        <ProductIntro />
        <HowItWorksSection  />

     {/* Stats Section */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            🚀 Our Impact So Far
          </h2>
          <p className="text-lg text-gray-600 mt-3">
            See how BAEONN is helping businesses grow and succeed locally.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-sm text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Store className="w-12 h-12 text-bay-of-many-800 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-gray-900 mb-2"><NumberTicker value={400} />+</h3>
            <p className="text-gray-600">Stores Onboard</p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-2xl shadow-sm text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Tag className="w-12 h-12 text-bay-of-many-800 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-gray-900 mb-2"><NumberTicker value={40} />+</h3>
            <p className="text-gray-600">Exclusive Deals</p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-2xl shadow-sm text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Building2 className="w-12 h-12 text-bay-of-many-800 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-gray-900 mb-2">AI-driven</h3>
            <p className="text-gray-600">Shopping & Marketing Revolution</p>
          </motion.div>
        </div>
      </div>
    </section>

   <BenefitsSection />

 {/* What is BAEONN? Section */}
 <section id="about" className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <motion.div 
      className="max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        What is BAEONN?
      </h2>
      <p className="text-lg text-gray-600 mb-12">
        BAEONN connects businesses with local customers through targeted promotions and incentives, offering cost-effective solutions for growth and engagement.
      </p>
    </motion.div>

  </div>
</section>
      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Simple, Transparent Pricing
          </h2>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="p-8">
          <div className="space-y-4">
            {[
          { label: 'List Campaigns', value: 'Free on BAE Pool', highlight: true },
          { label: 'Cost Per Click', value: '₹1' },
          { label: 'Cost Per Reminder', value: '₹1' },
          { label: 'Cost Per Conversion', value: '₹3' },
          { label: 'First 100 Coupons', value: 'Free', highlight: true },
            ].map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-between py-4 border-b last:border-b-0"
            whileHover={{ scale: 1.05, translateY: -5 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-gray-600">{item.label}</span>
            <span className={`font-semibold blur-sm ${item.highlight ? 'text-green-500 hover:blur-none transition-all' : ''}`}>{item.value}</span>
          </motion.div>
            ))}
          </div>
        </div>
        <div className="p-8 bg-gray-50">
          <a 
            href="https://dashboard.baeonn.com" 
            className="block w-full bg-bay-of-many-800 text-white text-center px-8 py-3 rounded-full hover:bg-bay-of-many-900 transition-colors"
          >
            Initiate a Targeted Campaign
          </a>
        </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openFaqIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openFaqIndex === index && (
                <motion.div
                  className="px-6 pb-4 text-gray-600"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.4 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>


    {/* Final CTA Section */}
    <section className="py-20 bg-bay-of-many-100 text-bay-of-many-800 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-bay-of-many-800">
          The Future of Shopping & Marketing is Here.
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
            href="https://bae.baeonn.com/download"
            className="bg-bay-of-many-800 text-white px-8 py-3 rounded-full hover:bg-bay-of-many-900 transition-colors"
            >
            Download BAE
            </a>
            <a
            href="https://dashboard.baeonn.com/join"
            className="bg-white text-bay-of-many-800 px-8 py-3 rounded-full hover:bg-gray-200 transition-colors"
            >
            Join BAE Business
            </a>
        </div>
      </div>
    </section>
      {/* Footer */}
      <footer className="bg-bay-of-many-950 text-white py-12">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">About BAEONN</h3>
        <p className="text-gray-400">
          BAEONN is a platform for hyperlocal customer acquisition, helping businesses grow their customer base effectively.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
        <div className="space-y-2">
          <a href="tel:+917695841500" className="flex items-center text-gray-400 hover:text-orange-500">
            <Phone className="w-5 h-5 mr-2" />
            +91 7695841500
          </a>
          <a href="mailto:contact@baeonn.com" className="flex items-center text-gray-400 hover:text-orange-500">
            <Mail className="w-5 h-5 mr-2" />
            contact@baeonn.com
          </a>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/BAEON.CO" className="text-gray-400 hover:text-orange-500">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://x.com/BAEON15" className="text-gray-400 hover:text-orange-500">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/baeonn?igsh=MWtzY2phdmtwbHA2NQ==" className="text-gray-400 hover:text-orange-500">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/company/baeonn/" className="text-gray-400 hover:text-orange-500">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div>
        <p className="text-gray-400 text-sm">Made with ❤ by</p>
        <SparklesText text="SocialSync" className="text-4xl mt-2" />
      </div>
    </div>

    <div className="mt-8 pt-8 border-t border-gray-400 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} BAEONN. All rights reserved.</p>
    </div>
  </div>
</footer>

    </div>
  );
}

export default App;
