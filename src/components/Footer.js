import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div 
          className="glass-card p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="text-silver-100 mr-3">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.8" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
                    <path opacity="0.8" d="M7.5 7.5L12 12M12 12L16.5 16.5M12 12L16.5 7.5M12 12L7.5 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="1" fill="currentColor"/>
                    <circle cx="12" cy="16.5" r="1" fill="currentColor"/>
                    <circle cx="12" cy="7.5" r="1" fill="currentColor"/>
                    <circle cx="16.5" cy="12" r="1" fill="currentColor"/>
                    <circle cx="7.5" cy="12" r="1" fill="currentColor"/>
                    <circle cx="16.5" cy="16.5" r="1" fill="currentColor"/>
                    <circle cx="7.5" cy="7.5" r="1" fill="currentColor"/>
                    <circle cx="16.5" cy="7.5" r="1" fill="currentColor"/>
                    <circle cx="7.5" cy="16.5" r="1" fill="currentColor"/>
                  </svg>
                </div>
                <div className="text-xl font-semibold">
                  Bonzonate<span className="text-neon-purple">AI</span>
                </div>
              </div>
              
              <p className="text-silver-300 mb-6">
                South Africa's premier AI agent solutions provider,
                specialising in custom AI solutions tailored for the local market.
              </p>
              
              <div className="flex space-x-4">
                <SocialIcon>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </SocialIcon>
                <SocialIcon>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.03 10.03 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482 13.98 13.98 0 01-10.15-5.145 4.921 4.921 0 001.522 6.574 4.902 4.902 0 01-2.229-.616v.061a4.92 4.92 0 003.946 4.827 4.93 4.93 0 01-2.224.085 4.935 4.935 0 004.6 3.42 9.86 9.86 0 01-6.115 2.107c-.398 0-.79-.023-1.175-.068a13.995 13.995 0 007.548 2.209c9.054 0 14-7.496 14-13.986 0-.21 0-.42-.015-.63a10.012 10.012 0 002.46-2.549l-.047-.02z" />
                  </svg>
                </SocialIcon>
                <SocialIcon>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.21c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                  </svg>
                </SocialIcon>
                <SocialIcon>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </SocialIcon>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <FooterLink to="about">About Us</FooterLink>
                <FooterLink to="services">Services</FooterLink>
                <FooterLink to="platforms">Platforms</FooterLink>
                <FooterLink to="contact">Contact</FooterLink>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                <FooterLink to="#">Privacy Policy</FooterLink>
                <FooterLink to="#">Terms of Service</FooterLink>
                <FooterLink to="#">Cookie Policy</FooterLink>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-silver-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} BonzonateAI. All rights reserved.
            </p>
            <p className="text-silver-400 text-sm">
              Designed with <span className="text-neon-purple">♥</span> in South Africa
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ children }) => (
  <motion.a
    href="#"
    className="w-8 h-8 rounded-full bg-glass-200 text-silver-300 flex items-center justify-center transition-colors duration-300 hover:bg-glass-300 hover:text-silver-100"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    {children}
  </motion.a>
);

const FooterLink = ({ to, children }) => (
  <li>
    <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
      <Link
        to={to}
        className="text-silver-300 hover:text-silver-100 transition-colors duration-300"
        smooth={true}
        duration={800}
      >
        {children}
      </Link>
    </motion.div>
  </li>
);

export default Footer;