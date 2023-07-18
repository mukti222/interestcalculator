function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var amount = parseInt(principal) + parseFloat(interest);
    var result = document.getElementById("result");

    if (principal <= 0) { // jika saldo 0 maka tidak bisa
        alert('Please enter a positive number!');
        document.getElementById("principal").focus();
    }  else {
        result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
    } 
}
        

function updateRate(){
    //rateval ambil value dri html ID= rate
    var rateval = document.getElementById("rate").value;
    //menyamakan range bunga 
    document.getElementById("rate_val").innerText = rateval;
}