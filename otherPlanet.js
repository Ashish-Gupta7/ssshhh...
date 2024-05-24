// month, day and year innerHTML
// month
var month = document.querySelector(".dropdownMonth .month");
var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var monthli = `<li class="disabled:cursor-not-allowed mb-3 w-full  font-bold">Months</li>`;
monthName.forEach(elm => {
    monthli = monthli + `<li class="monthNameli relative opacity-0 mt-[2px] hover:before:bg-[#1e263566] before:contents-[] before:absolute before:left-[-15.5%] before:w-[131%] before:h-full before:py-2">${elm}</li>`;
});
month.innerHTML = monthli;


// day
var daysInArray = [];
for(let i = 1; i <= 31; i++) {
    daysInArray.push(i);
}

var day = document.querySelector(".dropdownDay .day");
var dayli = `<li class="disabled:cursor-not-allowed mb-3 w-full  font-bold">Days</li>`;
daysInArray.forEach(elm => {
    dayli = dayli + `<li class="dayNameli relative opacity-0 mt-[2px] hover:before:bg-[#1e263566] before:contents-[] before:absolute before:left-[-15.5%] before:w-[131%] before:h-full before:py-2">${elm}</li>`;
});
day.innerHTML = dayli;


// year
var yearsInArray = [];
for(let i = 1920; i <= new Date().getFullYear(); i++) {
    yearsInArray.push(i);
}

var year = document.querySelector(".dropdownYear .year");
var yearli = `<li class="disabled:cursor-not-allowed mb-3 w-full  font-bold">Years</li>`;
yearsInArray.forEach(elm => {
    yearli = yearli + `<li class="yearNameli relative mt-[2px] opacity-0 hover:before:bg-[#1e263566] before:contents-[] before:absolute before:left-[-15.5%] before:w-[131%] before:h-full before:py-2">${elm}</li>`
});
year.innerHTML = yearli;


// dropdown month, day & year
// month
var dropdownMonth = document.querySelector(".dropdownMonth");
dropdownMonth.addEventListener("mouseover", () => {
    var m1 = gsap.timeline();
    m1.to(month, {
        display: "block"
    });
    m1.to(".month li", {
        stagger: .04,
        opacity: 1
    })
});
dropdownMonth.addEventListener("mouseout", () => {
    gsap.to(month, {
        display: "none"
    });
});

// day
var dropdownDay = document.querySelector(".dropdownDay");
dropdownDay.addEventListener("mouseover", () => {
    var d1 = gsap.timeline();
    d1.to(day, {
        display: "block"
    });
    d1.to(".day li", {
        stagger: .02,
        opacity: 1
    });
});
dropdownDay.addEventListener("mouseout", () => {
    gsap.to(day, {
        display: "none"
    });
});

// year
var dropdownYear = document.querySelector(".dropdownYear");
dropdownYear.addEventListener("mouseover", () => {
    var y1 = gsap.timeline();
    y1.to(year, {
        display: "block"
    });
    y1.to(".year li", {
        stagger: .02,
        opacity: 1
    })
});
dropdownYear.addEventListener("mouseout", () => {
    gsap.to(year, {
        display: "none"
    });
});

// display the selected dropdown month, day and year
// month
const monthNamesArray = [
    {name: "January", number: "01"},
    {name: "February", number: "02"},
    {name: "March", number: "03"},
    {name: "April", number: "04"},
    {name: "May", number: "05"},
    {name: "June", number: "06"},
    {name: "July", number: "07"},
    {name: "August", number: "08"},
    {name: "September", number: "09"},
    {name: "October", number: 10},
    {name: "November", number: 11},
    {name: "December", number: 12}
];

var monthNameli = document.querySelectorAll(".month .monthNameli");
var mm = document.querySelector(".mm");
monthNameli.forEach(elm => {
    elm.addEventListener("click", (dets) => {
        let clickedMonth = dets.target.innerHTML;
        let monthNum = monthNamesArray.find(elm => {
            return elm.name === clickedMonth; 
        });
        if(monthNum) monthNum = monthNum.number;
        mm.innerHTML = monthNum;
    });
});

// day
var dayNameli = document.querySelectorAll(".day .dayNameli");
var dd = document.querySelector(".dd");
dayNameli.forEach(elm => {
    elm.addEventListener("click", (dets) => {
        let clickedDay = dets.target.innerHTML;
        if(clickedDay <= 9) {
            clickedDay = "0" + clickedDay;
        }
        dd.innerHTML = clickedDay;
    });
});

// year
var yearNameli = document.querySelectorAll(".year .yearNameli");
var yyyy = document.querySelector(".yyyy");
yearNameli.forEach(elm => {
    elm.addEventListener("click", (dets) => {
        let clickedYear = dets.target.innerHTML;
        yyyy.innerHTML = clickedYear;
    });
});

// submitted dob

// add conditions for empty submission.

var earthDay = dd.textContent;
console.log(earthDay);

earthDay.addEventListener("change", () => {
    console.log(earthDay);
});


var submitDob = document.querySelector(".submitDob");
submitDob.addEventListener("click", (dets) => {
    var earthMonth = mm.innerText;
    var earthYear = yyyy.innerText;
    if(earthDay === "DD" && earthMonth === "MM" && earthYear === "YYYY") {
        console.log("hhhh");
    }
    else{
        submitDob.addEventListener("mouseenter", () => {
            submitDob.style.backgroundColor = "#5CCBE9";
        });
        submitDob.addEventListener("mouseleave", () => {
            submitDob.style.backgroundColor = "#886D27";
        });
    }
});