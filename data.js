// Predictions Data
const predictions = [
    {
        home: "Manchester United",
        away: "Arsenal",
        prediction: "HOME WIN",
        odds: 2.45,
        confidence: 85,
        risk: "low",
        vip: false,
        league: "Premier League"
    },
    {
        home: "Bayern Munich",
        away: "Dortmund",
        prediction: "HOME WIN",
        odds: 1.95,
        confidence: 88,
        risk: "low",
        vip: true,
        league: "Bundesliga"
    },
    {
        home: "PSG",
        away: "Marseille",
        prediction: "HOME WIN",
        odds: 1.72,
        confidence: 92,
        risk: "low",
        vip: true,
        league: "Ligue 1"
    },
    {
        home: "Real Madrid",
        away: "Barcelona",
        prediction: "DRAW",
        odds: 3.25,
        confidence: 72,
        risk: "high",
        vip: false,
        league: "La Liga"
    },
    {
        home: "Liverpool",
        away: "Chelsea",
        prediction: "HOME WIN",
        odds: 2.15,
        confidence: 79,
        risk: "low",
        vip: false,
        league: "Premier League"
    },
    {
        home: "Juventus",
        away: "AC Milan",
        prediction: "AWAY WIN",
        odds: 2.80,
        confidence: 75,
        risk: "high",
        vip: false,
        league: "Serie A"
    },
    {
        home: "Tottenham",
        away: "Manchester City",
        prediction: "AWAY WIN",
        odds: 1.88,
        confidence: 86,
        risk: "low",
        vip: true,
        league: "Premier League"
    },
    {
        home: "Atletico Madrid",
        away: "Valencia",
        prediction: "HOME WIN",
        odds: 2.05,
        confidence: 81,
        risk: "low",
        vip: false,
        league: "La Liga"
    }
];

// History Data
const history = [
    {
        date: "2026-05-24",
        match: "Manchester Utd vs Arsenal",
        prediction: "HOME WIN",
        result: "WIN",
        odds: 2.45
    },
    {
        date: "2026-05-24",
        match: "Bayern Munich vs Dortmund",
        prediction: "HOME WIN",
        result: "WIN",
        odds: 1.95
    },
    {
        date: "2026-05-23",
        match: "PSG vs Marseille",
        prediction: "HOME WIN",
        result: "WIN",
        odds: 1.72
    },
    {
        date: "2026-05-23",
        match: "Liverpool vs Chelsea",
        prediction: "HOME WIN",
        result: "WIN",
        odds: 2.15
    },
    {
        date: "2026-05-22",
        match: "Juventus vs AC Milan",
        prediction: "DRAW",
        result: "WIN",
        odds: 2.50
    },
    {
        date: "2026-05-22",
        match: "Real Madrid vs Barcelona",
        prediction: "HOME WIN",
        result: "WIN",
        odds: 2.35
    },
    {
        date: "2026-05-21",
        match: "Tottenham vs Man City",
        prediction: "AWAY WIN",
        result: "WIN",
        odds: 1.88
    },
    {
        date: "2026-05-21",
        match: "Atletico Madrid vs Valencia",
        prediction: "HOME WIN",
        result: "WIN",
        odds: 2.05
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
        predictions: 124
    }
};

// League Logos
const leagueLogo = {
    "Premier League": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "La Liga": "🇪🇸",
    "Serie A": "🇮🇹",
    "Ligue 1": "🇫🇷",
    "Bundesliga": "🇩🇪"
};
