addDigit = (value) => {
    document.getElementById("result").value += value;
}


addOperator = (value) => {
    const result = document.getElementById("result");
    const lastChar = result.value[result.value.length - 1];

    // check if the last character is an operator or if the input is empty
    if (result.value === '' || lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/' || lastChar === '.') {
        // if the new value is also an operator, do not add it to the result but replace the last operator with the new value
        if (value === '+' || value === '-' || value === '*' || value === '/') {
            result.value = result.value.slice(0, result.value.length - 1) + value;
        }
    } else {
        // if the last character is not an operator and the input is not empty, simply add the new value to the result
        result.value += value;
    }
}


clearResult = () => {
    document.getElementById("result").value = "";
}

calculateResult = () => {
    const equation = document.getElementById("result").value;
    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            equation: equation
        })
    }).then(response => response.json())
        .then(data => {
            document.getElementById("result").value = data.result;
        })
}
