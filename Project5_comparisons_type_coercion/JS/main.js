document.write("<br>" + "10" + 5 + "<br>");



document.write(2E310 + '<br>');
document.write(-3E310+ '<br>');

document.write(10 > 2);

 
console.log(3+3);


document.write(((points == 4) || (score == 4)));

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}

function const_function() {
    document.getElementById("or").innerHTML = (5 > 10 || 10 > 4);
    document.getElementById("and").innerHTML = (5 > 2 && 10 > 4);
    document.getElementById("Test").innerHTML = isNaN('This is a string');
    document.getElementById('Test2').innerHTML = isNaN('007');
    document.getElementById("datavalue").innerHTML = (10 === 10);
    document.getElementById("Log").innerHTML = (10 === "10");
    document.getElementById("datatype").innerHTML = (4 === "13");
    document.getElementById("different").innerHTML = (5 === 6);
}