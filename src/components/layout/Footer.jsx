// components/layout/Footer.jsx
import React from 'react';

const Footer = ({ isSidebarOpen }) => {
    return (
        <footer className={`bg-white/95 backdrop-blur-lg shadow-sm mt-auto transition-all duration-300
      ${isSidebarOpen ? 'lg:ml-64' : 'ml-0'}
    `}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                    <div>
                        <p className="text-sm text-gray-600">
                            © {new Date().getFullYear()} Tripbalin. All rights reserved.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <a href="#" className="text-sm text-[#4ECDC4] hover:text-[#45b8b0] transition">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-sm text-[#4ECDC4] hover:text-[#45b8b0] transition">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;