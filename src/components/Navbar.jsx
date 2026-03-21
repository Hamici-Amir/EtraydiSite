import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 top-4' : 'py-6 bg-transparent'}`}>
            <div className={`container flex justify-between items-center transition-all duration-500 ${scrolled ? 'glass-premium py-3 px-8 rounded-full max-w-[95%] border-white/10 shadow-2xl' : ''}`}>
                <Link to="/" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">E</div>
                    <span>Etraydi</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`nav-link text-xs font-semibold tracking-wide transition-all ${location.pathname === link.path ? 'text-blue-500 opacity-100' : 'text-slate-300'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Language Switcher */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
                    >
                        <Globe size={14} className="text-blue-500" />
                        <span>{i18n.language === 'en' ? 'AR' : 'EN'}</span>
                    </button>

                    <Link
                        to="/download"
                        className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 hover-lift text-white text-xs font-bold rounded-full transition-all shadow-lg shadow-blue-900/20"
                    >
                        <Download size={14} />
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
                    <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-4 right-4 mt-2 glass p-6 animate-fade-in flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-lg font-medium text-slate-300 border-b border-white/5 pb-2"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/download"
                        className="flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg"
                        onClick={() => setIsOpen(false)}
                    >
                        <Download size={18} />
                        <span>{t('navbar.download_app')}</span>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
