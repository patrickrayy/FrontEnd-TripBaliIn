import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AlertCircle, Mail, Lock } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Snackbar from '../../components/ui/Snackbar';

const LoginPage = () => {
    const navigate = useNavigate();
    const { login, loading, error } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showSnackbar, setShowSnackbar] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await login(email, password);
        if (success) {
            setShowSnackbar(true);
            setTimeout(() => {
                navigate('/dashboard');
            }, 1000);
        }
    };

    return (
        <div className="login-gradient-bg min-h-screen flex items-center justify-center relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-pattern opacity-10"></div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>

            <div className="max-w-md w-full mx-4 relative">
                {/* Logo Section */}
                <div className="text-center mb-6 animate-float">
                    <h1 className="text-4xl font-bold text-white mb-2">Tripbalin</h1>
                    <p className="text-white/80">Discover your next adventure</p>
                </div>

                <div className="login-card">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
                            Welcome Back!
                        </h2>
                        <p className="text-center text-gray-600">
                            Sign in to plan your next journey
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
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-teal-500 group-hover:text-teal-600 transition-colors" />
                                    </div>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        className="login-input"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-teal-500 group-hover:text-teal-600 transition-colors" />
                                    </div>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        className="login-input"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
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
                                    <div className="flex items-center">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                        Signing in...
                                    </div>
                                ) : (
                                    'Sign in'
                                )}
                            </button>
                        </div>

                        <div className="text-center">
                            <p className="text-sm text-gray-600">
                                Don't have an account?{' '}
                                <Link to="/register" className="login-link">
                                    Start your journey
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>

                {/* Footer Text */}
                <p className="text-center text-white/80 text-sm mt-6">
                    Explore the world with Tripbalin
                </p>
            </div>

            <Snackbar
                open={showSnackbar}
                message="Login successful! Get ready for your next adventure..."
                type="success"
                onClose={() => setShowSnackbar(false)}
            />
        </div>
    );
};

export default LoginPage;