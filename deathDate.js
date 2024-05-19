const alphabetLock = () => {
    document.querySelector('.number').addEventListener('keypress', (event) => {
        if (!/\d/.test(event.key)) {
            event.preventDefault();
        }
    });
}
alphabetLock();

// document.querySelector('#name').addEventListener('keypress', (event) => {
//     if (!/[a-zA-Z]/.test(event.key)) {
//         event.preventDefault();
//     }
// });

const calculateDeathDate = () => {
    var name = document.querySelector("#name");
    var dob = document.querySelector("#dob");
    var male = document.querySelector("#male");
    var female = document.querySelector("#female");
    var height = document.querySelector("#height");
    var weight = document.querySelector("#weight");
    var Drugs = document.querySelector("#Drugs");
    var Cigarettes = document.querySelector("#Cigarettes");
    var Alcohol = document.querySelector("#Alcohol");
    var calculate = document.querySelector("calculate");
    var calculatedData = document.querySelector(".calculatedData");
    var yourName = document.querySelector(".yourName");
    var totalLive = document.querySelector(".totalLive");
    var bmiInfo = document.querySelector(".bmiInfo");
    var bmi = document.querySelector(".bmi");
    var predictedDeathDate = document.querySelector(".predictedDeathDate");
    var timeLeft = document.querySelector(".timeLeft");
    var leftSeconds = document.querySelector(".leftSeconds");
    var graph = document.querySelector(".graph");
}

