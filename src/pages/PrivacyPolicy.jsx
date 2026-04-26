import { motion as m } from 'framer-motion';

const PrivacyPolicy = () => {
    const sections = [
        {
            title: 'Information We Collect',
            content: 'We collect information you provide directly to us, such as when you create an account (email, name) and technical data like your device identifier (phone model, OS version). We also collect app usage analytics to improve your educational experience.'
        },
        {
            title: 'How We Use Data',
            content: 'Data is used to provide and maintain the trading simulation service, notify you about changes to our app, and monitor usage trends to improve functionality and educational content.'
        },
        {
            title: 'Data Protection',
            content: 'We implement industry-standard security measures to protect your information from unauthorized access, alteration, or destruction.'
        },
        {
            title: 'User Rights',
            content: 'You have the right to access, update, or delete your personal information. You can do this within the app settings or by contacting our support team.'
        },
        {
            title: 'Account Deletion',
            content: 'Users can request account deletion at any time through the in-app support menu or by emailing support@educate.com. Upon request, all personal data will be permanently removed from our systems within 30 days.'
        },
        {
            title: 'Contact Information',
            content: 'If you have any questions about this Privacy Policy, please contact us at support@educate.com.'
        }
    ];

    return (
        <div className="pt-32 pb-20 min-h-screen">
            <div className="container max-w-3xl">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass p-8 md:p-12"
                >
                    <h1 className="text-3xl font-bold text-white mb-8 border-b border-white/5 pb-4">Privacy Policy</h1>
                    <p className="text-sm text-slate-400 mb-8 italic">Last Updated: February 20, 2026</p>

                    <div className="flex flex-col gap-10">
                        {sections.map((section, idx) => (
                            <div key={idx}>
                                <h2 className="text-xl font-bold text-white mb-3">{section.title}</h2>
                                <p className="text-slate-300 text-sm leading-relaxed">{section.content}</p>
                            </div>
                        ))}
                    </div>
                </m.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
