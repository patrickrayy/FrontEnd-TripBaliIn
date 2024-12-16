// components/layout/Header.jsx
import React from 'react';
import { Bell, LogOut, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";

const Header = ({ toggleSidebar, isSidebarOpen }) => {
    const { logout, user } = useAuth();
    const navigate = useNavigate();

    return (
        <header className="fixed top-0 right-0 left-0 h-16 bg-white/95 backdrop-blur-lg shadow-sm z-50">
            <div className="h-full flex items-center justify-between px-4">
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleSidebar}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-50 text-gray-600 transition-all duration-200"
                    >
                        <Menu size={20} />
                    </button>

                    <div className="flex items-center gap-2">
                        <h1 className="text-xl font-bold text-gray-800">Tripbalin</h1>
                        <span className="hidden md:inline text-sm text-gray-500">Travel</span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="p-2 rounded-lg hover:bg-gray-50 relative text-gray-600 transition-all duration-200">
                        <Bell size={20} />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#FF6B6B] rounded-full"></span>
                    </button>

                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#4ECDC4] text-white flex items-center justify-center">
                            {user?.name?.[0]?.toUpperCase()}
                        </div>
                        <span className="hidden md:block text-sm font-medium text-gray-700">
                            {user?.name}
                        </span>
                    </div>

                    <button
                        onClick={() => {
                            logout();
                            navigate('/login');
                        }}
                        className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
                        title="Logout"
                    >
                        <LogOut size={20} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;