import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        const nextLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(nextLang);
    };

    const navLinks = [
        { name: t('navbar.home'), path: '/' },
        { name: t('navbar.download'), path: '/download' },
        { name: t('navbar.contact'), path: '/contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 top-2' : 'py-6 bg-transparent'}`}>
            <div className={`container flex justify-between items-center transition-all duration-500 ${scrolled ? 'glass-premium py-3 px-8 rounded-full max-w-[95%] border-white/10 shadow-2xl' : ''}`}>
                <Link to="/" className="text-2xl font-bold font-heading tracking-tight text-white flex items-center gap-3 hover-lift">
                    <div className="w-10 h-10 rounded-xl bg-gradient-indigo-cyan flex items-center justify-center shadow-lg shadow-indigo-500/30">
                        <span className="text-white font-bold text-xl">E</span>
                    </div>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Etraydi</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-2 glass px-2 py-1.5 rounded-full">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`relative px-4 py-2 text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-white/10 rounded-full -z-10"
                                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.name}</span>
                                </Link>
                            )
                        })}
                    </div>

                    {/* Language Switcher */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest hover-lift"
                    >
                        <Globe size={14} className="text-cyan-400" />
                        <span>{i18n.language === 'en' ? 'AR' : 'EN'}</span>
                    </button>

                    <Link
                        to="/download"
                        className="flex items-center gap-2 px-6 py-2.5 bg-gradient-indigo-cyan hover:opacity-90 hover-lift text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-cyan-500/25"
                    >
                        <Download size={16} />
                        <span>{t('navbar.download_app')}</span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="text-slate-300 text-[10px] font-black uppercase"
                    >
                        {i18n.language === 'en' ? 'AR' : 'EN'}
                    </button>
                    <button className="text-white p-2 glass rounded-full" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="md:hidden absolute top-full left-4 right-4 mt-4 glass-premium p-6 flex flex-col gap-4 origin-top"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-lg font-medium border-b border-white/5 pb-3 transition-colors ${location.pathname === link.path ? 'text-cyan-400' : 'text-slate-300 hover:text-white'}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/download"
                            className="flex items-center justify-center gap-2 px-5 py-4 bg-gradient-indigo-cyan text-white font-bold rounded-xl mt-2 shadow-lg shadow-indigo-500/20"
                            onClick={() => setIsOpen(false)}
                        >
                            <Download size={18} />
                            <span>{t('navbar.download_app')}</span>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
