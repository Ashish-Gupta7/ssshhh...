# Help me!
## problem 1
[otherPlanet](./otherPlanet/index.html)
```
            <div class="mercury w-full h-full relative">

                <!-- image -->
                <img class="absolute -left-[43%] -top-[23%] " height="65%" width="65%" src="./images/op-mercury.svg"
                    alt="">

                <!-- data -->
                <div class="ml-[48%] mt-20 w-[26%] flex flex-col items-center gap-6 text-zinc-200">
                    <h1 class="stagger text-4xl font-bold tracking-tighter">MERCURY</h1>
                    <p class="stagger text-sm ">Your age in years, days, and next birthday:</p>

                    <!-- calculation -->
                    <div class="w-full text-center flex flex-col gap-3">
                        <h1 class="stagger py-4 bg-zinc-200 bg-opacity-5 rounded-md text-3xl"><span
                                class="mercury_age text-5xl font-bold text-white">55.5 </span> years</h1>
                        <div class="stagger flex w-full gap-3">
                            <h1 class="w-full py-4 bg-zinc-200 bg-opacity-5 rounded-md text-sm"><span
                                    class="mercury_days text-2xl font-bold">80 </span> days</h1>
                            <h1
                                class="mercury_date w-full py-4 bg-zinc-200 bg-opacity-5 rounded-md text-lg font-bold text-center flex items-center justify-center">
                                Jul 12, 2024</h1>
                        </div>
                    </div>

                    <!-- facts -->
                    <h2 class="stagger font-bold tracking-tight text-lg mt-3">SOME KEY FACTS</h2>
                    <div class="planetData_hoverEffect flex flex-col gap-3 items-start">
                        <p class="stagger text-sm">Discovered in: <span
                                class="opacity-40 select-none text-xs">...........................................................</span>
                            14th century BC</p>
                        <p class="stagger text-sm">Type of planet: <span
                                class="opacity-40 select-none text-xs">.......................................................................</span>
                            terrestrial</p>
                        <p class="stagger text-sm">Number of moons: <span
                                class="opacity-40 select-none text-xs">...............................................................................</span>
                            0
                        </p>
                        <p class="stagger text-sm">Temperature: <span
                                class="opacity-40 select-none text-xs">.................................................................</span>
                            -173
                            to 427°C</p>
                        <p class="stagger text-sm">Mass relative to Earth: <span
                                class="opacity-40 select-none text-xs">................................................................</span>
                            0.06x</p>
                        <p class="stagger text-sm">Size relative to Earth: <span
                                class="opacity-40 select-none text-xs">.................................................................</span>
                            0.38x</p>
                        <p class="stagger text-sm">Distance from the Sun: <span
                                class="opacity-40 select-none text-xs">..........................................................</span>
                            0.39 AU</p>
                        <p class="stagger text-sm">Full revolution takes: <span
                                class="opacity-40 select-none text-xs">.....................................................</span>
                            0.2408 years</p>
                        <p class="stagger text-sm">One spin takes: <span
                                class="opacity-40 select-none text-xs">....................................................................</span>
                            58.6 days</p>
                    </div>

                    <!-- link -->
                    <a class="stagger mt-4 text-xs" href="https://science.nasa.gov/mercury/">More on Mercury on NASA
                        Science
                        page</a>
                </div>
            </div>
```

`iss code me jo ye part hai -->`
```
<span
class="opacity-40 select-none text-xs">....................................................................</span>
```

`isme mai dots ko likhna nhi chahta hu mai chahta hu ki ye dots mercury class ke width ke hisab se automatic hi adjust ho jaye.`

## problem 2
[otherPlanet](./otherPlanet/index.html)
`iss code me ->`
```
        <!-- homepage content -->
        <div class="flex home_content relative overflow-y-hidden max-[600px]:overflow-hidden">
            <!-- left -->
            <div class="left_content w-[51.5%] py-20 px-28 max-[600px]:w-full max-[600px]:px-2 max-[600px]:pt-[270px]">
                <!-- left top -->
                <div class=" relative">
                    <h3 class="text-[#3B4E7A] ml-2 text-xs font-bold tracking-[2px] max-[600px]:hidden">YOUR AGE ON OTHER PLANETS</h3>
                    <h1 class="quetion text-[56px] leading-[60px] pb-7 font-bold max-[600px]:text-[#6FB8DC] max-[600px]:text-[52px] max-[600px]:leading-[50px] max-[600px]:w-[270px] max-[600px]:pb-3">How old would you be on other planets?
                    </h1>
                    <h2 class="text-zinc-300 text-[18px] mb-5 max-[600px]:text-base">Planets circle the Sun at different orbits and different
                        speeds. They also spin around their axis at a different pace, thus days and years pass faster or
                        slower there. Would you like to know what's your age on Mars or Pluto? Enter your birthdate to
                        find
                        out:</h2>
```

```
// jab mai website ko responsive krta hu to ye ->
                    <h1 class="quetion text-[56px] leading-[60px] pb-7 font-bold max-[600px]:text-[#6FB8DC] max-[600px]:text-[52px] max-[600px]:leading-[50px] max-[600px]:w-[270px] max-[600px]:pb-3">How old would you be on other planets?
                    </h1>
```
```
// iss css code ko accept nhi kr rha hai ->
    .quetion {
        background: linear-gradient(to bottom left, #4CC0ED, #6FB8DC, #BFA5B5, #F29A9D);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

// mtlb responsive krne pr -webkit-text-fill-color: transparent; ki wajah se linear-gradient kaam nhi kr rha hai.
```

## problem 3
[otherPlanet](./otherPlanet/index.html)
`isme jab mai date ko fill krne ke baad go pr click krta hu to ek animation ke baad otherPlanets pr age dikhti hai lekin jab mai waha pr scrollTrigger lagane ki kosis krta hu to ye kaam nhi kr rha hai.`