function calculateBMI(weight, height) {

  if (typeof weight !== "number" || typeof height !== "number") {
    return "Error: Weight and height must be numbers.";
  }

  if (weight <= 0 || height <= 0) {
    return "Error: Values must be greater than zero.";
  }

  const bmi = weight / (height * height);

  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  return {
    BMI: bmi.toFixed(2),
    Category: category
  };
}

console.log(calculateBMI(70, 1.75));