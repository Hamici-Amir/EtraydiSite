import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Tablet, BarChart3, ShieldCheck, BookOpen, LineChart, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const iconMap = {
    'BarChart3': <BarChart3 className="text-blue-500" />,
    'Tablet': <Tablet className="text-blue-500" />,
    'LineChart': <LineChart className="text-blue-500" />,
    'ShieldCheck': <ShieldCheck className="text-blue-500" />,
    'BookOpen': <BookOpen className="text-blue-500" />,
    'ChevronDown': <ChevronDown className="text-blue-500 rotate-180" />
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
                    fetch('/api/features'),
                    fetch('/api/faqs')
                ]);
                const featuresData = await featuresRes.json();
                const faqsData = await faqsRes.json();

                setFeatures(featuresData.map(f => ({
                    ...f,
                    icon: iconMap[f.icon_type] || <ShieldCheck className="text-blue-500" />
                })));
                setFaqs(faqsData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
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
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center pt-32 md:pt-40 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/30 blur-[120px] rounded-full animate-pulse"></div>
                    <div className="absolute bottom-[20%] right-[-5%] w-[35%] h-[35%] bg-blue-400/20 blur-[100px] rounded-full"></div>
                </div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="container grid md:grid-cols-2 gap-16 items-center"
                >
                    <motion.div variants={itemVariants} className="flex flex-col gap-8">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                            {t('hero.title_part1')} <br />
                            <span className="gradient-text opacity-90">{t('hero.title_part2')}</span>
                        </h1>
                        <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                            {t('hero.description')}
                        </p>
                        <div className="flex flex-wrap gap-4 mt-6">
                            <Link to="/download" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 hover-lift text-white font-bold rounded-xl transition-all flex items-center gap-2 shadow-xl shadow-blue-900/20">
                                <Download size={20} />
                                {t('hero.download_apk')}
                            </Link>
                            <div className="px-8 py-4 glass text-slate-400 font-bold rounded-xl cursor-not-allowed opacity-50 border-white/5">
                                {t('hero.coming_soon')}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden md:block"
                    >
                        <div className="w-[300px] h-[600px] mx-auto glass rounded-[40px] border-[8px] border-white/10 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/20 to-transparent flex items-center justify-center p-8 text-center">
                                <div className="flex flex-col gap-4">
                                    <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto flex items-center justify-center text-3xl font-bold">E</div>
                                    <div className="space-y-2">
                                        <div className="h-4 w-32 bg-white/10 rounded mx-auto"></div>
                                        <div className="h-24 w-full bg-white/5 rounded-xl"></div>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="h-16 bg-white/5 rounded-lg"></div>
                                            <div className="h-16 bg-white/5 rounded-lg"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full"></div>
                    </motion.div>
                </motion.div>
            </section>

            {/* What is Etraydi? */}
            <section className="section bg-secondary/50 relative overflow-hidden">
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="max-w-3xl mx-auto text-center flex flex-col gap-8"
                    >
                        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white tracking-tight">{t('what_is.title')}</motion.h2>
                        <motion.p variants={itemVariants} className="text-slate-400 text-lg leading-relaxed opacity-80">
                            {t('what_is.description')}
                        </motion.p>
                        <motion.div variants={itemVariants} className="flex justify-center gap-12 mt-4">
                            <div className="flex flex-col items-center gap-3">
                                <span className="text-4xl font-bold text-blue-500 tracking-tighter">{t('what_is.stat_money')}</span>
                                <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">{t('what_is.stat_money_label')}</span>
                            </div>
                            <div className="w-[1px] h-16 bg-white/10"></div>
                            <div className="flex flex-col items-center gap-3">
                                <span className="text-4xl font-bold text-blue-500 tracking-tighter">{t('what_is.stat_focus')}</span>
                                <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">{t('what_is.stat_focus_label')}</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">{t('features.title')}</h2>
                        <p className="text-slate-300">{t('features.subtitle')}</p>
                    </div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="glass-premium light-sweep p-8 flex flex-col gap-6 group hover-lift border-white/5"
                            >
                                <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-600/20 transition-all duration-500">
                                    {React.cloneElement(feature.icon, { size: 24, strokeWidth: 1.5 })}
                                </div>
                                <h3 className="text-xl font-bold text-white tracking-tight">{feature.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* App Screenshots */}
            <section className="section bg-secondary/30 overflow-hidden">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">{t('screenshots.title')}</h2>
                        <p className="text-slate-300">{t('screenshots.subtitle')}</p>
                    </div>
                    <div className="flex overflow-x-auto gap-8 pb-8 no-scrollbar">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="min-w-[280px] h-[580px] glass rounded-[32px] border-4 border-white/5 shadow-xl relative overflow-hidden flex-shrink-0">
                                <div className="absolute inset-0 bg-blue-900/10 flex items-center justify-center">
                                    <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">Screenshot {i}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section overflow-hidden">
                <div className="container max-w-4xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white text-center mb-16">{t('faq.title')}</motion.h2>
                        <div className="flex flex-col gap-6">
                            {faqs.map((faq, idx) => (
                                <motion.div key={idx} variants={itemVariants} className="glass-premium p-8 hover-lift light-sweep border-white/5">
                                    <h4 className="text-white font-bold mb-3">{faq.q}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed opacity-80">{faq.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] -z-10 rounded-full"></div>
                <div className="container flex flex-col items-center gap-8">
                    <h2 className="text-4xl font-bold text-white">{t('cta.title')}</h2>
                    <p className="text-slate-300 max-w-xl">
                        {t('cta.description')}
                    </p>
                    <Link to="/download" className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all flex items-center gap-2 text-lg shadow-2xl shadow-blue-900/50">
                        <Download size={24} />
                        {t('cta.button')}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
