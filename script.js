// Form ko select kiya
const form = document.querySelector('form');

// Jab form submit hoga tab ye function chalega
form.addEventListener('submit', function(e){

    // Page reload hone se rokta hai
    e.preventDefault();

    // Height aur Weight ki value input se li
    const height = parseInt(document.querySelector('#Height').value);
    const weight = parseInt(document.querySelector('#Weight').value); 

    // Result aur message div ko select kiya
    const result = document.querySelector('#result'); 
    const message = document.querySelector('#message');

    // Purana result clear kar diya
    result.innerHTML = "";
    message.innerHTML = "";

    // Height validation
    // Agar height number nahi hai ya 0 se choti/barabar hai
    if(isNaN(height) || height <= 0){

        result.innerHTML = `Please give a valid height`;
    }

    // Weight validation
    // Agar weight number nahi hai ya 0 se chota/barabar hai
    else if(isNaN(weight) || weight <= 0){

        result.innerHTML = `Please give a valid weight`;
    }

    else{

        // BMI Formula
        // Height ko meter me convert karne ke liye /10000 use kiya
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        // BMI result show kar diya
        result.innerHTML = `<span>${bmi}</span>`;

        // BMI ke according message show hoga

        // Agar BMI 18.6 se kam hai
        if(bmi < 18.6){

            message.innerHTML = "Under Weight";
        }

        // Agar BMI 18.6 aur 24.9 ke beech hai
        else if(bmi >= 18.6 && bmi <= 24.9){

            message.innerHTML = "Normal Range";
        }

        // Agar BMI 24.9 se zyada hai
        else{

            message.innerHTML = "Overweight";
        }
    }
});
