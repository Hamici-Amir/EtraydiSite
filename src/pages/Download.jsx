import React from 'react';
import { motion } from 'framer-motion';
import { Download, Info, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const DownloadPage = () => {
    const { t } = useTranslation();
    const versionInfo = {
        version: '1.2.4',
        releaseDate: t('download.latest') + ': February 15, 2026',
        fileSize: '24.5 MB',
        checksum: 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2',
        notes: [
            t('download.improved'),
            t('download.bug_fixes'),
            t('download.new_indicators')
        ]
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
            <div className="container max-w-4xl relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div
                        variants={itemVariants}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">{t('download.title')}</h1>
                        <p className="text-slate-400 text-lg opacity-80">{t('download.description')}</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Main Download Card */}
                        <motion.div
                            variants={itemVariants}
                            className="md:col-span-2 glass-premium light-sweep p-10 flex flex-col gap-8 rounded-3xl"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">{t('download.card_title')}</h2>
                                    <span className="text-blue-500 font-bold text-sm tracking-wide">{t('download.latest')}: v{versionInfo.version}</span>
                                </div>
                                <div className="bg-blue-600/10 text-blue-400 border border-blue-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-500/10">{t('download.stable')}</div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/5">
                                <div>
                                    <span className="text-xs text-slate-500 block uppercase mb-1">{t('download.latest')}</span>
                                    <span className="text-white font-medium">{versionInfo.releaseDate}</span>
                                </div>
                                <div>
                                    <span className="text-xs text-slate-500 block uppercase mb-1">File Size</span>
                                    <span className="text-white font-medium">{versionInfo.fileSize}</span>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                                    <Info size={16} className="text-blue-500" />
                                    {t('download.changelog')}
                                </h3>
                                <ul className="flex flex-col gap-2">
                                    {versionInfo.notes.map((note, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                                            <CheckCircle2 size={14} className="mt-1 text-blue-500 flex-shrink-0" />
                                            {note}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-6">
                                <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 hover-lift text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-900/20">
                                    <Download size={20} />
                                    {t('navbar.download_app')}
                                </button>
                                <p className="text-[10px] text-slate-500 text-center mt-4 font-mono truncate opacity-60">
                                    SHA256: {versionInfo.checksum}
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col gap-6"
                        >
                            <div className="glass-premium p-8 border-amber-500/10 rounded-3xl">
                                <h3 className="text-white font-bold mb-5 flex items-center gap-3">
                                    <ShieldAlert size={20} className="text-amber-500" />
                                    {t('download.important')}
                                </h3>
                                <p className="text-xs text-slate-400 leading-relaxed opacity-70">
                                    {t('download.important_desc')}
                                </p>
                            </div>

                            <div className="glass-premium p-8 rounded-3xl">
                                <h3 className="text-white font-bold mb-5 tracking-tight text-lg">{t('download.requirements')}</h3>
                                <ul className="flex flex-col gap-4">
                                    <li className="flex justify-between text-[11px] border-b border-white/5 pb-2">
                                        <span className="text-slate-500 font-medium font-mono">Android OS</span>
                                        <span className="text-white font-bold">8.0 or higher</span>
                                    </li>
                                    <li className="flex justify-between text-[11px] border-b border-white/5 pb-2">
                                        <span className="text-slate-500 font-medium font-mono">RAM</span>
                                        <span className="text-white font-bold">2 GB+</span>
                                    </li>
                                    <li className="flex justify-between text-[11px]">
                                        <span className="text-slate-500 font-medium font-mono">Storage</span>
                                        <span className="text-white font-bold">100 MB available</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10 animate-pulse"></div>
        </div>
    );
};

export default DownloadPage;
