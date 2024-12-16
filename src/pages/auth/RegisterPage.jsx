import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AlertCircle, User, Mail, Lock, Phone, Calendar } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Snackbar from '../../components/ui/Snackbar';

const RegisterPage = () => {
    const navigate = useNavigate();
    const { register, loading, error } = useAuth();
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        tanggal_lahir: '',
        phone: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await register(formData);
        if (success) {
            setShowSnackbar(true);
            setTimeout(() => {
                navigate('/login');
            }, 1500);
        }
    };

    return (
        <div className="login-gradient-bg min-h-screen flex items-center justify-center relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-pattern opacity-10"></div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>

            <div className="max-w-xl w-full mx-4 relative">
                {/* Logo Section */}
                <div className="text-center mb-6 animate-float">
                    <h1 className="text-4xl font-bold text-white mb-2">Tripbalin</h1>
                    <p className="text-white/80">Your Journey Begins Here</p>
                </div>

                <div className="login-card">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
                            Start Your Adventure
                        </h2>
                        <p className="text-center text-gray-600">
                            Create an account to explore amazing destinations
                        </p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && (
                            <div className="flex items-center p-4 bg-red-50 rounded-lg animate-shake">
                                <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                                <p className="text-sm text-red-500">{error}</p>
                            </div>
                        )}

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-teal-500 group-hover:text-teal-600 transition-colors" />
                                    </div>
                                    <input
                                        type="text"
                                        required
                                        className="login-input"
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-teal-500 group-hover:text-teal-600 transition-colors" />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        className="login-input"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-teal-500 group-hover:text-teal-600 transition-colors" />
                                    </div>
                                    <input
                                        type="password"
                                        required
                                        className="login-input"
                                        placeholder="Create a password"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Calendar className="h-5 w-5 text-teal-500 group-hover:text-teal-600 transition-colors" />
                                    </div>
                                    <input
                                        type="date"
                                        required
                                        className="login-input"
                                        value={formData.tanggal_lahir}
                                        onChange={(e) => setFormData({ ...formData, tanggal_lahir: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Phone className="h-5 w-5 text-teal-500 group-hover:text-teal-600 transition-colors" />
                                    </div>
                                    <input
                                        type="tel"
                                        required
                                        className="login-input"
                                        placeholder="Enter your phone number"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="login-button"
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                        Creating your account...
                                    </div>
                                ) : (
                                    'Start Your Journey'
                                )}
                            </button>
                        </div>

                        <div className="text-center">
                            <p className="text-sm text-gray-600">
                                Already have an account?{' '}
                                <Link to="/login" className="login-link">
                                    Sign in to continue your adventure
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>

                {/* Footer Text */}
                <p className="text-center text-white/80 text-sm mt-6">
                    Adventure awaits with Tripbalin
                </p>
            </div>

            <Snackbar
                open={showSnackbar}
                message="Registration successful! Preparing your journey..."
                type="success"
                onClose={() => setShowSnackbar(false)}
            />
        </div>
    );
};

export default RegisterPage;