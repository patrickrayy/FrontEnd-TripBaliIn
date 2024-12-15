// components/layout/DashboardLayout.jsx
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const DashboardLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Set sidebar default state berdasarkan ukuran layar
    useEffect(() => {
        const handleResize = () => {
            setIsSidebarOpen(window.innerWidth >= 1024);
        };

        // Set initial state
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Grid Pattern Overlay */}
            <div
                className="fixed inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: `repeating-linear-gradient(0deg, #000, #000 1px, transparent 1px, transparent 40px),
                           repeating-linear-gradient(90deg, #000, #000 1px, transparent 1px, transparent 40px)`,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

            <main className={`flex-1 transition-all duration-300 mt-16
        ${isSidebarOpen ? 'lg:ml-64' : 'ml-0'}
      `}>
                <div className="container mx-auto p-4 max-w-7xl">
                    <div className="bg-white/95 backdrop-blur-lg rounded-lg shadow-sm p-6">
                        {children}
                    </div>
                </div>
            </main>

            <Footer isSidebarOpen={isSidebarOpen} />
        </div>
    );
};

export default DashboardLayout;