import React, { useState, useEffect } from 'react';
import Canonical from '../components/SEO/Canonical';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Mail,
    Phone,
    Building2,
    Calendar,
    MessageSquare,
    Search,
    Filter,
    Trash2,
    CheckCircle,
    Clock,
    XCircle,
    Eye,
    EyeOff,
    Lock,
    LogOut,
    CalendarCheck,
    Users,
    Link as LinkIcon,
    Globe
} from 'lucide-react';
import { db } from '../firebaseConfig';
import {
    collection,
    query,
    orderBy,
    onSnapshot,
    doc,
    updateDoc,
    deleteDoc
} from 'firebase/firestore';

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [contacts, setContacts] = useState([]);
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [filteredBookings, setFilteredBookings] = useState([]);
    const [activeTab, setActiveTab] = useState('contacts');
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [sourcePageFilter, setSourcePageFilter] = useState('all');
    const [bookingStatusFilter, setBookingStatusFilter] = useState('all');
    const [selectedContact, setSelectedContact] = useState(null);
    const [loading, setLoading] = useState(true);
    const [toast, setToast] = useState({ show: false, message: '', type: '' });

    // Password confirmation modal state
    const [passwordModal, setPasswordModal] = useState({
        show: false,
        type: '', // 'contact' or 'booking'
        itemId: null,
        newStatus: '',
        password: '',
        error: ''
    });

    // Check if already authenticated
    useEffect(() => {
        const auth = sessionStorage.getItem('adminAuth');
        if (auth === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    // Fetch contacts from Firebase
    useEffect(() => {
        if (!isAuthenticated) return;

        const q = query(collection(db, 'contacts'), orderBy('timestamp', 'desc'));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const contactsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setContacts(contactsData);
            setFilteredContacts(contactsData);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [isAuthenticated]);

    // Fetch bookings from Firebase
    useEffect(() => {
        if (!isAuthenticated) return;

        const q = query(collection(db, 'bookings'), orderBy('createdAt', 'desc'));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const bookingsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setBookings(bookingsData);
            setFilteredBookings(bookingsData);
        });

        return () => unsubscribe();
    }, [isAuthenticated]);

    // Filter contacts based on search, status, and source page
    useEffect(() => {
        let filtered = contacts;

        // Filter by status
        if (statusFilter !== 'all') {
            filtered = filtered.filter(contact => contact.status === statusFilter);
        }

        // Filter by source page
        if (sourcePageFilter !== 'all') {
            filtered = filtered.filter(contact => contact.sourcePage === sourcePageFilter);
        }

        // Filter by search term
        if (searchTerm && activeTab === 'contacts') {
            filtered = filtered.filter(contact =>
                contact.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                contact.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                contact.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                contact.sourcePage?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredContacts(filtered);
    }, [searchTerm, statusFilter, sourcePageFilter, contacts, activeTab]);

    // Filter bookings
    useEffect(() => {
        let filtered = bookings;

        if (bookingStatusFilter !== 'all') {
            filtered = filtered.filter(booking => booking.status === bookingStatusFilter);
        }

        if (searchTerm && activeTab === 'bookings') {
            filtered = filtered.filter(booking =>
                booking.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                booking.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                booking.phone?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredBookings(filtered);
    }, [searchTerm, bookingStatusFilter, bookings, activeTab]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === process.env.REACT_APP_ADMIN_USERNAME && password === process.env.REACT_APP_ADMIN_PASSWORD) {
            setIsAuthenticated(true);
            sessionStorage.setItem('adminAuth', 'true');
        } else {
            alert('Incorrect username or password');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem('adminAuth');
        setUsername('');
        setPassword('');
    };

    const updateStatus = async (contactId, newStatus) => {
        // Show password modal instead of directly updating
        setPasswordModal({
            show: true,
            type: 'contact',
            itemId: contactId,
            newStatus: newStatus,
            password: '',
            error: ''
        });
    };

    const deleteContact = async (contactId) => {
        if (window.confirm('Are you sure you want to delete this contact?')) {
            try {
                await deleteDoc(doc(db, 'contacts', contactId));
                setSelectedContact(null);
            } catch (error) {
                console.error('Error deleting contact:', error);
            }
        }
    };

    const showToast = (message, type = 'success') => {
        setToast({ show: true, message, type });
        setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
    };

    const updateBookingStatus = async (bookingId, newStatus) => {
        // Show password modal instead of directly updating
        setPasswordModal({
            show: true,
            type: 'booking',
            itemId: bookingId,
            newStatus: newStatus,
            password: '',
            error: ''
        });
    };

    const handlePasswordConfirm = async () => {
        // Verify password
        if (passwordModal.password !== process.env.REACT_APP_ADMIN_PASSWORD) {
            setPasswordModal(prev => ({ ...prev, error: 'Incorrect password' }));
            return;
        }

        try {
            if (passwordModal.type === 'contact') {
                await updateDoc(doc(db, 'contacts', passwordModal.itemId), {
                    status: passwordModal.newStatus
                });
                const statusMessages = {
                    new: '✓ Contact marked as new!',
                    contacted: '✓ Contact marked as contacted!',
                    resolved: '✓ Contact marked as resolved!'
                };
                showToast(statusMessages[passwordModal.newStatus] || 'Status updated!', 'success');
            } else if (passwordModal.type === 'booking') {
                await updateDoc(doc(db, 'bookings', passwordModal.itemId), {
                    status: passwordModal.newStatus
                });
                const statusMessages = {
                    confirmed: '✓ Booking confirmed successfully!',
                    completed: '✓ Booking marked as completed!',
                    cancelled: '✗ Booking has been cancelled',
                    pending: '⟳ Booking set to pending'
                };
                showToast(statusMessages[passwordModal.newStatus] || 'Status updated!', passwordModal.newStatus === 'cancelled' ? 'warning' : 'success');
            }

            // Close modal
            setPasswordModal({ show: false, type: '', itemId: null, newStatus: '', password: '', error: '' });
        } catch (error) {
            console.error('Error updating status:', error);
            showToast('Failed to update status. Please try again.', 'error');
        }
    };

    const deleteBooking = async (bookingId) => {
        if (window.confirm('Are you sure you want to delete this booking?')) {
            try {
                await deleteDoc(doc(db, 'bookings', bookingId));
            } catch (error) {
                console.error('Error deleting booking:', error);
            }
        }
    };

    const getBookingStatusColor = (status) => {
        switch (status) {
            case 'pending':
                return { bg: 'rgba(251, 191, 36, 0.2)', border: 'rgba(251, 191, 36, 0.4)', text: '#FBBF24' };
            case 'confirmed':
                return { bg: 'rgba(59, 130, 246, 0.2)', border: 'rgba(59, 130, 246, 0.4)', text: '#60A5FA' };
            case 'completed':
                return { bg: 'rgba(71, 191, 114, 0.2)', border: 'rgba(71, 191, 114, 0.4)', text: '#47BF72' };
            case 'cancelled':
                return { bg: 'rgba(239, 68, 68, 0.2)', border: 'rgba(239, 68, 68, 0.4)', text: '#EF4444' };
            default:
                return { bg: 'rgba(107, 114, 128, 0.2)', border: 'rgba(107, 114, 128, 0.4)', text: '#9CA3AF' };
        }
    };

    const formatDate = (timestamp) => {
        if (!timestamp) return 'N/A';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'new':
                return <Clock className="w-4 h-4" />;
            case 'contacted':
                return <CheckCircle className="w-4 h-4" />;
            case 'resolved':
                return <CheckCircle className="w-4 h-4" />;
            default:
                return <Clock className="w-4 h-4" />;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'new':
                return { bg: 'rgba(59, 130, 246, 0.2)', border: 'rgba(59, 130, 246, 0.4)', text: '#60A5FA' };
            case 'contacted':
                return { bg: 'rgba(251, 191, 36, 0.2)', border: 'rgba(251, 191, 36, 0.4)', text: '#FBBF24' };
            case 'resolved':
                return { bg: 'rgba(71, 191, 114, 0.2)', border: 'rgba(71, 191, 114, 0.4)', text: '#47BF72' };
            default:
                return { bg: 'rgba(107, 114, 128, 0.2)', border: 'rgba(107, 114, 128, 0.4)', text: '#9CA3AF' };
        }
    };

    // Login Screen
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center" style={{ background: '#0a0a0a' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md p-8 rounded-2xl backdrop-blur-xl border"
                    style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderColor: 'rgba(255, 255, 255, 0.1)'
                    }}
                >
                    <div className="flex items-center justify-center mb-8">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{
                            background: 'rgba(71, 191, 114, 0.2)',
                            border: '2px solid #47BF72'
                        }}>
                            <Lock className="w-8 h-8 text-green-400" />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-white text-center mb-2">Admin Login</h1>
                    <p className="text-gray-400 text-center mb-8">Enter your credentials to access the dashboard</p>

                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username"
                            className="w-full px-4 py-3 rounded-lg mb-4 outline-none"
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                color: 'white'
                            }}
                            required
                        />
                        <div className="relative mb-4">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                className="w-full px-4 py-3 rounded-lg outline-none pr-12"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    color: 'white'
                                }}
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105"
                            style={{
                                background: 'linear-gradient(135deg, #47BF72, #3aa85f)',
                                boxShadow: '0 10px 40px rgba(71, 191, 114, 0.3)'
                            }}
                        >
                            Login
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    // Admin Dashboard
    return (
        <div className="min-h-screen" style={{ background: '#0a0a0a' }}>
            <Canonical path="/admin" />
            {/* Toast Notification */}
            <AnimatePresence>
                {toast.show && (
                    <motion.div
                        initial={{ opacity: 0, y: -50, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: -50, x: '-50%' }}
                        className="fixed top-6 left-1/2 z-[100] px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3"
                        style={{
                            background: toast.type === 'success'
                                ? 'linear-gradient(135deg, rgba(71, 191, 114, 0.95), rgba(58, 168, 95, 0.95))'
                                : toast.type === 'warning'
                                    ? 'linear-gradient(135deg, rgba(251, 191, 36, 0.95), rgba(217, 160, 0, 0.95))'
                                    : 'linear-gradient(135deg, rgba(239, 68, 68, 0.95), rgba(200, 50, 50, 0.95))',
                            border: toast.type === 'success'
                                ? '1px solid rgba(71, 191, 114, 0.5)'
                                : toast.type === 'warning'
                                    ? '1px solid rgba(251, 191, 36, 0.5)'
                                    : '1px solid rgba(239, 68, 68, 0.5)',
                            boxShadow: toast.type === 'success'
                                ? '0 10px 40px rgba(71, 191, 114, 0.4)'
                                : toast.type === 'warning'
                                    ? '0 10px 40px rgba(251, 191, 36, 0.4)'
                                    : '0 10px 40px rgba(239, 68, 68, 0.4)'
                        }}
                    >
                        {toast.type === 'success' && <CheckCircle className="w-5 h-5 text-white" />}
                        {toast.type === 'warning' && <Clock className="w-5 h-5 text-white" />}
                        {toast.type === 'error' && <XCircle className="w-5 h-5 text-white" />}
                        <span className="text-white font-medium">{toast.message}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Header */}
            <div className="border-b" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                <div className="container-max py-6">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-1">Admin Dashboard</h1>
                            <p className="text-gray-400">Manage contacts and bookings</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-all duration-300"
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            <LogOut className="w-4 h-4" />
                            Logout
                        </button>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => setActiveTab('contacts')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === 'contacts'
                                ? 'text-white'
                                : 'text-gray-400 hover:text-white'
                                }`}
                            style={{
                                background: activeTab === 'contacts'
                                    ? 'linear-gradient(135deg, #47BF72, #3aa85f)'
                                    : 'rgba(255, 255, 255, 0.05)',
                                border: activeTab === 'contacts'
                                    ? 'none'
                                    : '1px solid rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            <Users className="w-5 h-5" />
                            Contacts
                            <span className="ml-1 px-2 py-0.5 rounded-full text-xs" style={{
                                background: activeTab === 'contacts' ? 'rgba(255,255,255,0.2)' : 'rgba(71, 191, 114, 0.2)',
                                color: activeTab === 'contacts' ? 'white' : '#47BF72'
                            }}>
                                {contacts.length}
                            </span>
                        </button>
                        <button
                            onClick={() => setActiveTab('bookings')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === 'bookings'
                                ? 'text-white'
                                : 'text-gray-400 hover:text-white'
                                }`}
                            style={{
                                background: activeTab === 'bookings'
                                    ? 'linear-gradient(135deg, #47BF72, #3aa85f)'
                                    : 'rgba(255, 255, 255, 0.05)',
                                border: activeTab === 'bookings'
                                    ? 'none'
                                    : '1px solid rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            <CalendarCheck className="w-5 h-5" />
                            Bookings
                            <span className="ml-1 px-2 py-0.5 rounded-full text-xs" style={{
                                background: activeTab === 'bookings' ? 'rgba(255,255,255,0.2)' : 'rgba(71, 191, 114, 0.2)',
                                color: activeTab === 'bookings' ? 'white' : '#47BF72'
                            }}>
                                {bookings.length}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Contacts Tab Content */}
            {activeTab === 'contacts' && (
                <div className="container-max py-6">
                    <div className="flex flex-col gap-4 mb-6">
                        {/* Search */}
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search by name, email, or company..."
                                className="w-full pl-12 pr-4 py-3 rounded-lg outline-none"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    color: 'white'
                                }}
                            />
                        </div>

                        {/* Filters Row */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-2">
                            {/* Status Filter */}
                            <div className="flex items-center gap-2 flex-1 sm:flex-initial">
                                <Filter className="w-5 h-5 text-gray-400 hidden sm:block" />
                                <select
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                    className="px-4 py-3 rounded-lg outline-none"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        color: 'white'
                                    }}
                                >
                                    <option value="all" style={{ background: '#1a1a2e' }}>All Status</option>
                                    <option value="new" style={{ background: '#1a1a2e' }}>New</option>
                                    <option value="contacted" style={{ background: '#1a1a2e' }}>Contacted</option>
                                    <option value="resolved" style={{ background: '#1a1a2e' }}>Resolved</option>
                                </select>
                            </div>

                            {/* Source Page Filter */}
                            <div className="flex items-center gap-2 flex-1 sm:flex-initial">
                                <select
                                    value={sourcePageFilter}
                                    onChange={(e) => setSourcePageFilter(e.target.value)}
                                    className="px-4 py-3 rounded-lg outline-none"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        color: 'white'
                                    }}
                                >
                                    <option value="all" style={{ background: '#1a1a2e' }}>All Pages</option>
                                    <option value="Contact Page" style={{ background: '#1a1a2e' }}>Contact Page</option>
                                    <option value="SEO Service" style={{ background: '#1a1a2e' }}>SEO Service</option>
                                    <option value="SEO Tools" style={{ background: '#1a1a2e' }}>SEO Tools</option>
                                    <option value="Marketing Tools" style={{ background: '#1a1a2e' }}>Marketing Tools</option>
                                    <option value="Analytics" style={{ background: '#1a1a2e' }}>Analytics</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
                        <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                            <p className="text-gray-400 text-sm mb-1">Total</p>
                            <p className="text-2xl font-bold text-white">{contacts.length}</p>
                        </div>
                        <div className="p-4 rounded-lg" style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                            <p className="text-blue-400 text-sm mb-1">New</p>
                            <p className="text-2xl font-bold text-blue-400">{contacts.filter(c => c.status === 'new').length}</p>
                        </div>
                        <div className="p-4 rounded-lg" style={{ background: 'rgba(251, 191, 36, 0.1)', border: '1px solid rgba(251, 191, 36, 0.2)' }}>
                            <p className="text-yellow-400 text-sm mb-1">Contacted</p>
                            <p className="text-2xl font-bold text-yellow-400">{contacts.filter(c => c.status === 'contacted').length}</p>
                        </div>
                        <div className="p-4 rounded-lg" style={{ background: 'rgba(71, 191, 114, 0.1)', border: '1px solid rgba(71, 191, 114, 0.2)' }}>
                            <p className="text-green-400 text-sm mb-1">Resolved</p>
                            <p className="text-2xl font-bold text-green-400">{contacts.filter(c => c.status === 'resolved').length}</p>
                        </div>
                    </div>

                    {/* Contacts List */}
                    {loading ? (
                        <div className="text-center py-12">
                            <p className="text-gray-400">Loading contacts...</p>
                        </div>
                    ) : filteredContacts.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-400">No contacts found</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {filteredContacts.map((contact) => (
                                <motion.div
                                    key={contact.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-6 rounded-xl backdrop-blur-xl border cursor-pointer hover:border-green-500/30 transition-all duration-300"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        borderColor: 'rgba(255, 255, 255, 0.1)'
                                    }}
                                    onClick={() => setSelectedContact(contact)}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-lg font-semibold text-white">{contact.name}</h3>
                                                <div
                                                    className="px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1"
                                                    style={{
                                                        background: getStatusColor(contact.status).bg,
                                                        border: `1px solid ${getStatusColor(contact.status).border}`,
                                                        color: getStatusColor(contact.status).text
                                                    }}
                                                >
                                                    {getStatusIcon(contact.status)}
                                                    {contact.status}
                                                </div>
                                                {contact.sourcePage && (
                                                    <div
                                                        className="px-3 py-1 rounded-full text-xs font-medium"
                                                        style={{
                                                            background: 'rgba(139, 92, 246, 0.2)',
                                                            border: '1px solid rgba(139, 92, 246, 0.3)',
                                                            color: '#A78BFA'
                                                        }}
                                                    >
                                                        {contact.sourcePage}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                                <div className="flex items-center gap-2">
                                                    <Mail className="w-4 h-4" />
                                                    {contact.email}
                                                </div>
                                                {contact.company && (
                                                    <div className="flex items-center gap-2">
                                                        <Building2 className="w-4 h-4" />
                                                        {contact.company}
                                                    </div>
                                                )}
                                                {contact.phone && (
                                                    <div className="flex items-center gap-2">
                                                        <Phone className="w-4 h-4" />
                                                        {contact.phone}
                                                    </div>
                                                )}
                                                {contact.website && (
                                                    <div className="flex items-center gap-2">
                                                        <Globe className="w-4 h-4" />
                                                        <a href={contact.website} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                                                            {contact.website}
                                                        </a>
                                                    </div>
                                                )}
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4" />
                                                    {formatDate(contact.timestamp)}
                                                </div>
                                            </div>
                                        </div>
                                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-all duration-300" style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)'
                                        }}>
                                            <Eye className="w-4 h-4" />
                                            View Details
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Bookings Tab Content */}
            {activeTab === 'bookings' && (
                <div className="container-max py-6">
                    {/* Search and Filter */}
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search bookings by name, email, or phone..."
                                className="w-full pl-12 pr-4 py-3 rounded-lg outline-none"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    color: 'white'
                                }}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Filter className="w-5 h-5 text-gray-400" />
                            <select
                                value={bookingStatusFilter}
                                onChange={(e) => setBookingStatusFilter(e.target.value)}
                                className="px-4 py-3 rounded-lg outline-none"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    color: 'white'
                                }}
                            >
                                <option value="all" style={{ background: '#1a1a2e' }}>All Status</option>
                                <option value="pending" style={{ background: '#1a1a2e' }}>Pending</option>
                                <option value="confirmed" style={{ background: '#1a1a2e' }}>Confirmed</option>
                                <option value="completed" style={{ background: '#1a1a2e' }}>Completed</option>
                                <option value="cancelled" style={{ background: '#1a1a2e' }}>Cancelled</option>
                            </select>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="p-4 rounded-xl" style={{ background: 'rgba(251, 191, 36, 0.1)', border: '1px solid rgba(251, 191, 36, 0.2)' }}>
                            <p className="text-gray-400 text-sm mb-1">Pending</p>
                            <p className="text-2xl font-bold text-yellow-400">{bookings.filter(b => b.status === 'pending').length}</p>
                        </div>
                        <div className="p-4 rounded-xl" style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                            <p className="text-gray-400 text-sm mb-1">Confirmed</p>
                            <p className="text-2xl font-bold text-blue-400">{bookings.filter(b => b.status === 'confirmed').length}</p>
                        </div>
                        <div className="p-4 rounded-xl" style={{ background: 'rgba(71, 191, 114, 0.1)', border: '1px solid rgba(71, 191, 114, 0.2)' }}>
                            <p className="text-gray-400 text-sm mb-1">Completed</p>
                            <p className="text-2xl font-bold text-green-400">{bookings.filter(b => b.status === 'completed').length}</p>
                        </div>
                        <div className="p-4 rounded-xl" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                            <p className="text-gray-400 text-sm mb-1">Cancelled</p>
                            <p className="text-2xl font-bold text-red-400">{bookings.filter(b => b.status === 'cancelled').length}</p>
                        </div>
                    </div>

                    {/* Bookings List */}
                    {loading ? (
                        <div className="text-center py-12">
                            <div className="animate-spin w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full mx-auto mb-4"></div>
                            <p className="text-gray-400">Loading bookings...</p>
                        </div>
                    ) : filteredBookings.length === 0 ? (
                        <div className="text-center py-12">
                            <CalendarCheck className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                            <p className="text-gray-400 text-lg">No bookings found</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {filteredBookings.map((booking) => (
                                <motion.div
                                    key={booking.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-6 rounded-xl border"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        borderColor: 'rgba(255, 255, 255, 0.1)'
                                    }}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-lg font-semibold text-white">{booking.name}</h3>
                                                <span
                                                    className="px-3 py-1 rounded-full text-xs font-medium capitalize"
                                                    style={{
                                                        background: getBookingStatusColor(booking.status).bg,
                                                        border: `1px solid ${getBookingStatusColor(booking.status).border}`,
                                                        color: getBookingStatusColor(booking.status).text
                                                    }}
                                                >
                                                    {booking.status}
                                                </span>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                                                <p className="text-gray-400 flex items-center gap-2">
                                                    <Mail className="w-4 h-4" /> {booking.email}
                                                </p>
                                                <p className="text-gray-400 flex items-center gap-2">
                                                    <Phone className="w-4 h-4" /> {booking.phone}
                                                </p>
                                                <p className="text-green-400 flex items-center gap-2 font-medium">
                                                    <Calendar className="w-4 h-4" /> {booking.bookingDate} | {booking.timeSlot}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {booking.status === 'pending' && (
                                                <button
                                                    onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                                                    className="px-3 py-1.5 rounded-lg text-sm font-medium text-blue-400"
                                                    style={{ background: 'rgba(59, 130, 246, 0.2)', border: '1px solid rgba(59, 130, 246, 0.3)' }}
                                                >
                                                    Confirm
                                                </button>
                                            )}
                                            {booking.status === 'confirmed' && (
                                                <button
                                                    onClick={() => updateBookingStatus(booking.id, 'completed')}
                                                    className="px-3 py-1.5 rounded-lg text-sm font-medium text-green-400"
                                                    style={{ background: 'rgba(71, 191, 114, 0.2)', border: '1px solid rgba(71, 191, 114, 0.3)' }}
                                                >
                                                    Complete
                                                </button>
                                            )}
                                            {booking.status !== 'cancelled' && booking.status !== 'completed' && (
                                                <button
                                                    onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                                                    className="px-3 py-1.5 rounded-lg text-sm font-medium text-red-400"
                                                    style={{ background: 'rgba(239, 68, 68, 0.2)', border: '1px solid rgba(239, 68, 68, 0.3)' }}
                                                >
                                                    Cancel
                                                </button>
                                            )}
                                            <button
                                                onClick={() => deleteBooking(booking.id)}
                                                className="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-400 hover:text-red-400"
                                                style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Contact Detail Modal */}
            <AnimatePresence>
                {selectedContact && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedContact(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="w-full max-w-2xl rounded-2xl p-8 border"
                            style={{
                                background: '#0a0a0a',
                                borderColor: 'rgba(255, 255, 255, 0.1)'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-2">{selectedContact.name}</h2>
                                    <p className="text-gray-400">{formatDate(selectedContact.timestamp)}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedContact(null)}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <XCircle className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <Mail className="w-5 h-5 text-gray-400" />
                                    <a href={`mailto:${selectedContact.email}`} className="hover:text-green-400 transition-colors">
                                        {selectedContact.email}
                                    </a>
                                </div>
                                {selectedContact.phone && (
                                    <div className="flex items-center gap-3 text-gray-300">
                                        <Phone className="w-5 h-5 text-gray-400" />
                                        <a href={`tel:${selectedContact.phone}`} className="hover:text-green-400 transition-colors">
                                            {selectedContact.phone}
                                        </a>
                                    </div>
                                )}
                                {selectedContact.company && (
                                    <div className="flex items-center gap-3 text-gray-300">
                                        <Building2 className="w-5 h-5 text-gray-400" />
                                        {selectedContact.company}
                                    </div>
                                )}
                                {selectedContact.service && (
                                    <div className="flex items-center gap-3 text-gray-300">
                                        <MessageSquare className="w-5 h-5 text-gray-400" />
                                        {selectedContact.service}
                                    </div>
                                )}
                                {selectedContact.website && (
                                    <div className="flex items-center gap-3 text-gray-300">
                                        <Globe className="w-5 h-5 text-gray-400" />
                                        <a href={selectedContact.website} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                                            {selectedContact.website}
                                        </a>
                                    </div>
                                )}
                                {selectedContact.sourcePage && (
                                    <div className="flex items-center gap-3 text-gray-300">
                                        <div className="w-5 h-5 flex items-center justify-center text-gray-400">📄</div>
                                        <span>Source: <span className="text-purple-400 font-medium">{selectedContact.sourcePage}</span></span>
                                    </div>
                                )}
                            </div>

                            <div className="mb-6">
                                <h3 className="text-sm font-semibold text-gray-400 mb-2">MESSAGE</h3>
                                <div className="p-4 rounded-lg" style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)'
                                }}>
                                    <p className="text-gray-300 whitespace-pre-wrap">{selectedContact.message}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={() => updateStatus(selectedContact.id, 'new')}
                                    className="px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                                    style={{
                                        background: getStatusColor('new').bg,
                                        border: `1px solid ${getStatusColor('new').border}`,
                                        color: getStatusColor('new').text
                                    }}
                                >
                                    Mark as New
                                </button>
                                <button
                                    onClick={() => updateStatus(selectedContact.id, 'contacted')}
                                    className="px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                                    style={{
                                        background: getStatusColor('contacted').bg,
                                        border: `1px solid ${getStatusColor('contacted').border}`,
                                        color: getStatusColor('contacted').text
                                    }}
                                >
                                    Mark as Contacted
                                </button>
                                <button
                                    onClick={() => updateStatus(selectedContact.id, 'resolved')}
                                    className="px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                                    style={{
                                        background: getStatusColor('resolved').bg,
                                        border: `1px solid ${getStatusColor('resolved').border}`,
                                        color: getStatusColor('resolved').text
                                    }}
                                >
                                    Mark as Resolved
                                </button>
                                <button
                                    onClick={() => deleteContact(selectedContact.id)}
                                    className="px-4 py-2 rounded-lg font-medium text-red-400 transition-all duration-300 hover:scale-105 ml-auto"
                                    style={{
                                        background: 'rgba(239, 68, 68, 0.1)',
                                        border: '1px solid rgba(239, 68, 68, 0.3)'
                                    }}
                                >
                                    <Trash2 className="w-4 h-4 inline mr-2" />
                                    Delete
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Password Confirmation Modal */}
            <AnimatePresence>
                {passwordModal.show && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
                        onClick={() => setPasswordModal({ show: false, type: '', itemId: null, newStatus: '', password: '', error: '' })}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="w-full max-w-md rounded-2xl p-6 border"
                            style={{
                                background: '#0a0a0a',
                                borderColor: 'rgba(255, 255, 255, 0.1)'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{
                                    background: 'rgba(71, 191, 114, 0.2)',
                                    border: '2px solid #47BF72'
                                }}>
                                    <Lock className="w-8 h-8 text-green-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Confirm Status Change</h3>
                                <p className="text-gray-400 text-sm">
                                    Enter admin password to change status to <span className="text-green-400 font-medium capitalize">{passwordModal.newStatus}</span>
                                </p>
                            </div>

                            <div className="relative mb-4">
                                <input
                                    type="password"
                                    value={passwordModal.password}
                                    onChange={(e) => setPasswordModal(prev => ({ ...prev, password: e.target.value, error: '' }))}
                                    placeholder="Enter admin password"
                                    className="w-full px-4 py-3 rounded-lg outline-none"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: passwordModal.error ? '1px solid rgba(239, 68, 68, 0.5)' : '1px solid rgba(255, 255, 255, 0.1)',
                                        color: 'white'
                                    }}
                                    onKeyDown={(e) => e.key === 'Enter' && handlePasswordConfirm()}
                                    autoFocus
                                />
                            </div>

                            {passwordModal.error && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-400 text-sm text-center mb-4"
                                >
                                    {passwordModal.error}
                                </motion.p>
                            )}

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setPasswordModal({ show: false, type: '', itemId: null, newStatus: '', password: '', error: '' })}
                                    className="flex-1 py-3 rounded-lg font-medium text-gray-300 transition-all duration-300 hover:text-white"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)'
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handlePasswordConfirm}
                                    className="flex-1 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105"
                                    style={{
                                        background: 'linear-gradient(135deg, #47BF72, #3aa85f)',
                                        boxShadow: '0 10px 40px rgba(71, 191, 114, 0.3)'
                                    }}
                                >
                                    Confirm
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Admin;
