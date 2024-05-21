// month, day and year innerHTML
// month
var month = document.querySelector(".dropdown .month");
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
console.log(daysInArray);



var dropDown = document.querySelectorAll(".dropdown");
dropDown.forEach(elm => {
    elm.addEventListener("mouseover", () => {
        var tl1 = gsap.timeline();
        tl1.to(month, {
            display: "block"
        });
        tl1.to(".month li", {
            stagger: .2,
            opacity: 1
        })
    });
    elm.addEventListener("mouseout", () => {
        gsap.to(month, {
            display: "none"
        });
    });
});

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

monthNameli.forEach(elm => {
    elm.addEventListener("click", (dets) => {
        let clickedMonth = dets.target.innerHTML;

        let monthNum = monthNamesArray.find(elm => {
            return elm.name === clickedMonth; 
        });
        if(monthNum) monthNum = monthNum.number;
        document.querySelector(".mm").innerHTML = monthNum
    });
});


// day
