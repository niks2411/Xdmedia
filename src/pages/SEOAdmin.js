import React, { useState, useEffect } from 'react';
import Canonical from '../components/SEO/Canonical';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Mail,
    Phone,
    Building2,
    Calendar,
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
    Link,
    Globe
} from 'lucide-react';
import { db } from '../firebaseConfig';
import {
    collection,
    query,
    where,
    orderBy,
    onSnapshot,
    doc,
    updateDoc,
    deleteDoc
} from 'firebase/firestore';

const SEOAdmin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [leads, setLeads] = useState([]);
    const [filteredLeads, setFilteredLeads] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [selectedLead, setSelectedLead] = useState(null);
    const [loading, setLoading] = useState(true);
    const [toast, setToast] = useState({ show: false, message: '', type: '' });

    // Check if already authenticated
    useEffect(() => {
        const auth = sessionStorage.getItem('adminAuth');
        if (auth === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    // Fetch SEO leads from Firebase
    useEffect(() => {
        if (!isAuthenticated) return;

        const q = query(
            collection(db, 'contacts'), 
            where('sourcePage', '==', 'SEO Service'),
            orderBy('timestamp', 'desc')
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const leadsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setLeads(leadsData);
            setFilteredLeads(leadsData);
            setLoading(false);
        }, (error) => {
            console.error("Error fetching leads:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [isAuthenticated]);

    // Filter leads based on search and status
    useEffect(() => {
        let filtered = leads;

        if (statusFilter !== 'all') {
            filtered = filtered.filter(lead => lead.status === statusFilter);
        }

        if (searchTerm) {
            filtered = filtered.filter(lead =>
                lead.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                lead.website?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredLeads(filtered);
    }, [searchTerm, statusFilter, leads]);

    const handleLogin = (e) => {
        e.preventDefault();
        const adminUser = process.env.REACT_APP_ADMIN_USERNAME || 'adminxd';
        const adminPass = process.env.REACT_APP_ADMIN_PASSWORD || 'admin123';
        
        if (username === adminUser && password === adminPass) {
            setIsAuthenticated(true);
            sessionStorage.setItem('adminAuth', 'true');
        } else {
            alert('Incorrect username or password');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem('adminAuth');
    };

    const updateStatus = async (leadId, newStatus) => {
        try {
            await updateDoc(doc(db, 'contacts', leadId), { status: newStatus });
            showToast(`Status updated to ${newStatus}!`);
        } catch (error) {
            console.error('Error updating status:', error);
            showToast('Failed to update status', 'error');
        }
    };

    const deleteLead = async (leadId) => {
        if (window.confirm('Are you sure you want to delete this SEO lead?')) {
            try {
                await deleteDoc(doc(db, 'contacts', leadId));
                setSelectedLead(null);
                showToast('Lead deleted', 'warning');
            } catch (error) {
                console.error('Error deleting lead:', error);
            }
        }
    };

    const showToast = (message, type = 'success') => {
        setToast({ show: true, message, type });
        setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
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

    const getStatusColor = (status) => {
        switch (status) {
            case 'new': return { bg: 'rgba(59, 130, 246, 0.2)', border: 'rgba(59, 130, 246, 0.4)', text: '#60A5FA' };
            case 'contacted': return { bg: 'rgba(251, 191, 36, 0.2)', border: 'rgba(251, 191, 36, 0.4)', text: '#FBBF24' };
            case 'resolved': return { bg: 'rgba(71, 191, 114, 0.2)', border: 'rgba(71, 191, 114, 0.4)', text: '#47BF72' };
            default: return { bg: 'rgba(107, 114, 128, 0.2)', border: 'rgba(107, 114, 128, 0.4)', text: '#9CA3AF' };
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                    <div className="flex justify-center mb-8">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-green-500/20 border-2 border-[#16a34a]">
                            <Lock className="w-8 h-8 text-[#16a34a]" />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-white text-center mb-2">SEO Leads Login</h1>
                    <p className="text-gray-400 text-center mb-8">Management portal for SEO audit requests</p>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white outline-none" required />
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white outline-none" required />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                        <button type="submit" className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#16a34a] to-[#15803d] shadow-lg shadow-green-500/20 hover:scale-[1.02] transition-all">
                            Access Dashboard
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white">
            <Canonical path="/admin/seo-leads" />
            
            {/* Header */}
            <div className="border-b border-white/10">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <Globe className="w-8 h-8 text-[#16a34a]" />
                                <h1 className="text-3xl font-bold">SEO Audit Submissions</h1>
                            </div>
                            <p className="text-gray-400">Track and manage website audit requests from the SEO service page</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <a href="/admin" className="text-sm text-gray-400 hover:text-white transition-colors">Main Admin</a>
                            <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white">
                                <LogOut className="w-4 h-4" /> Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dashboard Content */}
            <div className="container mx-auto px-4 py-8">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[
                        { label: 'New Leads', count: leads.filter(l => l.status === 'new').length, color: 'text-blue-400', bg: 'bg-blue-400/10' },
                        { label: 'In Progress', count: leads.filter(l => l.status === 'contacted').length, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
                        { label: 'Completed', count: leads.filter(l => l.status === 'resolved').length, color: 'text-green-400', bg: 'bg-green-400/10' }
                    ].map((stat, i) => (
                        <div key={i} className={`p-6 rounded-2xl border border-white/10 ${stat.bg}`}>
                            <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                            <p className={`text-4xl font-bold ${stat.color}`}>{stat.count}</p>
                        </div>
                    ))}
                </div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search by name, email or website..." className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-[#16a34a] transition-all" />
                    </div>
                    <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 outline-none">
                        <option value="all" className="bg-[#1a1a1a]">All Status</option>
                        <option value="new" className="bg-[#1a1a1a]">New Requests</option>
                        <option value="contacted" className="bg-[#1a1a1a]">Contacted</option>
                        <option value="resolved" className="bg-[#1a1a1a]">Resolved</option>
                    </select>
                </div>

                {/* Leads List */}
                {loading ? (
                    <div className="text-center py-20"><div className="w-10 h-10 border-4 border-[#16a34a] border-t-transparent rounded-full animate-spin mx-auto"></div></div>
                ) : filteredLeads.length === 0 ? (
                    <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
                        <Globe className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                        <p className="text-gray-400">No SEO audit requests found matching your filters.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-4">
                        {filteredLeads.map((lead) => (
                            <motion.div key={lead.id} layout className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#16a34a]/30 transition-all group">
                                <div className="flex flex-col lg:flex-row justify-between gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-xl font-bold">{lead.name}</h3>
                                            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase" style={{ background: getStatusColor(lead.status).bg, color: getStatusColor(lead.status).text, border: `1px solid ${getStatusColor(lead.status).border}` }}>
                                                {lead.status}
                                            </span>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-400">
                                            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#16a34a]" /> {lead.email}</div>
                                            <div className="flex items-center gap-2"><Link className="w-4 h-4 text-[#16a34a]" /> <a href={lead.website} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{lead.website}</a></div>
                                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#16a34a]" /> {formatDate(lead.timestamp)}</div>
                                        </div>
                                        {lead.message && (
                                            <div className="p-4 rounded-xl bg-white/5 text-sm text-gray-300 border border-white/5">
                                                <p className="text-[#16a34a] font-bold text-[10px] uppercase mb-2">Message:</p>
                                                {lead.message}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-wrap lg:flex-col gap-2 justify-end">
                                        <select 
                                            value={lead.status} 
                                            onChange={(e) => updateStatus(lead.id, e.target.value)}
                                            className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-xs outline-none"
                                        >
                                            <option value="new" className="bg-[#1a1a1a]">Mark as New</option>
                                            <option value="contacted" className="bg-[#1a1a1a]">Mark Contacted</option>
                                            <option value="resolved" className="bg-[#1a1a1a]">Mark Resolved</option>
                                        </select>
                                        <button onClick={() => deleteLead(lead.id)} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 text-xs transition-all">
                                            <Trash2 className="w-4 h-4" /> Delete
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            {/* Toast */}
            <AnimatePresence>
                {toast.show && (
                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className={`fixed bottom-8 right-8 px-6 py-3 rounded-xl shadow-2xl z-[100] ${toast.type === 'error' ? 'bg-red-500' : 'bg-[#16a34a]'} text-white font-medium`}>
                        {toast.message}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SEOAdmin;
