// DOM Elements
const searchBtn = document.getElementById('searchBtn');
const searchBar = document.getElementById('searchBar');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const filterBtns = document.querySelectorAll('.filter-btn');
const predictionsTable = document.getElementById('predictionsTable');
const historyTable = document.getElementById('historyTable');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    renderPredictions('all');
    renderHistory();
    setupChart();
    setupSmoothScroll();
});

// Event Listeners
function initializeEventListeners() {
    // Search toggle
    searchBtn.addEventListener('click', () => {
        searchBar.classList.toggle('hidden');
    });

    // Menu toggle
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            renderPredictions(filter);
        });
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Render Predictions
function renderPredictions(filter) {
    predictionsTable.innerHTML = '';
    
    const filtered = predictions.filter(pred => {
        if (filter === 'all') return true;
        if (filter === 'high') return pred.risk === 'high';
        if (filter === 'low') return pred.risk === 'low';
        if (filter === 'vip') return pred.vip;
        return true;
    });

    filtered.forEach(pred => {
        const row = document.createElement('div');
        row.className = 'prediction-row';
        
        const tipClass = getTipClass(pred.prediction);
        
        row.innerHTML = `
            <div class="team-info">
                <span class="team-info-logo">⚽</span>
                <span class="team-info-name">${pred.home}</span>
            </div>
            <div class="team-info">
                <span class="team-info-logo">⚽</span>
                <span class="team-info-name">${pred.away}</span>
            </div>
            <div class="odds">${pred.odds}</div>
            <div class="confidence">
                <div class="confidence-bar">
                    <div class="confidence-fill" style="width: ${pred.confidence}%;"></div>
                </div>
                <span>${pred.confidence}%</span>
            </div>
            <div>
                <div class="prediction-tip ${tipClass}">
                    ${pred.vip ? '👑 ' : ''}${pred.prediction}
                </div>
            </div>
        `;
        
        predictionsTable.appendChild(row);
    });
}

// Get tip class based on prediction
function getTipClass(prediction) {
    if (prediction === 'HOME WIN') return 'tip-home';
    if (prediction === 'DRAW') return 'tip-draw';
    if (prediction === 'AWAY WIN') return 'tip-away';
    return 'tip-vip';
}

// Render History
function renderHistory() {
    historyTable.innerHTML = '';
    
    history.forEach(item => {
        const row = document.createElement('tr');
        const isWin = item.result.includes('WIN');
        
        row.innerHTML = `
            <td>${item.date}</td>
            <td>${item.match}</td>
            <td><span class="prediction-tip ${item.prediction === 'HOME WIN' ? 'tip-home' : 'tip-draw'}">${item.prediction}</span></td>
            <td><span class="${isWin ? 'result-win' : 'result-loss'}">${item.result}</span></td>
            <td>${item.odds}</td>
        `;
        
        historyTable.appendChild(row);
    });
}

// Chart Setup
function setupChart() {
    const ctx = document.getElementById('performanceChart');
    if (!ctx) return;

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
                pointRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: '#999'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    }
                },
                x: {
                    ticks: {
                        color: '#999'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    }
                }
            }
        }
    });
}

// Smooth Scroll
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.prediction-row, .expert-card, .plan-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.5s ease';
    observer.observe(el);
});

// Follow button functionality
document.querySelectorAll('.follow-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.textContent = this.textContent === 'Follow' ? 'Following' : 'Follow';
        this.style.opacity = this.textContent === 'Following' ? '0.7' : '1';
    });
});

// CTA Button
document.querySelectorAll('.cta-button').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Welcome to MKPro Predictz PRO! Starting your free trial...');
    });
});

// Plan buttons
document.querySelectorAll('.plan-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const planName = this.closest('.plan-card').querySelector('h3').textContent;
        alert(`You selected ${planName} plan!`);
    });
});

// Action buttons in predictions
document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('View details for this prediction');
    });
});

// Notification button
document.getElementById('notificationBtn').addEventListener('click', () => {
    alert('You have 3 new predictions available!\n\n✓ Manchester United vs Arsenal - HOME WIN (78%)\n✓ Bayern Munich vs Dortmund - HOME WIN (85%)\n✓ PSG vs Marseille - HOME WIN (88%)');
});

// Login button
document.querySelector('.login-btn').addEventListener('click', () => {
    alert('Login functionality would be implemented here');
});
