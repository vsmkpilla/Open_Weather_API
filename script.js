//Storing Html Elements 
var input = document.getElementById('input_text');
var main = document.getElementById('name');
var temp = document.getElementById('temp');
var desc = document.getElementById('desc');
var Farenheit_value = document.getElementById('Farenheit');
var Celcius_value = document.getElementById('Celsius');
var button= document.getElementById('submit');

//Added an eventListner to button 
button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=95cdbfde067d7bc333f79b34a329e2a1')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var fH = (tempValue*(9/5)-459.67);
  var cels =(tempValue-273.5);

  main.innerHTML = nameValue;
  desc.innerHTML = descValue;
  temp.innerHTML = tempValue;
  Farenheit_value.innerHTML =fH;
  Celcius_value.innerHTML =cels;

})

.catch(err => alert("Wrong city name!"));
})
