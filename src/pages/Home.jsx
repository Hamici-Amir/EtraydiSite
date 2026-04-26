import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Tablet, BarChart3, ShieldCheck, BookOpen, LineChart, ChevronDown, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const iconMap = {
    'BarChart3': <BarChart3 className="text-cyan-400" />,
    'Tablet': <Tablet className="text-indigo-400" />,
    'LineChart': <LineChart className="text-cyan-400" />,
    'ShieldCheck': <ShieldCheck className="text-emerald-400" />,
    'BookOpen': <BookOpen className="text-indigo-400" />,
    'ChevronDown': <ChevronDown className="text-cyan-400 rotate-180" />
};

const Home = () => {
    const { t } = useTranslation();
    const [features, setFeatures] = useState([]);
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [featuresRes, faqsRes] = await Promise.all([
                    fetch('/api/features').catch(() => ({ json: () => [] })),
                    fetch('/api/faqs').catch(() => ({ json: () => [] }))
                ]);
                const featuresData = await featuresRes.json();
                const faqsData = await faqsRes.json();

                if (featuresData.length) {
                    setFeatures(featuresData.map(f => ({
                        ...f,
                        icon: iconMap[f.icon_type] || <ShieldCheck className="text-cyan-400" />
                    })));
                } else {
                    // Fallback mock data if API fails
                    setFeatures([
                        { title: t('features.market_data'), description: t('features.market_data_desc'), icon: <LineChart className="text-cyan-400" /> },
                        { title: t('features.portfolio'), description: t('features.portfolio_desc'), icon: <BarChart3 className="text-indigo-400" /> },
                        { title: t('features.education'), description: t('features.education_desc'), icon: <BookOpen className="text-emerald-400" /> }
                    ]);
                }

                if (faqsData.length) {
                    setFaqs(faqsData);
                } else {
                    setFaqs([
                        { q: t('faq.q1'), a: t('faq.a1') },
                        { q: t('faq.q2'), a: t('faq.a2') }
                    ]);
                }

            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [t]);

    const springTransition = { type: 'spring', stiffness: 100, damping: 20 };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 30 },
        visible: {
            opacity: 1, scale: 1, y: 0,
            transition: springTransition
        }
    };

    return (
        <div className="flex flex-col relative">
            {/* Dark gradient blur orbs for overall page background */}
            <div className="fixed top-[20%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none -z-20"></div>
            <div className="fixed bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none -z-20"></div>

            {/* Hero Section */}
            <section className="min-h-screen flex items-center pt-32 md:pt-40 pb-20 relative overflow-hidden">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="container grid lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10"
                >
                    <motion.div variants={itemVariants} className="flex flex-col gap-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                        <div className="badge badge-cyan w-fit mx-auto lg:mx-0">
                            <Sparkles size={14} className="mr-2" />
                            Next Generation Platform
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight text-white leading-[1.1]">
                            {t('hero.title_part1')} <br />
                            <span className="gradient-text pb-2 inline-block">{t('hero.title_part2')}</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium">
                            {t('hero.description')}
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-4 justify-center lg:justify-start">
                            <Link to="/download" className="px-8 py-4 bg-gradient-indigo-cyan hover:opacity-90 hover-lift text-white font-bold rounded-xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-cyan-500/20 text-lg">
                                <Download size={20} />
                                {t('hero.download_apk')}
                            </Link>
                            <div className="px-8 py-4 glass text-slate-400 font-bold rounded-xl cursor-not-allowed opacity-60 border-white/5 flex items-center justify-center text-lg shadow-inner">
                                {t('hero.coming_soon')}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, rotateY: -5, rotateX: 5 }}
                        transition={springTransition}
                        style={{ perspective: 1000 }}
                        className="relative hidden lg:block mx-auto"
                    >
                        {/* 3D Glass Device Mockup */}
                        <div className="w-[340px] h-[680px] glass-premium rounded-[3rem] border-8 border-white/10 shadow-2xl relative overflow-hidden transform-gpu backdrop-blur-3xl bg-secondary/80">
                            {/* Device Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-white/10 rounded-b-3xl backdrop-blur-md z-20"></div>
                            
                            {/* Inner Screen UI */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-secondary to-cyan-900/40 flex flex-col p-6 pt-12 overflow-hidden">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-indigo-cyan flex items-center justify-center shadow-lg">
                                            <span className="text-white font-bold text-lg font-heading">E</span>
                                        </div>
                                        <div className="h-4 w-24 bg-white/10 rounded-full"></div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-white/10"></div>
                                </div>
                                
                                {/* Fake Chart */}
                                <div className="glass p-4 rounded-3xl mb-6 shadow-lg border-white/5">
                                    <div className="h-4 w-32 bg-white/20 rounded-full mb-4"></div>
                                    <div className="h-8 w-48 bg-cyan-400/20 rounded-full mb-8"></div>
                                    
                                    <div className="h-32 w-full flex items-end gap-2 px-2">
                                        {[40, 60, 45, 80, 55, 90, 75].map((h, i) => (
                                            <motion.div 
                                                key={i}
                                                initial={{ height: 0 }}
                                                animate={{ height: `${h}%` }}
                                                transition={{ duration: 1, delay: 0.5 + (i * 0.1), ...springTransition }}
                                                className={`flex-1 rounded-t-md ${i === 5 ? 'bg-cyan-400' : 'bg-white/10'}`}
                                            ></motion.div>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Fake List */}
                                <div className="space-y-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl">
                                            <div className="w-12 h-12 rounded-full bg-white/10"></div>
                                            <div className="flex-1 space-y-2">
                                                <div className="h-3 w-full bg-white/20 rounded-full"></div>
                                                <div className="h-3 w-2/3 bg-white/10 rounded-full"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        {/* Glow Behind Mockup */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 blur-[100px] rounded-full"></div>
                    </motion.div>
                </motion.div>
            </section>

            {/* What is Etraydi? */}
            <section className="section bg-white/5 relative border-y border-white/5 backdrop-blur-sm">
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="max-w-4xl mx-auto text-center flex flex-col gap-10"
                    >
                        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
                            {t('what_is.title')}
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-slate-400 text-xl font-medium leading-relaxed">
                            {t('what_is.description')}
                        </motion.p>
                        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 mt-8">
                            <div className="flex flex-col items-center gap-4 hover-lift">
                                <span className="text-6xl font-bold font-heading gradient-text-emerald tracking-tighter drop-shadow-lg">{t('what_is.stat_money', '0$')}</span>
                                <span className="text-xs text-slate-400 uppercase tracking-[0.3em] font-bold">{t('what_is.stat_money_label', 'Risk')}</span>
                            </div>
                            <div className="hidden md:block w-[1px] h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                            <div className="flex flex-col items-center gap-4 hover-lift">
                                <span className="text-6xl font-bold font-heading gradient-text tracking-tighter drop-shadow-lg">{t('what_is.stat_focus', '100%')}</span>
                                <span className="text-xs text-slate-400 uppercase tracking-[0.3em] font-bold">{t('what_is.stat_focus_label', 'Experience')}</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="section relative">
                <div className="absolute top-1/2 left-0 w-full h-[500px] bg-indigo-500/5 blur-[150px] -z-10 rounded-full"></div>
                <div className="container">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <div className="badge badge-cyan mb-6">Advanced Tooling</div>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6 tracking-tight">{t('features.title')}</h2>
                        <p className="text-xl text-slate-400 font-medium">{t('features.subtitle')}</p>
                    </div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                transition={springTransition}
                                className="glass-premium light-sweep p-10 flex flex-col gap-6 group border-white/10 h-full relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-indigo-500/10 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-500 border border-white/5">
                                    {React.cloneElement(feature.icon, { size: 28, strokeWidth: 1.5 })}
                                </div>
                                <h3 className="text-2xl font-bold font-heading text-white tracking-tight">{feature.title}</h3>
                                <p className="text-slate-400 text-base leading-relaxed font-medium group-hover:text-slate-300 transition-colors">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* App Screenshots Highlights */}
            <section className="section bg-secondary/80 border-t border-white/5 relative">
                <div className="container overflow-hidden">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold font-heading text-white mb-6">{t('screenshots.title', 'Beautiful Inside and Out')}</h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">{t('screenshots.subtitle', 'A premium experience crafted for modern traders.')}</p>
                    </div>
                    
                    <div className="flex overflow-x-auto gap-8 pb-12 pt-4 no-scrollbar -mx-4 px-4 Snap-x">
                        {[1, 2, 3, 4].map((i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -15, scale: 1.02 }}
                                transition={springTransition}
                                className="min-w-[300px] md:min-w-[340px] h-[650px] glass-premium rounded-[2.5rem] border-4 border-white/5 shadow-2xl relative overflow-hidden flex-shrink-0 snap-center"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-cyan-900/20 flex flex-col items-center justify-center p-8 text-center group">
                                    <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/10">
                                        <Sparkles size={32} className="text-cyan-400" />
                                    </div>
                                    <span className="text-white font-bold font-heading text-xl mb-2">Preview {i}</span>
                                    <span className="text-slate-400 text-sm font-medium">Coming soon in app</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section relative">
                <div className="container max-w-4xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants} className="text-center mb-16">
                            <h2 className="text-4xl font-bold font-heading text-white mb-4">{t('faq.title')}</h2>
                            <p className="text-slate-400 text-lg">Everything you need to know about Etraydi.</p>
                        </motion.div>
                        
                        <div className="flex flex-col gap-6">
                            {faqs.map((faq, idx) => (
                                <motion.div 
                                    key={idx} 
                                    variants={itemVariants} 
                                    whileHover={{ x: 10 }}
                                    transition={springTransition}
                                    className="glass-premium p-8 md:p-10 hover-lift border-white/5 group border-l-4 border-l-transparent hover:border-l-cyan-400"
                                >
                                    <h4 className="text-white font-bold font-heading text-xl mb-4 pr-8 text-balance">{faq.q}</h4>
                                    <p className="text-slate-400 text-base leading-relaxed font-medium group-hover:text-slate-300 transition-colors">{faq.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section text-center relative overflow-hidden my-12 hidden md:block">
               <div className="container">
                    <div className="glass-premium rounded-[3rem] p-16 md:p-24 relative overflow-hidden border-white/10 shadow-2xl">
                        {/* Huge animated glow inside CTA card */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/20 via-cyan-500/20 to-emerald-500/20 blur-[100px] -z-10 rounded-full animate-pulse opacity-50"></div>
                        
                        <div className="flex flex-col items-center gap-10 relative z-10">
                            <h2 className="text-5xl md:text-6xl font-bold font-heading text-white tracking-tight">{t('cta.title')}</h2>
                            <p className="text-xl text-slate-300 max-w-2xl font-medium leading-relaxed">
                                {t('cta.description')}
                            </p>
                            <Link to="/download" className="px-12 py-6 bg-gradient-indigo-cyan hover:scale-105 text-white font-bold rounded-full transition-all flex items-center justify-center gap-3 text-xl shadow-2xl shadow-cyan-500/30 w-full sm:w-auto">
                                <Download size={24} />
                                {t('cta.button')}
                            </Link>
                        </div>
                    </div>
               </div>
            </section>
        </div>
    );
};

export default Home;
