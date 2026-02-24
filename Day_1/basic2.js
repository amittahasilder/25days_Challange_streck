// Version 2 — Professional Version with Validation

function convertTemperature(value,type){
    if(typeof value !== "number" || isNaN(value)){
        return "Error: Input must be a valid number.";
    }
    if(type == "CtoF"){
        return(value*9/5)+32;
    }
    if(type == "FtoC"){
        return (value-32)*5/9;
    }
    return "Error: Invalid conversion type";
}

console.log(convertTemperature(25, "CtoF"));
console.log(convertTemperature(77, "FtoC"));
