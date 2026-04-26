import React from 'react';
import { motion } from 'framer-motion';
import { Download, Info, ShieldAlert, CheckCircle2, Smartphone, AlertTriangle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const DownloadPage = () => {
    const { t } = useTranslation();
    const versionInfo = {
        version: '1.0.4',
        releaseDate: t('download.latest') + ': April 26, 2026',
        fileSize: '85.1 MB',
        checksum: 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2',
        notes: [
            t('download.improved', 'Improved chart rendering performance'),
            t('download.bug_fixes', 'Fixed minor localization bugs'),
            t('download.new_indicators', 'Added 5 new technical indicators')
        ]
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0, scale: 1,
            transition: { type: 'spring', stiffness: 100, damping: 20 }
        }
    };

    return (
        <div className="pt-32 pb-20 min-h-screen relative overflow-hidden">
            <div className="container max-w-5xl relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div
                        variants={itemVariants}
                        className="text-center mb-16"
                    >
                        <div className="badge badge-cyan mb-6">Available Now</div>
                        <h1 className="text-5xl md:text-6xl font-bold font-heading text-white mb-6 tracking-tight">{t('download.title', 'Download Educate')}</h1>
                        <p className="text-slate-400 text-lg opacity-90 max-w-2xl mx-auto font-medium">{t('download.description', 'Get the ultimate trading simulation experience on your device.')}</p>
                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Download Card */}
                        <motion.div
                            variants={itemVariants}
                            className="lg:col-span-2 glass-premium p-10 flex flex-col gap-8 rounded-[2.5rem] border-white/10 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                                <div>
                                    <h3 className="text-3xl font-bold font-heading text-white mb-2 tracking-tight">{t('download.card_title', 'Educate for Android')}</h3>
                                    <span className="text-cyan-400 font-bold text-sm tracking-wide">{t('download.latest')}: v{versionInfo.version}</span>
                                </div>
                                <div className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">{t('download.stable', 'Stable Build')}</div>
                            </div>

                            <div className="grid grid-cols-2 gap-6 py-6 border-y border-white/5">
                                <div>
                                    <span className="text-xs text-slate-500 block uppercase mb-2 font-bold tracking-widest">Release Date</span>
                                    <span className="text-white font-medium">{versionInfo.releaseDate.split(': ')[1] || 'April 26, 2026'}</span>
                                </div>
                                <div>
                                    <span className="text-xs text-slate-500 block uppercase mb-2 font-bold tracking-widest">File Size</span>
                                    <span className="text-white font-medium">{versionInfo.fileSize}</span>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-white font-bold font-heading text-lg mb-4 flex items-center gap-2">
                                    <Info size={18} className="text-indigo-400" />
                                    {t('download.changelog', 'What\'s New')}
                                </h3>
                                <ul className="flex flex-col gap-3">
                                    {versionInfo.notes.map((note, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                                            <CheckCircle2 size={16} className="mt-0.5 text-cyan-400 flex-shrink-0" />
                                            {note}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-4 pt-6 border-t border-white/5">
                                <a 
                                    href="/base.apk" 
                                    download="Educate_App.apk"
                                    className="w-full py-5 bg-gradient-indigo-cyan hover:scale-[1.02] active:scale-[0.98] text-white font-bold text-lg rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-cyan-500/20"
                                >
                                    <Download size={24} />
                                    <span>{t('cta.button')}</span>
                                </a>
                                <p className="text-[10px] text-slate-500 text-center mt-4 font-mono truncate opacity-60 px-4">
                                    SHA256: {versionInfo.checksum}
                                </p>
                            </div>
                        </motion.div>

                        {/* Info/Requirements */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col gap-6"
                        >
                            <div className="glass p-8 rounded-[2.5rem] border-white/5">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                                        <AlertTriangle className="text-red-400" size={20} />
                                    </div>
                                    <h4 className="text-lg font-bold text-white uppercase tracking-wider text-sm">{t('download.important')}</h4>
                                </div>
                                <p className="text-sm text-slate-400 leading-relaxed font-medium">
                                    {t('download.important_desc', 'For your security, only download Educate from this official website. You may need to enable "Install from Unknown Sources" in your device settings.')}
                                </p>
                            </div>

                            <div className="glass-premium p-8 rounded-[2rem] border-white/10">
                                <h3 className="text-white font-bold font-heading text-lg mb-6 tracking-tight">{t('download.requirements', 'Requirements')}</h3>
                                <ul className="flex flex-col gap-4">
                                    <li className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                                        <span className="text-slate-400 font-medium">Android OS</span>
                                        <span className="text-white font-bold bg-white/5 px-2 py-1 rounded">8.0+</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                                        <span className="text-slate-400 font-medium">RAM</span>
                                        <span className="text-white font-bold bg-white/5 px-2 py-1 rounded">2 GB+</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm">
                                        <span className="text-slate-400 font-medium">Storage</span>
                                        <span className="text-white font-bold bg-white/5 px-2 py-1 rounded">100 MB</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Background elements */}
            <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full -z-10 animate-pulse"></div>
            <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full -z-10"></div>
        </div>
    );
};

export default DownloadPage;
