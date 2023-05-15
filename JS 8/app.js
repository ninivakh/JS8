function gamotvla(){
    var numb1 = document.getElementById("number1").value;
    var numb2 = document.getElementById("number2").value;

    document.getElementById("result").innerHTML = Number(numb1) + Number(numb2);
    document.getElementById("result2").innerHTML = Number(numb1) - Number(numb2);
    document.getElementById("result3").innerHTML = Number(numb1) / Number(numb2);
    document.getElementById("result4").innerHTML = Number(numb1) * Number(numb2);
    return false
}
