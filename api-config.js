// API Configuration with Your Token
const API_CONFIG = {
    TOKEN: 'c2bbeda2e00b46dab07029e596a15222',
    API_BASE: 'https://api.mkpro-predictz.com/v1',
    ENDPOINTS: {
        PREDICTIONS: '/predictions',
        TRENDING: '/trending',
        MATCHES: '/matches',
        STATS: '/stats',
        EXPERTS: '/experts'
    }
};

// Helper function to make API requests
async function fetchAPI(endpoint, options = {}) {
    const url = `${API_CONFIG.API_BASE}${endpoint}`;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_CONFIG.TOKEN}`,
        ...options.headers
    };

    try {
        const response = await fetch(url, {
            ...options,
            headers
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('API Request Failed:', error);
        throw error;
    }
}

// Get all predictions
async function getPredictions(filter = 'all') {
    try {
        const response = await fetchAPI(`${API_CONFIG.ENDPOINTS.PREDICTIONS}?filter=${filter}`);
        return response.data || [];
    } catch (error) {
        console.error('Failed to fetch predictions:', error);
        return [];
    }
}

// Get trending predictions
async function getTrending() {
    try {
        const response = await fetchAPI(API_CONFIG.ENDPOINTS.TRENDING);
        return response.data || [];
    } catch (error) {
        console.error('Failed to fetch trending:', error);
        return [];
    }
}

// Get match details
async function getMatch(matchId) {
    try {
        const response = await fetchAPI(`${API_CONFIG.ENDPOINTS.MATCHES}/${matchId}`);
        return response.data || null;
    } catch (error) {
        console.error('Failed to fetch match:', error);
        return null;
    }
}

// Get performance stats
async function getStats() {
    try {
        const response = await fetchAPI(API_CONFIG.ENDPOINTS.STATS);
        return response.data || {};
    } catch (error) {
        console.error('Failed to fetch stats:', error);
        return {};
    }
}

// Get experts list
async function getExperts() {
    try {
        const response = await fetchAPI(API_CONFIG.ENDPOINTS.EXPERTS);
        return response.data || [];
    } catch (error) {
        console.error('Failed to fetch experts:', error);
        return [];
    }
}

console.log('%c🔐 API Configuration Loaded with Token', 'color: #4caf50; font-size: 12px; font-weight: bold;');
