import { Link } from 'react-router-dom';
import { Mail, Shield, FileText, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="py-12 bg-secondary border-t border-white/5">
            <div className="container">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <Link to="/" className="text-xl font-bold text-white flex items-center gap-2">
                            <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-sm">E</div>
                            <span>Etraydi</span>
                        </Link>
                        <p className="text-sm text-slate-300">
                            {t('footer.description')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-semibold">{t('footer.quick_links')}</h4>
                        <div className="flex flex-col gap-2">
                            <Link to="/" className="text-sm text-slate-300 hover:text-white transition-colors">{t('navbar.home')}</Link>
                            <Link to="/download" className="text-sm text-slate-300 hover:text-white transition-colors">{t('navbar.download_app')}</Link>
                            <Link to="/contact" className="text-sm text-slate-300 hover:text-white transition-colors">{t('footer.contact')}</Link>
                        </div>
                    </div>

                    {/* Legal */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-semibold">{t('footer.legal')}</h4>
                        <div className="flex flex-col gap-2">
                            <Link to="/privacy" className="text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-2">
                                <Shield size={14} /> {t('footer.privacy')}
                            </Link>
                            <Link to="/terms" className="text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-2">
                                <FileText size={14} /> {t('footer.terms')}
                            </Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-semibold">Connect</h4>
                        <div className="flex flex-col gap-2">
                            <a href="mailto:support@etraydi.com" className="text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-2">
                                <Mail size={14} /> support@etraydi.com
                            </a>
                            <div className="flex gap-5 mt-4">
                                {/* Social Placeholders */}
                                <div className="w-10 h-10 rounded-xl glass-premium flex items-center justify-center text-slate-400 hover:text-white hover-lift transition-all cursor-pointer border-white/5 light-sweep">
                                    <span className="text-xs font-black uppercase">X</span>
                                </div>
                                <div className="w-10 h-10 rounded-xl glass-premium flex items-center justify-center text-slate-400 hover:text-white hover-lift transition-all cursor-pointer border-white/5 light-sweep">
                                    <span className="text-xs font-black uppercase">IN</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Disclaimer - REQUIRED */}
                <div className="pt-8 border-t border-white/5 text-center">
                    <div className="glass-premium p-10 rounded-[32px] mb-12 inline-block max-w-4xl border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
                        <h5 className="text-red-400/80 font-black mb-4 uppercase tracking-[0.3em] text-[10px]">{t('footer.disclosure_title')}</h5>
                        <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                            {t('footer.disclosure_body')}
                        </p>
                    </div>
                    <p className="text-xs text-slate-500">
                        &copy; {new Date().getFullYear()} Etraydi. {t('footer.rights')}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
