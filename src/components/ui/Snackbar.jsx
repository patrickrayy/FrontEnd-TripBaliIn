import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

const Snackbar = ({ message, type = 'success', open, onClose, autoHideDuration = 3000 }) => {
    const [isVisible, setIsVisible] = useState(open);

    useEffect(() => {
        setIsVisible(open);
        if (open && autoHideDuration) {
            const timer = setTimeout(() => {
                setIsVisible(false);
                onClose?.();
            }, autoHideDuration);
            return () => clearTimeout(timer);
        }
    }, [open, autoHideDuration, onClose]);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50 animate-fade-in">
            <div className={`flex items-center p-4 rounded-lg shadow-lg ${type === 'success' ? 'bg-green-50' : 'bg-red-50'
                }`}>
                <div className="flex items-center">
                    {type === 'success' ? (
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    ) : (
                        <XCircle className="w-5 h-5 text-red-400 mr-3" />
                    )}
                    <p className={`text-sm font-medium ${type === 'success' ? 'text-green-800' : 'text-red-800'
                        }`}>
                        {message}
                    </p>
                </div>
                <button
                    onClick={() => {
                        setIsVisible(false);
                        onClose?.();
                    }}
                    className={`ml-4 inline-flex hover:bg-opacity-20 rounded-lg p-1.5 ${type === 'success' ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100'
                        }`}
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default Snackbar;