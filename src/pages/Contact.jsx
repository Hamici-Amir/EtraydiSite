import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, Globe, Twitter, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (data.status === 'success') {
                alert('Thank you for your message! Our support team will get back to you soon.');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                alert('Something went wrong. Please try again later.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to send message. Please check your connection.');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 100, damping: 20 }
        }
    };

    return (
        <div className="pt-32 pb-20 min-h-screen relative overflow-hidden">
            <div className="container max-w-6xl relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
                >
                    {/* Contact Info */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col gap-12"
                    >
                        <div>
                            <div className="badge badge-cyan mb-6">{t('contact.subtitle_badge')}</div>
                            <h1 className="text-5xl md:text-6xl font-bold font-heading text-white mb-6 tracking-tight">{t('contact.title')}</h1>
                            <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
                                {t('contact.description')}
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className="flex items-start gap-6 group glass-premium p-6 rounded-3xl transition-all border-white/5 hover:border-cyan-500/30 shadow-lg shadow-black/20 relative overflow-hidden cursor-pointer"
                                onClick={() => window.location.href = "mailto:support@etraydi.com"}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[40px] rounded-full group-hover:bg-cyan-500/20 transition-colors"></div>
                                <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 rounded-2xl group-hover:scale-110 transition-transform shadow-inner">
                                    <Mail size={28} />
                                </div>
                                <div className="pt-3">
                                    <h4 className="text-white font-bold font-heading text-xl mb-1">{t('contact.email_support')}</h4>
                                    <p className="text-base text-slate-400 font-medium tracking-wide">support@etraydi.com</p>
                                </div>
                            </motion.div>

                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className="flex items-start gap-6 group glass-premium p-6 rounded-3xl transition-all border-white/5 hover:border-emerald-500/30 shadow-lg shadow-black/20 relative overflow-hidden cursor-pointer"
                                onClick={() => window.location.href = "tel:+15551234567"}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[40px] rounded-full group-hover:bg-emerald-500/20 transition-colors"></div>
                                <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 rounded-2xl group-hover:scale-110 transition-transform shadow-inner">
                                    <Phone size={28} />
                                </div>
                                <div className="pt-3">
                                    <h4 className="text-white font-bold font-heading text-xl mb-1">{t('contact.phone_support')}</h4>
                                    <p className="text-base text-slate-400 font-medium tracking-wide leading-relaxed">{t('contact.phone_number')}</p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
                            <div>
                                <h4 className="text-white font-bold font-heading mb-6 tracking-tight text-center sm:text-left">{t('contact.connect_with_us')}</h4>
                                <div className="flex gap-4">
                                    <a href="#" className="w-12 h-12 glass-premium flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:-translate-y-2 transition-all rounded-xl border-white/5 shadow-lg relative group">
                                        <div className="absolute inset-0 bg-cyan-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <Twitter size={20} className="relative z-10" />
                                    </a>
                                    <a href="#" className="w-12 h-12 glass-premium flex items-center justify-center text-slate-300 hover:text-indigo-400 hover:-translate-y-2 transition-all rounded-xl border-white/5 shadow-lg relative group">
                                        <div className="absolute inset-0 bg-indigo-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <Linkedin size={20} className="relative z-10" />
                                    </a>
                                    <a href="#" className="w-12 h-12 glass-premium flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:-translate-y-2 transition-all rounded-xl border-white/5 shadow-lg relative group">
                                        <div className="absolute inset-0 bg-emerald-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <Globe size={20} className="relative z-10" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="glass-premium p-8 md:p-12 rounded-[3.5rem] relative shadow-2xl overflow-hidden group border-white/10"
                    >
                        {/* Animated Gradient Border Effect */}
                        <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500 opacity-60"></div>
                        <div className="absolute -inset-[100%] bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-emerald-500/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rotate-12 pointer-events-none"></div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                            <div className="flex flex-col gap-2 relative group-focus-within:text-cyan-400 transition-colors">
                                <label className="text-xs font-bold font-heading text-slate-400 uppercase tracking-[0.2em] ml-2 mb-1 transition-colors">{t('contact.form.name')}</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={t('contact.form.placeholder_name')}
                                    className="bg-transparent border-2 border-white/10 rounded-2xl px-6 py-4 text-white font-medium focus:border-cyan-500 focus:bg-cyan-900/10 focus:shadow-[0_0_20px_rgba(6,182,212,0.15)] focus:outline-none transition-all duration-300"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2 relative transition-colors">
                                <label className="text-xs font-bold font-heading text-slate-400 uppercase tracking-[0.2em] ml-2 mb-1 transition-colors">{t('contact.form.email')}</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={t('contact.form.placeholder_email')}
                                    className="bg-transparent border-2 border-white/10 rounded-2xl px-6 py-4 text-white font-medium focus:border-indigo-500 focus:bg-indigo-900/10 focus:shadow-[0_0_20px_rgba(99,102,241,0.15)] focus:outline-none transition-all duration-300"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2 relative transition-colors">
                                <label className="text-xs font-bold font-heading text-slate-400 uppercase tracking-[0.2em] ml-2 mb-1 transition-colors">{t('contact.form.subject')}</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder={t('contact.form.placeholder_subject')}
                                    className="bg-transparent border-2 border-white/10 rounded-2xl px-6 py-4 text-white font-medium focus:border-emerald-500 focus:bg-emerald-900/10 focus:shadow-[0_0_20px_rgba(16,185,129,0.15)] focus:outline-none transition-all duration-300"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2 relative transition-colors">
                                <label className="text-xs font-bold font-heading text-slate-400 uppercase tracking-[0.2em] ml-2 mb-1 transition-colors">{t('contact.form.message')}</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder={t('contact.form.placeholder_message')}
                                    className="bg-transparent border-2 border-white/10 rounded-2xl px-6 py-4 text-white font-medium focus:border-cyan-500 focus:bg-cyan-900/10 focus:shadow-[0_0_20px_rgba(6,182,212,0.15)] focus:outline-none transition-all duration-300 resize-none"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="mt-8 py-5 bg-gradient-indigo-cyan hover:scale-[1.02] active:scale-[0.98] text-white font-bold font-heading uppercase tracking-widest text-sm rounded-2xl transition-all flex items-center justify-center gap-3 shadow-[0_10px_40px_-10px_rgba(6,182,212,0.5)] border border-white/10 overflow-hidden relative group/btn"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                                <Send size={20} className="relative z-10" />
                                <span className="relative z-10">{t('contact.form.submit')}</span>
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>

            {/* Massive Background elements for depth */}
            <div className="absolute top-[30%] right-[-10%] w-[800px] h-[800px] bg-cyan-600/10 blur-[150px] rounded-full -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute bottom-[-10%] left-[-20%] w-[900px] h-[900px] bg-indigo-600/10 blur-[150px] rounded-full -z-10 pointer-events-none"></div>
            
            {/* Grid Pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik00MCAwaC00MHY0MGg0MFYweiIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMCAwaDQwdjQwaC00MFYweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-20 -z-10 mix-blend-overlay"></div>
        </div>
    );
};

export default Contact;
