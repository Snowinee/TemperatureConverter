
function toCelsius(temp) {
    return temp - 32 * 5/9;
}

function toFarenheit(temp) {
    return (temp * 9/5) + 32;
}

let celsius = document.getElementById("celciusBtn");
let farenheit = document.getElementById("farenheitBtn")
let answerDisplay = document.getElementById("answer")

document.getElementById("submitBtn").onclick = function() {
    
    let temp = document.getElementById("number").value;
    let promptTemp = temp;

    if (celsius.checked == true) {
        temp = toCelsius(temp)
        answerDisplay.innerHTML = `${promptTemp} Farenheit in Celsius is ${temp}`
        console.log("Converting to celsius...", temp);
    }

    else if (farenheit.checked == true) {
        temp = toFarenheit(temp)
        answerDisplay.innerHTML = `${promptTemp} Celsius in Farenheit is ${temp}`
        console.log("Converting to faraheit...", temp);
    }
}