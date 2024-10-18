function convert() {
    let num = document.getElementById("numValue").value;
    let from = document.getElementById("option1").value;
    let converted = document.getElementById("result");
    let error = document.getElementById("error");

    if (num === "") {
        error.innerText = `Enter a value to change currency!`;
        return;
    }

    let result;
    if (from === "Riyal") {
        result = num * 73.92;
        converted.innerText = `Total currency in PKR is: ${result}`;
    } else if (from === "USD") {
        result = num * 278.48;
        converted.innerText = `Total currency in PKR is: ${result}`;
    } else {
        converted.innerText = `Invalid value Please select different units.`;
    }
}




function reset() {
    document.getElementById("numValue").value = "";
    document.getElementById("result").innerText = "";
    document.getElementById("error").innerText = "";
}