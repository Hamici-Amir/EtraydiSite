import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, Globe, Twitter, Linkedin } from 'lucide-react';
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
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <div className="pt-32 pb-20 min-h-screen relative overflow-hidden">
            <div className="container relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="grid md:grid-cols-2 gap-20 items-start"
                >
                    {/* Contact Info */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col gap-10"
                    >
                        <div>
                            <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">{t('contact.title')}</h1>
                            <p className="text-slate-400 text-lg opacity-80 leading-relaxed max-w-md">
                                {t('contact.description')}
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 glass flex items-center justify-center text-blue-500 rounded-xl">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Email Us</h4>
                                    <p className="text-sm text-slate-400">support@etraydi.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 glass flex items-center justify-center text-blue-500 rounded-xl">
                                    <MessageSquare size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Live Support</h4>
                                    <p className="text-sm text-slate-400">Available Monday — Friday, 9am — 6pm.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/5">
                            <h4 className="text-white font-semibold mb-4">Follow Our Updates</h4>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 glass flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 transition-all rounded-lg">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="w-10 h-10 glass flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 transition-all rounded-lg">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="w-10 h-10 glass flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 transition-all rounded-lg">
                                    <Globe size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="glass-premium p-10 rounded-[32px] light-sweep relative border-white/5"
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2.5">
                                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">{t('contact.form.name')}</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={t('contact.form.placeholder_name')}
                                    className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white focus:border-blue-500/50 focus:bg-blue-600/5 focus:outline-none transition-all duration-300"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2.5">
                                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">{t('contact.form.email')}</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={t('contact.form.placeholder_email')}
                                    className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white focus:border-blue-500/50 focus:bg-blue-600/5 focus:outline-none transition-all duration-300"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2.5">
                                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">{t('contact.form.subject')}</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder={t('contact.form.placeholder_subject')}
                                    className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white focus:border-blue-500/50 focus:bg-blue-600/5 focus:outline-none transition-all duration-300"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2.5">
                                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">{t('contact.form.message')}</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder={t('contact.form.placeholder_message')}
                                    className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white focus:border-blue-500/50 focus:bg-blue-600/5 focus:outline-none transition-all duration-300 resize-none"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="mt-4 py-5 bg-blue-600 hover:bg-blue-700 hover-lift text-white font-black uppercase tracking-widest text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-2xl shadow-blue-500/20"
                            >
                                <Send size={18} />
                                {t('contact.form.submit')}
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>

            {/* Background elements */}
            <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/[0.03] blur-[150px] rounded-full -z-10"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-400/[0.02] blur-[120px] rounded-full -z-10"></div>
        </div>
    );
};

export default Contact;
