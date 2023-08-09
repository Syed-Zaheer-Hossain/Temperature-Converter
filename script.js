let input = document.getElementById('input');
let inpUnit = document.getElementById('inp-unit');
let output = document.getElementById('output');
let outUnit = document.getElementById('out-unit');
let btn = document.getElementById('submit');

btn.addEventListener('click',()=>{
    let temp=0;
    if(inpUnit.value=='kelvin' && outUnit.value == 'celcius'){
        temp = input.value - 273.15;
        output.value = temp.toString().slice(0,6) + ' C';
    }
    else if(inpUnit.value=='celcius' && outUnit.value == 'kelvin'){
        temp = input.value -(- 273.15);
        output.value = temp.toString().slice(0,6) + ' K';
    }
    else if(inpUnit.value=='celcius' && outUnit.value == 'farenheit'){
        temp = (input.value * 9/5) + 32;
        output.value = temp.toString().slice(0,6) + ' F';
    }
    else if(inpUnit.value=='farenheit' && outUnit.value == 'celcius'){
        temp = (input.value - 32) * 5/9;
        output.value = temp.toString().slice(0,6) + ' C';
    }
    else if(inpUnit.value=='farenheit' && outUnit.value == 'kelvin'){
        temp = ((input.value - 32) * 5/9) + 273.15;
        output.value = temp.toString().slice(0,6) + ' K';
    }
    else if(inpUnit.value=='kelvin' && outUnit.value == 'farenheit'){
        temp = ((input.value-273.15) * 9/5) + 32;
        output.value = temp.toString().slice(0,6) + ' F';
    }
    else{
        output.value = "Error";
    }
});