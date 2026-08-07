function calculateScore(){

let score = 0;

<h2>Hello ${name || "Friend"}! 👋</h2>

const age = document.getElementById("age").value;
const travel = document.getElementById("travel").value;
const distance = document.getElementById("distance").value;
const acs = document.getElementById("acs").value;
const acusage = document.getElementById("acusage").value;
const electricity = document.getElementById("electricity").value;
const generator = document.getElementById("generator").value;
const trees = document.getElementById("trees").value;
const support = document.getElementById("support").value;

/* AGE */

if(age=="Under 12") score+=5;
if(age=="13-18") score+=8;
if(age=="Adult") score+=10;

/* TRAVEL */

if(travel=="Walk") score+=0;
if(travel=="Bicycle") score+=2;
if(travel=="School Bus") score+=5;
if(travel=="Metro") score+=6;
if(travel=="Bike") score+=15;
if(travel=="Car") score+=20;

/* DISTANCE */

if(distance=="0-5 km") score+=2;
if(distance=="5-15 km") score+=8;
if(distance=="15-30 km") score+=15;
if(distance=="More than 30 km") score+=25;

/* ACS */

score += (parseInt(acs)-1)*5+5;

/* AC USAGE */

if(acusage=="0-2 hours") score+=2;
if(acusage=="2-5 hours") score+=8;
if(acusage=="5-8 hours") score+=15;
if(acusage=="8+ hours") score+=25;

/* ELECTRICITY */

if(electricity=="Less than 100 units") score+=5;
if(electricity=="100-250 units") score+=10;
if(electricity=="250-500 units") score+=20;
if(electricity=="More than 500 units") score+=30;

/* GENERATOR */

if(generator=="Never") score+=0;
if(generator=="Sometimes") score+=10;
if(generator=="Frequently") score+=20;
if(generator=="Daily") score+=35;

/* TREES */

if(trees=="Frequently") score+=0;
if(trees=="Sometimes") score+=5;
if(trees=="Once a year") score+=10;
if(trees=="Never") score+=20;

/* SUPPORT */

if(support=="Maybe") score+=5;
if(support=="No") score+=10;

let level="";
let color="";
let advice="";

if(score<=40){
level="🌿 Low";
color="#2ecc71";
advice="Excellent! Keep making eco-friendly choices.";
}
else if(score<=70){
level="🟡 Moderate";
color="#f1c40f";
advice="You're doing well! Small changes can reduce your footprint further.";
}
else if(score<=100){
level="🟠 High";
color="#e67e22";
advice="Consider reducing AC usage, travelling sustainably, and saving electricity.";
}
else{
level="🔴 Very High";
color="#e74c3c";
advice="Your carbon footprint is high. Small daily changes can make a big difference.";
}

document.getElementById("result").innerHTML=
`
<h2>Hello ${name || "Friend"}! 👋</h2>

<h1 style="color:${color};">${score} Points</h1>

<h2>${level}</h2>

<p>${advice}</p>

<hr style="margin:20px 0;">

<h3>💚 Team Shakti's Mission</h3>

<p>
Our project converts Industrial CO₂ and Seawater into Sustainable Methanol,
helping reduce pollution while creating cleaner fuel for tomorrow.
</p>
`;

}
