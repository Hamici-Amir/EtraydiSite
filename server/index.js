const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Mock data for features
const features = [
    {
        title: 'Portfolio Tracking',
        description: 'Manage your virtual assets and track your performance in real-time.',
        icon_type: 'BarChart3'
    },
    {
        title: 'Market Simulation',
        description: 'Trade in a realistic environment with live market data without any risk.',
        icon_type: 'Tablet'
    },
    {
        title: 'Deep Insights',
        description: 'Get detailed analysis of your trading patterns and improve your strategy.',
        icon_type: 'LineChart'
    },
    {
        title: 'Advanced Analytics',
        description: 'Professional-grade tools to help you understand market trends.',
        icon_type: 'ShieldCheck'
    },
    {
        title: 'Education Center',
        description: 'Learn the fundamentals of trading with our comprehensive guides.',
        icon_type: 'BookOpen'
    },
    {
        title: 'Leaderboards',
        description: 'Compete with other traders and climb the ranks in our community.',
        icon_type: 'ChevronDown'
    }
];

// Mock data for FAQs
const faqs = [
    {
        q: 'Is Educate really free?',
        a: 'Yes, the simulation and all educational content are completely free for all users.'
    },
    {
        q: 'Can I withdraw my virtual profits?',
        a: 'No, all funds in Educate are virtual and for educational purposes only.'
    },
    {
        q: 'How accurate is the market data?',
        a: 'We use high-quality data providers to ensure the simulation reflects real market movements as closely as possible.'
    }
];

app.get('/api/features', (req, res) => {
    res.json(features);
});

app.get('/api/faqs', (req, res) => {
    res.json(faqs);
});

app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log(`Received contact form submission:`, { name, email, subject, message });
    // In a real app, you would save this to a database or send an email
    res.status(200).json({ status: 'success', message: 'Message received' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
