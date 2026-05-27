// Sync matches from localStorage to data.js format
// Run this in console: syncMatchesToDataFile()

function syncMatchesToDataFile() {
    const stored = localStorage.getItem('todayMatches');
    if (!stored) {
        console.log('No matches found in localStorage');
        return;
    }

    const matches = JSON.parse(stored);
    
    // Create data.js content
    const dataJsContent = `// Predictions Data
const predictions = ${JSON.stringify(matches, null, 4)};

// History Data
const history = [
    {
        date: "2026-05-27",
        match: "Sample Match",
        prediction: "HOME WIN",
        result: "PENDING",
        odds: 2.25
    }
];

// Expert Data
const experts = [
    {
        id: 1,
        name: "Dr. Marcus Johnson",
        role: "Football Analytics Expert",
        avatar: "👨‍💼",
        winRate: 87,
        predictions: 2450,
        bio: "15+ years in sports analytics and machine learning",
        following: false
    },
    {
        id: 2,
        name: "Sarah Williams",
        role: "Live Match Strategist",
        avatar: "👩‍💼",
        winRate: 84,
        predictions: 1890,
        bio: "Former pro analyst for top European leagues",
        following: false
    },
    {
        id: 3,
        name: "Alex Chen",
        role: "Data Scientist",
        avatar: "👨‍🔬",
        winRate: 91,
        predictions: 3120,
        bio: "AI specialist building predictive models",
        following: false
    }
];

// Subscription Plans
const plans = [
    {
        name: "Free",
        price: 0,
        features: [
            "5 Daily Predictions",
            "Basic Analysis",
            "No Expert Tips",
            "No Live Alerts",
            "No Advanced Analytics"
        ],
        popular: false
    },
    {
        name: "Premium",
        price: 9.99,
        features: [
            "Unlimited Predictions",
            "Full AI Analysis",
            "Expert Tips",
            "Live Alerts",
            "No Advanced Analytics"
        ],
        popular: true
    },
    {
        name: "Elite",
        price: 29.99,
        features: [
            "Unlimited Everything",
            "Premium AI Analysis",
            "VIP Expert Tips",
            "Priority Alerts",
            "Advanced Analytics",
            "1-on-1 Coaching"
        ],
        popular: false
    }
];

// Performance Analytics
const performance = {
    monthly: [82, 85, 83, 87, 89],
    leagues: {
        "Premier League": 89,
        "La Liga": 84,
        "Serie A": 82,
        "Ligue 1": 87,
        "Bundesliga": 86
    },
    stats: {
        winRate: 85,
        members: 50000,
        streak: "12-0",
        accuracy: 89,
        avgOdds: 2.34,
        predictions: ${matches.length}
    }
};

// League Logos
const leagueLogo = {
    "Premier League": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "La Liga": "🇪🇸",
    "Serie A": "🇮🇹",
    "Ligue 1": "🇫🇷",
    "Bundesliga": "🇩🇪",
    "International - Friendlies": "🌍"
};
`;

    console.log('Generated data.js content:');
    console.log(dataJsContent);
    
    // Copy to clipboard
    navigator.clipboard.writeText(dataJsContent).then(() => {
        console.log('✓ Copied to clipboard! Paste into data.js');
    });

    return dataJsContent;
}

// Auto-load matches from localStorage on page load
function loadMatchesFromStorage() {
    const stored = localStorage.getItem('todayMatches');
    if (stored) {
        window.predictions = JSON.parse(stored);
        console.log('✓ Loaded ' + window.predictions.length + ' matches from storage');
    }
}

// On page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadMatchesFromStorage);
} else {
    loadMatchesFromStorage();
}
