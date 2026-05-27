<!DOCTYPE html>
<html lang="en">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>MK Pro Predictions</title>

<!-- GOOGLE ADSENSE -->
<meta name="google-adsense-account" content="ca-pub-XXXXXXXXXXXXXXXX">

<script async
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
crossorigin="anonymous"></script>

<link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial, sans-serif;
}

body{
background:#09051f;
color:white;
overflow-x:hidden;
}

/* HEADER */

header{
background:#160b46;
padding:15px 20px;
display:flex;
justify-content:space-between;
align-items:center;
position:sticky;
top:0;
z-index:1000;
}

.logo{
font-size:24px;
font-weight:bold;
color:#ffb400;
}

.menu i{
font-size:30px;
cursor:pointer;
}

.right-icons{
display:flex;
align-items:center;
gap:15px;
}

.right-icons i{
font-size:24px;
}

/* SIDE MENU */

.side-menu{
position:fixed;
top:0;
left:-280px;
width:280px;
height:100%;
background:#140a42;
z-index:2000;
padding:25px;
transition:0.4s;
box-shadow:5px 0 20px rgba(0,0,0,0.5);
overflow-y:auto;
}

.side-menu.active{
left:0;
}

.side-menu h2{
color:#ffb400;
margin-bottom:25px;
font-size:28px;
}

.side-menu ul{
list-style:none;
}

.side-menu ul li{
padding:16px;
margin-bottom:12px;
background:#1f115e;
border-radius:12px;
cursor:pointer;
font-size:18px;
transition:0.3s;
}

.side-menu ul li:hover{
background:#ffb400;
color:#000;
}

.side-menu ul li i{
margin-right:10px;
}

.close-btn{
text-align:right;
margin-bottom:20px;
}

.close-btn i{
font-size:28px;
cursor:pointer;
}

.overlay{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.6);
display:none;
z-index:1500;
}

.overlay.active{
display:block;
}

/* HERO */

.hero{
padding:40px 20px;
text-align:center;
background:linear-gradient(to bottom,#1c0d5f,#09051f);
}

.badge{
background:#ff8c00;
display:inline-block;
padding:10px 25px;
border-radius:50px;
font-weight:bold;
margin-bottom:20px;
}

.hero h1{
font-size:38px;
margin-bottom:15px;
line-height:1.3;
}

.hero p{
font-size:18px;
color:#b9b9d3;
margin-bottom:40px;
}

.match-card{
background:rgba(255,255,255,0.05);
backdrop-filter:blur(10px);
border-radius:20px;
padding:30px 20px;
display:flex;
justify-content:space-between;
align-items:center;
margin-top:20px;
}

.team{
width:35%;
text-align:center;
}

.team img{
width:80px;
height:80px;
object-fit:contain;
margin-bottom:10px;
}

.team h2{
font-size:28px;
}

.middle{
width:30%;
text-align:center;
}

.middle h3{
font-size:45px;
color:#ffb400;
}

.middle p{
margin-top:10px;
color:#ccc;
}

/* SECTIONS */

.section{
padding:20px 15px;
}

.section-header{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:20px;
}

.section-header h2{
font-size:28px;
}

.btn{
border:2px solid #ffb400;
padding:12px 18px;
border-radius:10px;
color:#ffb400;
font-weight:bold;
text-decoration:none;
}

/* TABLE */

.table{
background:#12093d;
border-radius:20px;
overflow:hidden;
}

.table-header,
.row{
display:grid;
grid-template-columns:2fr 2fr 1fr 1fr;
padding:18px;
align-items:center;
}

.table-header{
background:#1b1155;
font-weight:bold;
color:#ffb400;
}

.row{
border-top:1px solid rgba(255,255,255,0.08);
}

.tip{
padding:8px 10px;
border-radius:8px;
display:inline-block;
font-size:14px;
font-weight:bold;
text-align:center;
background:#0c7a35;
}

/* ADS */

.ads-box{
margin:25px 15px;
background:#1c1454;
padding:20px;
border-radius:20px;
text-align:center;
}

/* FOOTER */

footer{
text-align:center;
padding:30px;
color:#aaa;
}

/* MOBILE */

@media(max-width:768px){

.hero h1{
font-size:28px;
}

.match-card{
flex-direction:column;
gap:20px;
}

.team,
.middle{
width:100%;
}

.table-header,
.row{
font-size:14px;
padding:12px;
}

}

</style>

</head>

<body>

<!-- SIDE MENU -->

<div id="sideMenu" class="side-menu">

<div class="close-btn" onclick="closeMenu()">
<i class="fas fa-times"></i>
</div>

<h2>MK PRO MENU</h2>

<ul>

<li onclick="showCategory('daily')">
<i class="fas fa-fire"></i> Daily Tips
</li>

<li onclick="showCategory('btts')">
<i class="fas fa-futbol"></i> BTTS Tips
</li>

<li onclick="showCategory('over')">
<i class="fas fa-chart-line"></i> Over 2.5
</li>

<li onclick="showCategory('correct')">
<i class="fas fa-bullseye"></i> Correct Score
</li>

<li>
<i class="fas fa-crown"></i> VIP Predictions
</li>

<li>
<i class="fas fa-star"></i> Sure Odds
</li>

</ul>

</div>

<!-- OVERLAY -->

<div id="overlay" class="overlay" onclick="closeMenu()"></div>

<!-- HEADER -->

<header>

<div class="menu" onclick="openMenu()">
<i class="fas fa-bars"></i>
</div>

<div class="logo">
MK PRO PREDICTIONS
</div>

<div class="right-icons">
<i class="fas fa-cog"></i>
</div>

</header>

<!-- HERO -->

<section class="hero">

<div class="badge">
FOOTBALL MATCH OF THE DAY
</div>

<h1>
FREE FOOTBALL PREDICTIONS FROM MK PRO EXPERTS
</h1>

<p>
Beat the bookies today with MK Pro Predictions VIP betting tips
</p>

<div class="match-card">

<div class="team">
<img src="https://crests.football-data.org/524.png">
<h2>PSG</h2>
<p>France</p>
</div>

<div class="middle">
<h3>VS</h3>
<p>Ligue 1</p>
</div>

<div class="team">
<img src="https://crests.football-data.org/516.png">
<h2>Marseille</h2>
<p>France</p>
</div>

</div>

</section>

<!-- ADS -->

<div class="ads-box">

<ins class="adsbygoogle"
style="display:block"
data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
data-ad-slot="1234567890"
data-ad-format="auto"
data-full-width-responsive="true"></ins>

<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

</div>

<!-- PREDICTIONS SECTION -->

<section class="section">

<div class="section-header">

<h2 id="categoryTitle">
DAILY TIPS
</h2>

<a href="#" class="btn">
SEE ALL
</a>

</div>

<div class="table">

<div class="table-header">
<div>HOME TEAM</div>
<div>AWAY TEAM</div>
<div>ODDS</div>
<div>TIP</div>
</div>

<div id="matches"></div>

</div>

</section>

<!-- ADS -->

<div class="ads-box">

<ins class="adsbygoogle"
style="display:block"
data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
data-ad-slot="1234567890"
data-ad-format="auto"
data-full-width-responsive="true"></ins>

<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

</div>

<footer>
© 2026 MK Pro Predictions - All Rights Reserved
</footer>

<script>

/* API TOKEN */

const API_TOKEN = "c2bbeda2e00b46dab07029e596a15222";

/* MENU */

function openMenu(){
document.getElementById("sideMenu").classList.add("active");
document.getElementById("overlay").classList.add("active");
}

function closeMenu(){
document.getElementById("sideMenu").classList.remove("active");
document.getElementById("overlay").classList.remove("active");
}

/* CATEGORY */

function showCategory(type){

closeMenu();

const title = document.getElementById("categoryTitle");
const container = document.getElementById("matches");

container.innerHTML = "";

let tipsArray = [];

if(type === "daily"){
title.innerHTML = "DAILY TIPS";
tipsArray = ["HOME WIN","AWAY WIN","DRAW"];
}

if(type === "btts"){
title.innerHTML = "BTTS TIPS";
tipsArray = ["BTTS YES","BTTS NO"];
}

if(type === "over"){
title.innerHTML = "OVER 2.5";
tipsArray = ["OVER 1.5","OVER 2.5","OVER 3.5"];
}

if(type === "correct"){
title.innerHTML = "CORRECT SCORE";
tipsArray = ["1-0","2-1","2-0","3-1","2-2"];
}

fetch("https://api.football-data.org/v4/matches",{
headers:{
"X-Auth-Token":API_TOKEN
}
})
.then(response => response.json())
.then(data => {

data.matches.slice(0,10).forEach(match => {

const home = match.homeTeam.name;
const away = match.awayTeam.name;

const odd = (Math.random() * (3.20 - 1.30) + 1.30).toFixed(2);

const randomTip =
tipsArray[Math.floor(Math.random()*tipsArray.length)];

container.innerHTML += `

<div class="row">

<div>${home}</div>

<div>${away}</div>

<div>${odd}</div>

<div>
<span class="tip">
${randomTip}
</span>
</div>

</div>

`;

});

})
.catch(error => {
console.log(error);
});

}

/* LOAD DAILY TIPS */

showCategory('daily');

</script>

</body>
</html>
