const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0 // Initialize a variabe 'load' to start at 0

let int = setInterval(blurring, 30) //Run it as an interval, run it every 30 milliseconds

function blurring() {           
    load++

    if (load > 99) { 
        clearInterval(int)  //If load is greater than 99, stop the interval using th clearInterval
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)   
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

}
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
      }



//Line 16 - Load is the number, 0 to 100...the opacity is starting from 1 to 0
//Line 17 - 30 is for the blur px
//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers