//create the variable for the number to be converted
 let number = 20;

//select each element responsible for rendering and store it in a variable
    let numberToConvert = document.getElementById("number-to-convert")
    numberToConvert.textContent = number;


    let lengthEl = document.getElementById("length-el"); 
    let volumeEl = document.getElementById("volume-el"); 
    let massEl = document.getElementById("mass-el"); 

    //Create 3 functions: one for each conversion 

        function lengthConversion(){
            let meterToFeet = (number * 3.28).toFixed(3)
            let feetToMeter = (number * 0.3048).toFixed(3)
            lengthEl.textContent = `${number} Meter = ${meterToFeet} Feet | ${number} Feet = ${feetToMeter} Meters`       
        }
        lengthConversion()
        function volumeConversion(){
            let literToGallon = (number * 0.264).toFixed(3)
            let gallonToLiter = (number * 3.785).toFixed(3)
            volumeEl.textContent = `${number} Liter = ${literToGallon} Gallon | ${number} Gallon = ${gallonToLiter} Liter` 
        }
        volumeConversion()
        function massConversion(){
            let kilosToPounds = (number * 2.2).toFixed(3)
            let poundsToKilos = (number / 2.2046).toFixed(3)
            massEl.textContent = `${number} Kilogram = ${kilosToPounds} Pound | ${number} Pound = ${poundsToKilos} Kilogram` 
        }
        massConversion()

        //Inside each function do the math operartion with the number stored in the variable.
        //render the result in the corresponding element. 

