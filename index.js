document.addEventListener("DOMContentLoaded", function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', function() {
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters
        const bmi = weight / (height * height);
        const bmiCategory = getBMICategory(bmi);
        resultDiv.innerHTML = `<p>Your BMI is: ${bmi.toFixed(2)}</p><p>You are ${bmiCategory}</p>`;
    });

    function getBMICategory(bmi) {
        if (bmi < 18.5) {
            return "Underweight,try to gain weight";
        } else if (bmi >= 18.5 && bmi < 25) {
            return "Normal weight";
        } else if (bmi >= 25 && bmi < 30) {
            return "Overweight, try to reduse weight";
        } else {
            return "Obese";
        }
    }
});





