const form = document.querySelector('form');

// This usecase will give you empty value because when script load it check height value which is empty so this is wrong
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#Height').value);
    const weight = parseInt(document.querySelector('#Weight').value); 
    const result = document.querySelector('#result'); 
    const message = document.querySelector('#message');
    const bmi = (weight / ((height*height)/10000)).toFixed(2);

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`
    }else{
        
        //show the result
        result.innerHTML = `<span>${bmi}</span>`
    }

    if(bmi < 18.6){
        message.innerHTML = "Under Weight"
    }
    else if(bmi >= 18.6 && bmi <= 24.9){
        message.innerHTML = "Normal Range"
    }
    else{
        message.innerHTML = "Overweight"
    }
})