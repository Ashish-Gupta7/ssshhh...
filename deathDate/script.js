const onlyNumbers = () => {
    document.querySelector('.number').addEventListener('keypress', (event) => {
        if (!/\d/.test(event.key)) {
            event.preventDefault();
        }
    });
}
onlyNumbers();

const onlyAlphabets = () => {
    document.querySelector('#name').addEventListener('keypress', (event) => {
        if (!/[a-zA-Z\s]/.test(event.key)) {
            event.preventDefault();
        }
    });
}
onlyAlphabets();

var name = document.querySelector("#name");
var form = document.querySelector("form");
var calculatedData = document.querySelector(".calculatedData");
var yourName = document.querySelector(".yourName");
var totalLive = document.querySelector(".totalLive");
var bmiInfo = document.querySelector(".bmiInfo");

// // Death Date Calculator

// current browser's window url -->

function getUrlParams(url) {
    var params = {};
    var parser = document.createElement('a');
    parser.href = url;
    var query = parser.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return params;
}

var url = window.location.href;
var params = getUrlParams(url);

// bmi
var bmi = params.weight / ((params.height / 100) * (params.height / 100));

bmi = parseFloat(bmi.toFixed(2));
console.log(bmi);
var getWeightCategory = (bmi) => {
    if (bmi < 18.5) {
        return "Underweight";  // Underweight
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal weight"; // Normal weight
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Overweight"; // Overweight
    } else {
        return "Obese"; // Obese
    }
}

var weightCategory = getWeightCategory(bmi);
var feedback = "";

if (weightCategory === "Underweight") {
    feedback = "~ Your BMI is underweight. You may need to gain some weight for better health.";
} else if (weightCategory === "Normal weight") {
    feedback = "~ Your BMI is normal. This is a healthy range.";
} else if (weightCategory === "Overweight") {
    feedback = "~ Your BMI is overweight. You may need to consider losing some weight for better health.";
} else {
    feedback = "~ Your BMI is obese. It's important to take steps to improve your health.";
}

bmiInfo.innerHTML = feedback;

var bmiSplit = bmiInfo.textContent.split("");
var bmiContent = "";
bmiSplit.forEach(elm => {
    bmiContent = bmiContent + `<span>${elm}</span>`;
});
bmiInfo.innerHTML = bmiContent;

// death date
var averageLifeExpectancy = 73;

var lifeExpectancy = averageLifeExpectancy;
if (bmi > 30) {
    lifeExpectancy -= 5;
} else if (bmi <= 30 && bmi >= 25) {
    lifeExpectancy -= 3;
} else if (bmi > 19 && bmi < 25) {
    lifeExpectancy += 2;
} else {
    lifeExpectancy -= 1;
}

var Alcohol = params.Alcohol;
var Drugs = params.Drugs;
var Cigarettes = params.Cigarettes;

if (Alcohol && Drugs && Cigarettes) {
    console.log("12");
    lifeExpectancy -= 12;
} else if ((Alcohol && Drugs) || (Drugs && Cigarettes) || (Alcohol && Cigarettes)) {
    lifeExpectancy -= 8;
    console.log("8");
} else if (Alcohol || Drugs || Cigarettes) {
    lifeExpectancy -= 5;
    console.log("5");
} else {
    lifeExpectancy += 5;
}

var birth = params.birth;
var birthSplit = birth.split("-");
var birthYear = Number(birthSplit[0]);
var birthMonth = Number(birthSplit[1]);
var birthDay = Number(birthSplit[2]);

var deathDate = birthYear + lifeExpectancy;
// split into span
var almostLive = `${lifeExpectancy} years, ${birthMonth}, months and ${birthDay} days.`;
console.log(almostLive);
totalLive.innerHTML = almostLive;
var splitLive = totalLive.textContent.split("");
console.log(splitLive);
var liveContent = "";
splitLive.forEach(elm => {
    liveContent = liveContent + `<span>${elm}</span>`;
});
totalLive.innerHTML = liveContent;
var yourNameJoinedSpaces = params.name.split("+").join(" ");
const yourNameSpan = () => {
    yourName.innerHTML = yourNameJoinedSpaces;
    var text = yourName.textContent;
    var splittedText = text.split("");
    var content = "";
    splittedText.forEach(elm => {
        content = content + `<span>${elm}</span>`;
    });
    yourName.innerHTML = content;
}
yourNameSpan();


var bmiTotal = document.querySelector(".bmi");
var predictedDeathDate = document.querySelector(".predictedDeathDate");
var timeLeft = document.querySelector(".timeLeft");
var leftSeconds = document.querySelector(".leftSeconds");
var graph = document.querySelector(".graph");

bmiTotal.innerHTML = bmi;
predictedDeathDate.innerHTML = `${birthDay}-${birthMonth}-${deathDate}`;
var leftYear = Number(deathDate) - new Date().getFullYear();
timeLeft.innerHTML = `Almost ${leftYear} Years !`;
// var graphWidth = Number(`${leftYear}%`);
// console.log(graphWidth);

// Countdown timer setup
const countdownSeconds = leftYear * 365 * 24 * 60 * 60; // Initial count down time in seconds
let remainingTime = countdownSeconds;
function updateCountdown() {
    // Check if time has finished
    if (remainingTime <= 0) {
        clearInterval(intervalId); // Stop the interval
        console.log("Countdown finished!");
        return;
    }
    // Update the display
    leftSeconds.innerText = remainingTime; // Display in seconds
    // Decrease the remaining time
    remainingTime--;
}
// Start the countdown
const intervalId = setInterval(updateCountdown, 1000);

// gsap animation
if (params != "") {
    var tl = gsap.timeline();
    tl.to(calculatedData, {
        opacity: 1,
        cursor: "auto",
    });
    tl.to(".yourName.spanOpacity span", {
        opacity: 1,
        stagger: .2
    });
    tl.to(".totalLive.spanOpacity span", {
        opacity: 1,
        stagger: .07
    }, "info");
    tl.to(".bmiInfo.spanOpacity span", {
        opacity: 1,
        stagger: .07
    }, "info");
    tl.to(bmiTotal, {
        opacity: 1
    }, "data");
    tl.to(predictedDeathDate, {
        opacity: 1
    }, "data");
    tl.to(timeLeft, {
        opacity: 1
    }, "data");
    tl.to(leftSeconds, {
        opacity: 1
    }, "data");
    tl.to(graph, {
        duration: 2,
        ease: "power1.out",
        opacity: 1,
        width: `${leftYear}%`
    });
}

// when page refresh url refresh
if (performance.navigation.type === 1) {
    // Reset URL to just the current page path
    window.history.replaceState(null, null, window.location.pathname);
}