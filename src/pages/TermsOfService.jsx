import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
    const sections = [
        {
            title: '1. Educational Purpose Only',
            content: 'Etraydi is a trading simulator designed strictly for educational and entertainment purposes. All assets, balances, and trading activities within the application use virtual funds and are not linked to any real-world financial systems.'
        },
        {
            title: '2. No Financial Services',
            content: 'We do not provide banking, brokerage, investment advisory, or any other financial services. We do not accept deposits, facilitate withdrawals, or manage real-money portfolios.'
        },
        {
            title: '3. No Guarantees',
            content: 'Trading simulation results do not guarantee future performance in real markets. Financial markets are inherently risky, and Etraydi is not responsible for any real-world financial losses incurred through external trading activities.'
        },
        {
            title: '4. User Responsibility',
            content: 'Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.'
        },
        {
            title: '5. Limitation of Liability',
            content: 'Etraydi and its developers shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the application.'
        },
        {
            title: '6. Account Termination Rights',
            content: 'We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent or abusive behavior within the simulation environment.'
        }
    ];

    return (
        <div className="pt-32 pb-20 min-h-screen">
            <div className="container max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass p-8 md:p-12"
                >
                    <h1 className="text-3xl font-bold text-white mb-8 border-b border-white/5 pb-4">Terms of Service</h1>
                    <p className="text-sm text-slate-400 mb-8 italic">Last Updated: February 20, 2026</p>

                    <div className="flex flex-col gap-10">
                        {sections.map((section, idx) => (
                            <div key={idx}>
                                <h2 className="text-xl font-bold text-white mb-3">{section.title}</h2>
                                <p className="text-slate-300 text-sm leading-relaxed">{section.content}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TermsOfService;
