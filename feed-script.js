// Feed Management
const REFRESH_INTERVAL = 5 * 60 * 1000; // 5 minutes
let currentFilter = 'all';
let refreshTimer = null;

// DOM Elements
const searchBtn = document.getElementById('searchBtn');
const searchBar = document.getElementById('searchBar');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const filterTabs = document.querySelectorAll('.filter-tab');
const feedContainer = document.getElementById('feedContainer');
const refreshFeed = document.getElementById('refreshFeed');
const searchInput = document.getElementById('searchInput');
const notificationBtn = document.getElementById('notificationBtn');
const notificationCount = document.getElementById('notificationCount');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    loadFeed('all');
    loadTrending();
    setupChart();
    setupSmoothScroll();
    setupAutoRefresh();
});

// Event Listeners Setup
function initializeEventListeners() {
    // Search toggle
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            searchBar.classList.toggle('hidden');
        });
    }

    // Menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Filter tabs
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const filter = tab.getAttribute('data-filter');
            currentFilter = filter;
            loadFeed(filter);
        });
    });

    // Refresh button
    if (refreshFeed) {
        refreshFeed.addEventListener('click', () => {
            refreshFeed.classList.add('loading');
            loadFeed(currentFilter).finally(() => {
                refreshFeed.classList.remove('loading');
            });
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Search input
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            if (query.length > 0) {
                searchPredictions(query);
            } else {
                loadFeed(currentFilter);
            }
        });
    }

    // Notification button
    if (notificationBtn) {
        notificationBtn.addEventListener('click', () => {
            alert('📬 YOU HAVE 3 NEW PREDICTIONS!\n\n✓ Manchester United vs Arsenal - HOME WIN (85%)\n✓ Bayern Munich vs Dortmund - HOME WIN (88%)\n✓ PSG vs Marseille - HOME WIN (92%)');
        });
    }

    // Login button
    document.querySelector('.login-btn').addEventListener('click', () => {
        alert('🔐 Login functionality would be implemented here');
    });

    // CTA Buttons
    document.querySelectorAll('.cta-button').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.textContent.includes('Trial')) {
                e.preventDefault();
                document.querySelector('#vip').scrollIntoView({behavior: 'smooth'});
            }
        });
    });

    // Plan buttons
    document.querySelectorAll('.plan-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const planName = this.closest('.plan-card').querySelector('h3').textContent;
            alert(`🎉 Thank you for choosing ${planName} plan!\n\nYou will be redirected to payment...`);
        });
    });

    // Follow buttons
    document.querySelectorAll('.follow-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.textContent = this.textContent === 'Follow' ? 'Following ✓' : 'Follow';
            this.style.opacity = this.textContent === 'Following ✓' ? '0.7' : '1';
        });
    });
}

// Load Feed
async function loadFeed(filter) {
    try {
        feedContainer.innerHTML = `
            <div class="loading">
                <i class="fas fa-spinner"></i> Loading predictions...
            </div>
        `;

        // Simulate API call - replace with real API when available
        const predictions = await simulateFetchPredictions(filter);

        if (predictions.length === 0) {
            feedContainer.innerHTML = `
                <div class="loading">
                    <i class="fas fa-inbox"></i> No predictions available
                </div>
            `;
            return;
        }

        feedContainer.innerHTML = '';
        predictions.forEach((pred, index) => {
            const card = createPredictionCard(pred);
            feedContainer.appendChild(card);
            setTimeout(() => {
                card.style.animationDelay = `${index * 0.1}s`;
            }, 0);
        });
    } catch (error) {
        console.error('Error loading feed:', error);
        feedContainer.innerHTML = `
            <div class="loading">
                <i class="fas fa-exclamation-circle"></i> Error loading predictions
            </div>
        `;
    }
}

// Create Prediction Card
function createPredictionCard(pred) {
    const card = document.createElement('div');
    card.className = 'prediction-card';
    
    const tipClass = getTipClass(pred.prediction);
    const confidence = pred.confidence || 0;
    
    card.innerHTML = `
        <div class="card-header">
            <span class="card-league">${pred.league || 'Ligue 1'}</span>
            <span class="card-time">${pred.time || '21:30'}</span>
        </div>

        <div class="card-match">
            <div class="team">
                <div class="team-logo">${pred.homeEmoji || '🇫🇷'}</div>
                <div class="team-name">${pred.home}</div>
                <div class="team-form">${pred.homeForm || 'W-W-D'}</div>
            </div>
            <div class="vs">VS</div>
            <div class="team">
                <div class="team-logo">${pred.awayEmoji || '🇫🇷'}</div>
                <div class="team-name">${pred.away}</div>
                <div class="team-form">${pred.awayForm || 'W-D-L'}</div>
            </div>
        </div>

        <div class="card-analysis">
            <div class="analysis-row">
                <span class="analysis-label">AI Confidence:</span>
                <span class="analysis-value">${confidence}%</span>
            </div>
            <div class="analysis-row">
                <span class="analysis-label">Expected Odds:</span>
                <span class="analysis-value">${pred.odds || '1.85'}</span>
            </div>
            <div class="analysis-row">
                <span class="analysis-label">Risk Level:</span>
                <span class="analysis-value" style="color: ${pred.risk === 'high' ? '#ff6b35' : '#4caf50'}">
                    ${(pred.risk || 'low').toUpperCase()}
                </span>
            </div>
        </div>

        <div class="prediction-tip ${tipClass}">
            ${pred.vip ? '👑 VIP: ' : ''}${pred.prediction || 'HOME WIN'}
        </div>

        <div class="card-footer">
            <div class="odds-display">${pred.odds || '1.85'}</div>
            <div class="confidence-display">
                <div class="confidence-text">Confidence</div>
                <div class="confidence-bar-small">
                    <div class="confidence-fill-small" style="width: ${confidence}%;"></div>
                </div>
            </div>
        </div>
    `;

    // Add click event for detailed view
    card.addEventListener('click', () => {
        showPredictionDetail(pred);
    });

    return card;
}

// Get tip class based on prediction
function getTipClass(prediction) {
    if (prediction === 'HOME WIN') return 'tip-home';
    if (prediction === 'DRAW') return 'tip-draw';
    if (prediction === 'AWAY WIN') return 'tip-away';
    return 'tip-vip';
}

// Search Predictions
function searchPredictions(query) {
    const cards = document.querySelectorAll('.prediction-card');
    let found = 0;

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query)) {
            card.style.display = '';
            found++;
        } else {
            card.style.display = 'none';
        }
    });

    console.log(`Found ${found} matches for "${query}"`);
}

// Show prediction details (modal)
function showPredictionDetail(pred) {
    alert(`📊 DETAILED ANALYSIS\n\n${pred.home} vs ${pred.away}\nLeague: ${pred.league}\n\nPrediction: ${pred.prediction}\nConfidence: ${pred.confidence}%\nOdds: ${pred.odds}\n\nThis would show detailed analysis...`);
}

// Load Trending
async function loadTrending() {
    try {
        // Simulate API call - replace with real API when available
        const trending = await simulateFetchTrending();
        const trendingGrid = document.getElementById('trendingGrid');

        if (trendingGrid && trending.length > 0) {
            trendingGrid.innerHTML = '';
            trending.forEach((item, index) => {
                const card = document.createElement('div');
                card.className = 'trending-card';
                card.innerHTML = `
                    <div class="trending-rank">#${index + 1}</div>
                    <div class="trending-name">${item.name}</div>
                    <div class="trending-stat">
                        <i class="fas fa-arrow-${item.change > 0 ? 'up' : 'down'}"></i>
                        ${Math.abs(item.change)}% Win Rate
                    </div>
                `;
                trendingGrid.appendChild(card);
            });
        }
    } catch (error) {
        console.error('Error loading trending:', error);
    }
}

// Setup Chart
function setupChart() {
    const ctx = document.getElementById('performanceChart');
    if (!ctx) return;

    try {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
                datasets: [{
                    label: 'Win Rate %',
                    data: [82, 85, 83, 87, 89],
                    borderColor: '#ff9800',
                    backgroundColor: 'rgba(255, 152, 0, 0.1)',
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#ff9800',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            color: '#999',
                            font: { size: 11 }
                        },
                        grid: { color: 'rgba(255, 255, 255, 0.05)' }
                    },
                    x: {
                        ticks: {
                            color: '#999',
                            font: { size: 11 }
                        },
                        grid: { color: 'rgba(255, 255, 255, 0.05)' }
                    }
                }
            }
        });
    } catch (e) {
        console.log('Chart.js not loaded');
    }
}

// Setup Smooth Scroll
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Setup Auto Refresh
function setupAutoRefresh() {
    refreshTimer = setInterval(() => {
        if (document.hidden) return; // Don't refresh if tab is not active
        loadFeed(currentFilter);
    }, REFRESH_INTERVAL);
}

// Simulate API Calls (Replace with real API calls)
async function simulateFetchPredictions(filter) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const predictions = [
        {
            home: 'Saint Etienne',
            away: 'Nice',
            league: 'Ligue 1',
            homeEmoji: '🇫🇷',
            awayEmoji: '🇫🇷',
            homeForm: 'W-W-D',
            awayForm: 'W-D-L',
            prediction: 'HOME WIN',
            odds: 1.85,
            confidence: 78,
            risk: 'low',
            time: '21:30',
            vip: false
        },
        {
            home: 'Manchester United',
            away: 'Arsenal',
            league: 'Premier League',
            homeEmoji: '🇬🇧',
            awayEmoji: '🇬🇧',
            homeForm: 'W-W-W',
            awayForm: 'D-W-L',
            prediction: 'DRAW',
            odds: 3.20,
            confidence: 65,
            risk: 'high',
            time: '20:00',
            vip: true
        },
        {
            home: 'Real Madrid',
            away: 'Barcelona',
            league: 'La Liga',
            homeEmoji: '🇪🇸',
            awayEmoji: '🇪🇸',
            homeForm: 'W-W-W',
            awayForm: 'W-W-L',
            prediction: 'HOME WIN',
            odds: 2.10,
            confidence: 82,
            risk: 'low',
            time: '22:00',
            vip: false
        },
        {
            home: 'Bayern Munich',
            away: 'Borussia Dortmund',
            league: 'Bundesliga',
            homeEmoji: '🇩🇪',
            awayEmoji: '🇩🇪',
            homeForm: 'W-W-D',
            awayForm: 'D-D-L',
            prediction: 'HOME WIN',
            odds: 1.95,
            confidence: 88,
            risk: 'low',
            time: '19:30',
            vip: false
        },
        {
            home: 'AC Milan',
            away: 'Juventus',
            league: 'Serie A',
            homeEmoji: '🇮🇹',
            awayEmoji: '🇮🇹',
            homeForm: 'W-L-D',
            awayForm: 'W-W-W',
            prediction: 'AWAY WIN',
            odds: 2.35,
            confidence: 72,
            risk: 'high',
            time: '20:45',
            vip: true
        },
        {
            home: 'Paris Saint-Germain',
            away: 'Olympique Marseille',
            league: 'Ligue 1',
            homeEmoji: '🇫🇷',
            awayEmoji: '🇫🇷',
            homeForm: 'W-W-W',
            awayForm: 'D-L-L',
            prediction: 'HOME WIN',
            odds: 1.65,
            confidence: 92,
            risk: 'low',
            time: '21:00',
            vip: false
        }
    ];

    // Filter based on filter type
    if (filter === 'high') {
        return predictions.filter(p => p.confidence >= 80);
    } else if (filter === 'live') {
        return predictions.slice(0, 3); // Simulate live matches
    } else if (filter === 'vip') {
        return predictions.filter(p => p.vip);
    }

    return predictions;
}

async function simulateFetchTrending() {
    await new Promise(resolve => setTimeout(resolve, 300));

    return [
        { name: 'Premier League Matches', change: 15 },
        { name: 'La Liga Predictions', change: 12 },
        { name: 'Bundesliga Bets', change: 8 },
        { name: 'Series A Tips', change: -5 },
        { name: 'Ligue 1 Analysis', change: 10 }
    ];
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (refreshTimer) {
        clearInterval(refreshTimer);
    }
});

// Log initialization
console.log('%c🚀 Feed System Loaded Successfully!', 'color: #ff9800; font-size: 16px; font-weight: bold;');
console.log('%c📱 Modern card-based feed design activated', 'color: #4caf50; font-size: 12px;');
console.log('%c🔄 Auto-refresh enabled (every 5 minutes)', 'color: #4caf50; font-size: 12px;');
console.log('%c🔐 API Token: c2bbeda2e00b46dab07029e596a15222', 'color: #4caf50; font-size: 12px;');
