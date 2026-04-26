import { Link } from 'react-router-dom';
import { Mail, Shield, FileText, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="py-20 relative overflow-hidden bg-base border-t border-white/5">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
            
            {/* Background Orbs */}
            <div className="absolute top-[-10%] right-[-5%] w-[30%] h-[30%] bg-indigo-600/10 blur-[120px] rounded-full point-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-cyan-600/10 blur-[120px] rounded-full point-events-none"></div>

            <div className="container relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="flex flex-col gap-6">
                        <Link to="/" className="text-2xl font-bold font-heading text-white flex items-center gap-3 w-fit hover-lift">
                            <div className="w-8 h-8 rounded-xl bg-gradient-indigo-cyan flex items-center justify-center text-sm shadow-lg shadow-indigo-500/20">
                                <span className="font-bold">E</span>
                            </div>
                            <span>Educate</span>
                        </Link>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            {t('footer.description')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-white font-bold font-heading text-lg">{t('footer.quick_links')}</h4>
                        <div className="flex flex-col gap-3">
                            <Link to="/" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors w-fit">{t('navbar.home')}</Link>
                            <Link to="/download" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors w-fit">{t('navbar.download_app')}</Link>
                            <Link to="/contact" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors w-fit">{t('footer.contact')}</Link>
                        </div>
                    </div>

                    {/* Legal */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-white font-bold font-heading text-lg">{t('footer.legal')}</h4>
                        <div className="flex flex-col gap-3">
                            <Link to="/privacy" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 w-fit">
                                <Shield size={16} className="text-indigo-400" /> {t('footer.privacy')}
                            </Link>
                            <Link to="/terms" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 w-fit">
                                <FileText size={16} className="text-indigo-400" /> {t('footer.terms')}
                            </Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-white font-bold font-heading text-lg">Connect</h4>
                        <div className="flex flex-col gap-4">
                            <a href="mailto:support@educate.com" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-3 w-fit bg-white/5 px-4 py-2 rounded-lg border border-white/5 hover:border-cyan-500/30">
                                <Mail size={16} className="text-cyan-400" /> support@educate.com
                            </a>
                            <div className="flex gap-4 mt-2">
                                <div className="w-12 h-12 rounded-xl glass-premium flex items-center justify-center text-slate-400 hover:text-white hover-lift transition-all cursor-pointer border-white/10 shadow-lg group">
                                    <span className="text-sm font-black uppercase group-hover:text-cyan-400 transition-colors">X</span>
                                </div>
                                <div className="w-12 h-12 rounded-xl glass-premium flex items-center justify-center text-slate-400 hover:text-white hover-lift transition-all cursor-pointer border-white/10 shadow-lg group">
                                    <span className="text-sm font-black uppercase group-hover:text-indigo-400 transition-colors">IN</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="pt-12 border-t border-white/5 text-center flex flex-col items-center">
                    <div className="glass-premium p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] mb-12 max-w-4xl border-white/10 shadow-2xl relative overflow-hidden group hover:border-red-500/20 transition-colors duration-500">
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <h5 className="text-red-400/90 font-black mb-6 uppercase tracking-[0.25em] text-xs font-heading">{t('footer.disclosure_title')}</h5>
                        <p className="text-xs text-slate-400 leading-loose font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                            {t('footer.disclosure_body')}
                        </p>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl opacity-60 hover:opacity-100 transition-opacity gap-4">
                        <p className="text-sm text-slate-400 font-medium">
                            &copy; {new Date().getFullYear()} Educate.
                        </p>
                        <p className="text-sm text-slate-400 font-medium">
                            {t('footer.rights')}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
