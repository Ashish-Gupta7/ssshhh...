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
for (let i = 1; i <= 31; i++) {
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
for (let i = 1920; i <= new Date().getFullYear(); i++) {
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
    { name: "January", number: "01" },
    { name: "February", number: "02" },
    { name: "March", number: "03" },
    { name: "April", number: "04" },
    { name: "May", number: "05" },
    { name: "June", number: "06" },
    { name: "July", number: "07" },
    { name: "August", number: "08" },
    { name: "September", number: "09" },
    { name: "October", number: 10 },
    { name: "November", number: 11 },
    { name: "December", number: 12 }
];

var monthNameli = document.querySelectorAll(".month .monthNameli");
var mm = document.querySelector(".mm");
monthNameli.forEach(elm => {
    elm.addEventListener("click", (dets) => {
        let clickedMonth = dets.target.innerHTML;
        let monthNum = monthNamesArray.find(elm => {
            return elm.name === clickedMonth;
        });
        if (monthNum) monthNum = monthNum.number;
        mm.innerHTML = monthNum;
    });
});

// day
var dayNameli = document.querySelectorAll(".day .dayNameli");
var dd = document.querySelector(".dd");
dayNameli.forEach(elm => {
    elm.addEventListener("click", (dets) => {
        let clickedDay = dets.target.innerHTML;
        if (clickedDay <= 9) {
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
        let clickedYear = Number(dets.target.innerHTML);
        yyyy.innerHTML = clickedYear;
    });
});

// input date is valid ?
const isValidDateOrNot = (date) => {
    const calender = new Date(date[2], date[1], date[0]);
    if (isNaN(calender.getTime())) {
        return false;
    }

    const vday = date[0];
    const vmonth = date[1];
    const vyear = date[2];

    switch (vmonth) {
        case 0: // jan
        case 2: // mar
        case 4: // may
        case 6: // jul
        case 7: // aug
        case 9: // oct
        case 11: // dec
            if (vday > 31) {
                return false;
            } else {
                return true;
            }
            break;
        case 3: // apr
        case 5: // jun
        case 8: // sep
        case 10: // nov
            if (vday > 30) {
                return false;
            } else {
                return true;
            }
            break;
        case 1: // feb
            if (isLeapYearOrNot(vyear)) {
                if (vday > 29) {
                    return false;
                }
            } else if (vday > 28) {
                return false;
            } else {
                return true;
            }
            break;
        default:
            return true;
    }
}

var afterSubmit = document.querySelector(".after_submit");
var submitDob = document.querySelector(".submitDob");
submitDob.addEventListener("click", (dets) => {
    var earthDay = dd.innerHTML;
    var earthMonth = mm.innerHTML;
    var earthYear = yyyy.innerHTML;
    if (earthDay === "DD" || earthMonth === "MM" || earthYear === "YYYY") {
        alert("Please! First You Select Your DOB.");
    }
    else {
        var eday = Number(dd.innerHTML);
        var emonth = Number(mm.innerHTML - 1);
        var eyear = Number(yyyy.innerHTML);
        if ((typeof eday) === "number") {
            var date = [eday, emonth, eyear];
            isValidDateOrNot(date);
            forNextBirthday(date);
            if (isValidDateOrNot(date) === false) {
                alert("Please! Enter your correct DOB.");
            } else {
                var slide = gsap.timeline();
                slide.to(".left_content", {
                    delay: .2,
                    duration: 1,
                    x: -700
                }, "same");
                slide.to(".astro", {
                    delay: .2,
                    duration: .8,
                    x: -1500
                }, "same");
                slide.to(".neptune", {
                    delay: .4,
                    duration: 1.2,
                    x: -2000
                }, "same");
                slide.to(".home_content", {
                    display: "none"
                }, "page");
                slide.to(afterSubmit, {
                    display: "block"
                }, "page");
                slide.to(afterSubmit, {
                    opacity: 1
                }, "page");
                slide.from(".after_submit .mercury img", {
                    opacity: 0,
                    x: 2100,
                });
                slide.from(".after_submit .mercury .stagger", {
                    y: 700,
                    opacity: 0,
                    stagger: .1
                });
            }
        }
    }
});

// check year is leap year or not
const isLeapYearOrNot = (year) => {
    return (year % 4 === 0 && year % 100 != 0) || (year % 400 === 0);
}

const forNextBirthday = (date) => {
    var bDay = new Date(date[2], date[1], date[0]);
    var cDay = new Date();

    console.log(bDay);
    // next birthday
    var bDate = bDay.getDate();
    var bMonth = bDay.getMonth();
    var bYear = bDay.getFullYear();
    var cDate = cDay.getDate();
    var cMonth = cDay.getMonth();
    var cYear = cDay.getFullYear();
    var nYear = cYear + 1;

    var nextBirthday = "";

    if (bDate === 29 && isLeapYearOrNot(bYear) && bMonth === 1) {
        if ((isLeapYearOrNot(cYear)) && ((cMonth < bMonth) || (cMonth <= bMonth && cDate < bDate))) {
            nextBirthday = new Date(cYear, 1, 29);
        }
        else if ((isLeapYearOrNot(cYear)) && ((cMonth > bMonth) || (cMonth >= bMonth && cDate > bDate))) {
            nextBirthday = new Date(nYear, bMonth, bDate);
        }
        else if ((isLeapYearOrNot(cYear)) && ((cMonth > bMonth) || (cMonth >= bMonth && cDate >= bDate))) {
            nextBirthday = new Date(nYear, bMonth, bDate);
        }
        else if (((!isLeapYearOrNot(cYear)) && (isLeapYearOrNot(nYear))) && ((cMonth < bMonth) || (cMonth <= bMonth && cDate < bDate))) {
            nextBirthday = new Date(cYear, bMonth, bDate);
        }
        else if (isLeapYearOrNot(nYear)) {
            nextBirthday = new Date(nYear, 1, 29);
        }
        else if ((!isLeapYearOrNot(cYear)) && ((cMonth < bMonth) || (cMonth <= bMonth && cDate < bDate))) {
            nextBirthday = new Date(cYear, bMonth, bDate);
        }
        else if ((!isLeapYearOrNot(cYear)) && ((cMonth > bMonth) || (cMonth >= bMonth && cDate > bDate))) {
            nextBirthday = new Date(nYear, bMonth, bDate);
        }
    } else if ((!isLeapYearOrNot(bYear)) && ((cMonth < bMonth) || (cMonth <= bMonth && cDate < bDate))) {
        nextBirthday = new Date(cYear, bMonth, bDate);
    } else if ((!isLeapYearOrNot(bYear)) && ((cMonth > bMonth) || (cMonth >= bMonth && cDate > bDate))) {
        nextBirthday = new Date(nYear, bMonth, bDate);
    }

    console.log(nextBirthday);

    // Calculate the difference in time
    const differenceInTime = cDay.getTime() - bDay.getTime();

    // Convert time difference from milliseconds to days
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    const fixedDays = Number(differenceInDays.toFixed(0));

    // Convert days to years (considering leap years)
    const exactAgeInYears = differenceInDays / 365.25;
    const fixedAge = Number(exactAgeInYears.toFixed(1));

    console.log(fixedDays);
    console.log(fixedAge);

    const formateAnyDate = (formate) => {
        const fday = formate.getDate();
        const fmonth = formate.getMonth();
        const fyear = formate.getFullYear();

        const formattedDay = String(fday).padStart(2, '0');

        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        return `${formattedDay} ${monthNames[fmonth]} ${fyear}`;
    }

    // mercury
    const ageOnMercury = Math.floor(fixedDays / 88);
    const totalDaysOnMercury = ageOnMercury * 88;
    const nextBirthdayOnMercuryInDays = 88 - (fixedDays - totalDaysOnMercury);
    const nextBirthdayOnMercury = formateAnyDate(new Date((cDay.setDate(cDay.getDate() + nextBirthdayOnMercuryInDays))));

    var mercuryAge = document.querySelector(".mercury_age");
    var mercuryDays = document.querySelector(".mercury_days");
    var mercuryDate = document.querySelector(".mercury_date");
    mercuryAge.innerHTML = ageOnMercury;
    mercuryDays.innerHTML = nextBirthdayOnMercuryInDays;
    mercuryDate.innerHTML = nextBirthdayOnMercury;
}