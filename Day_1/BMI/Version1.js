function calculateBMI(weight,height){
    const bmi = weight/(height*height);
    return bmi;
}
console.log(calculateBMI(70,1.75));