import { useState, useEffect } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { useAuth } from '../../context/AuthContext';
import { Pencil, X, Check, Loader2, Mail, Calendar, Phone, User as UserIcon } from 'lucide-react';

const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
};

const ProfilePage = () => {
    const { user, token, updateUser } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [updateLoading, setUpdateLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [profileData, setProfileData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        tanggal_lahir: '',
        phone: ''
    });

    // CSS Classes
    const inputClass = "w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#4ECDC4] focus:ring-1 focus:ring-[#4ECDC4] text-sm";
    const labelClass = "text-sm font-medium text-gray-600 flex items-center gap-2";
    const valueClass = "text-sm text-gray-800";
    const sectionClass = "px-6 py-5 grid grid-cols-3 gap-4 transition-colors duration-200";

    useEffect(() => {
        const fetchProfile = async () => {
            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const response = await fetch('http://localhost:3000/api/auth/profile', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();

                if (data.status === 'success') {
                    const { name, email, tanggal_lahir, phone } = data.data;
                    setProfileData({
                        name: name || '',
                        email: email || '',
                        tanggal_lahir: tanggal_lahir ? tanggal_lahir.split('T')[0] : '',
                        phone: phone || ''
                    });
                }
            } catch (err) {
                console.error('Error fetching profile:', err);
                setError('Failed to load profile data. Please refresh the page.');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [token]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        const errors = [];
        if (!profileData.name.trim()) errors.push('Name is required');
        if (!profileData.email.trim()) errors.push('Email is required');
        if (!profileData.email.includes('@')) errors.push('Invalid email format');
        if (!profileData.tanggal_lahir) errors.push('Date of birth is required');
        if (!profileData.phone.trim()) errors.push('Phone number is required');
        return errors;
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (validationErrors.length > 0) {
            setError(validationErrors.join(', '));
            return;
        }

        setUpdateLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await fetch('http://localhost:3000/api/auth/profile', {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(profileData)
            });

            const data = await response.json();

            if (data.status === 'success') {
                setSuccess('Profile updated successfully!');
                setIsEditing(false);
                updateUser({
                    ...user,
                    ...profileData
                });
                setTimeout(() => setSuccess(''), 3000);
            } else {
                setError(data.message || 'Failed to update profile');
            }
        } catch (err) {
            console.error('Update error:', err);
            setError('Failed to update profile. Please try again.');
        } finally {
            setUpdateLoading(false);
        }
    };

    if (loading) {
        return (
            <DashboardLayout>
                <div className="bg-white/95 backdrop-blur-lg shadow-xl rounded-xl p-8 flex justify-center items-center">
                    <div className="flex items-center gap-3 text-gray-500">
                        <Loader2 size={24} className="animate-spin" />
                        <span>Loading profile data...</span>
                    </div>
                </div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <div className="bg-white/95 backdrop-blur-lg shadow-xl rounded-xl overflow-hidden">
                <div className="px-6 py-5 flex justify-between items-center border-b border-gray-100">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Profile Information</h3>
                        <p className="text-sm text-gray-500 mt-1">Update your account's profile information.</p>
                    </div>
                    {!isEditing && (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="flex items-center gap-2 px-4 py-2 text-sm text-[#4ECDC4] hover:bg-[#4ECDC4]/10 rounded-lg transition-all"
                        >
                            <Pencil size={16} />
                            Edit Profile
                        </button>
                    )}
                </div>

                {error && (
                    <div className="mx-6 mt-4 p-4 bg-red-50 text-red-500 text-sm rounded-xl flex items-center gap-2 border border-red-100">
                        <X size={16} /> {error}
                    </div>
                )}
                {success && (
                    <div className="mx-6 mt-4 p-4 bg-green-50 text-green-500 text-sm rounded-xl flex items-center gap-2 border border-green-100">
                        <Check size={16} /> {success}
                    </div>
                )}

                <form onSubmit={handleUpdateProfile}>
                    <div className={`${sectionClass} bg-gray-50/50`}>
                        <dt className={labelClass}>
                            <UserIcon size={16} className="text-gray-400" />
                            Full name
                        </dt>
                        <dd className={`col-span-2 ${valueClass}`}>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="name"
                                    value={profileData.name}
                                    onChange={handleChange}
                                    className={inputClass}
                                    placeholder="Enter your full name"
                                />
                            ) : profileData.name || '-'}
                        </dd>
                    </div>

                    <div className={sectionClass}>
                        <dt className={labelClass}>
                            <Mail size={16} className="text-gray-400" />
                            Email address
                        </dt>
                        <dd className={`col-span-2 ${valueClass}`}>
                            {isEditing ? (
                                <input
                                    type="email"
                                    name="email"
                                    value={profileData.email}
                                    onChange={handleChange}
                                    className={inputClass}
                                    placeholder="Enter your email"
                                />
                            ) : profileData.email || '-'}
                        </dd>
                    </div>

                    <div className={`${sectionClass} bg-gray-50/50`}>
                        <dt className={labelClass}>
                            <Calendar size={16} className="text-gray-400" />
                            Date of Birth
                        </dt>
                        <dd className={`col-span-2 ${valueClass}`}>
                            {isEditing ? (
                                <input
                                    type="date"
                                    name="tanggal_lahir"
                                    value={profileData.tanggal_lahir}
                                    onChange={handleChange}
                                    className={inputClass}
                                    max={new Date().toISOString().split('T')[0]}
                                />
                            ) : formatDate(profileData.tanggal_lahir)}
                        </dd>
                    </div>

                    <div className={sectionClass}>
                        <dt className={labelClass}>
                            <Phone size={16} className="text-gray-400" />
                            Phone Number
                        </dt>
                        <dd className={`col-span-2 ${valueClass}`}>
                            {isEditing ? (
                                <input
                                    type="tel"
                                    name="phone"
                                    value={profileData.phone}
                                    onChange={handleChange}
                                    className={inputClass}
                                    placeholder="Enter your phone number"
                                />
                            ) : profileData.phone || '-'}
                        </dd>
                    </div>

                    {isEditing && (
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => {
                                    setIsEditing(false);
                                    setError('');
                                    setProfileData({
                                        name: user?.name || '',
                                        email: user?.email || '',
                                        tanggal_lahir: user?.tanggal_lahir ? user.tanggal_lahir.split('T')[0] : '',
                                        phone: user?.phone || ''
                                    });
                                }}
                                className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 rounded-lg transition-all"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={updateLoading}
                                className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-[#4ECDC4] hover:bg-[#45b8b0] rounded-lg transition-all disabled:opacity-50"
                            >
                                {updateLoading ? (
                                    <>
                                        <Loader2 size={16} className="animate-spin" />
                                        Updating...
                                    </>
                                ) : (
                                    <>
                                        <Check size={16} />
                                        Save Changes
                                    </>
                                )}
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </DashboardLayout>
    );
};

export default ProfilePage;