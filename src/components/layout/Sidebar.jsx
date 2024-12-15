// components/layout/Sidebar.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, User, Settings, HelpCircle, Map, Calendar, Heart, Compass, X } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { icon: Home, label: 'Dashboard', path: '/dashboard' },
        { icon: Compass, label: 'Explore', path: '/explore' },
        { icon: Calendar, label: 'My Trips', path: '/trips' },
        { icon: Heart, label: 'Favorites', path: '/favorites' },
        { icon: Map, label: 'Destinations', path: '/destinations' },
        { icon: User, label: 'Profile', path: '/profile' },
        { icon: Settings, label: 'Settings', path: '/settings' },
        { icon: HelpCircle, label: 'Help', path: '/help' },
    ];

    return (
        <>
            {/* Backdrop - hanya muncul di mobile saat sidebar terbuka */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
                    onClick={onClose}
                ></div>
            )}

            {/* Sidebar */}
            <aside
                className={`
          fixed top-0 left-0 h-full bg-white shadow-sm z-40 w-64
          transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
            >
                {/* Header with close button for mobile */}
                <div className="h-16 flex items-center justify-between px-4 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                        <h1 className="text-lg font-bold text-gray-800">Tripbalin</h1>
                        <span className="text-sm text-gray-500">Travel</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="lg:hidden p-2 hover:bg-gray-50 rounded-lg text-gray-600"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="p-3 space-y-1 mt-2">
                    {menuItems.map((item, index) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;

                        return (
                            <button
                                key={index}
                                onClick={() => {
                                    navigate(item.path);
                                    if (window.innerWidth < 1024) onClose(); // Tutup sidebar di mobile setelah navigasi
                                }}
                                className={`
                  w-full px-3 py-2 text-sm rounded-lg flex items-center gap-3
                  transition-all duration-200
                  ${isActive ?
                                        'bg-[#4ECDC4]/10 text-[#4ECDC4] font-medium' :
                                        'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }
                `}
                            >
                                <Icon size={18} />
                                <span>{item.label}</span>
                            </button>
                        );
                    })}
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;